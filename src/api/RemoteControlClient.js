import fs from 'node:fs';
import { routes } from '../utils/routes.js';

/**
 * Raised when the RemoteControl API reports a failure.
 *
 * LimeSurvey reports most failures inside `result` as `{ status, error_code }`
 * (not in the JSON-RPC `error` member), so both shapes are converted to this error.
 */
export class RemoteControlError extends Error {
  /**
   * @param {string} method RPC method name
   * @param {string} status Human-readable status returned by LimeSurvey
   * @param {string} [errorCode] e.g. ERR_INVALID_SESSION, ERR_NO_PERMISSION
   */
  constructor(method, status, errorCode) {
    super(`RemoteControl ${method} failed: ${status}${errorCode ? ` (${errorCode})` : ''}`);
    this.name = 'RemoteControlError';
    this.method = method;
    this.status = status;
    this.errorCode = errorCode;
  }
}

function isErrorResult(result) {
  return result !== null && typeof result === 'object' && !Array.isArray(result) && 'error_code' in result;
}

/**
 * Thin client for the LimeSurvey RemoteControl 2 JSON-RPC API
 * (application/helpers/remotecontrol/remotecontrol_handle.php).
 *
 * It wraps a Playwright APIRequestContext, so every call shows up in traces and reports.
 * The server must have `RPCInterface` set to `json`.
 */
export class RemoteControlClient {
  #request;
  #sessionKey = null;
  #requestId = 0;

  /**
   * @param {import('@playwright/test').APIRequestContext} request A context whose baseURL is the LimeSurvey entry URL
   */
  constructor(request) {
    this.#request = request;
  }

  get sessionKey() {
    return this.#sessionKey;
  }

  /**
   * Low-level JSON-RPC call. Returns `result`, throws RemoteControlError on any failure.
   * @param {string} method
   * @param {unknown[]} params
   */
  async call(method, params = []) {
    const response = await this.#request.post(routes.api.remoteControl, {
      data: { method, params, id: ++this.#requestId },
      headers: { Accept: 'application/json' },
    });
    if (!response.ok()) {
      throw new RemoteControlError(method, `HTTP ${response.status()} ${response.statusText()}`);
    }

    let body;
    try {
      body = await response.json();
    } catch {
      const text = (await response.text()).slice(0, 200);
      throw new RemoteControlError(method, `Non-JSON response (is RPCInterface set to "json"?): ${text}`);
    }

    if (body.error) {
      const message = typeof body.error === 'string' ? body.error : JSON.stringify(body.error);
      throw new RemoteControlError(method, message);
    }
    if (isErrorResult(body.result)) {
      throw new RemoteControlError(method, body.result.status, body.result.error_code);
    }
    return body.result;
  }

  /** Calls a method that needs the session key as its first parameter. */
  async #authed(method, ...params) {
    if (!this.#sessionKey) {
      throw new Error(`RemoteControl ${method} called before login()`);
    }
    return this.call(method, [this.#sessionKey, ...params]);
  }

  /** list_* methods report an empty list as an ERR_NO_DATA error; normalize that to []. */
  async #list(method, ...params) {
    try {
      return await this.#authed(method, ...params);
    } catch (error) {
      if (error instanceof RemoteControlError && error.errorCode === 'ERR_NO_DATA') return [];
      throw error;
    }
  }

  // ── Session ────────────────────────────────────────────────────────────────

  async login(username, password) {
    const key = await this.call('get_session_key', [username, password]);
    if (typeof key !== 'string') {
      throw new RemoteControlError('get_session_key', `Unexpected session key: ${JSON.stringify(key)}`);
    }
    this.#sessionKey = key;
    return key;
  }

  async logout() {
    if (!this.#sessionKey) return;
    const key = this.#sessionKey;
    this.#sessionKey = null;
    await this.call('release_session_key', [key]);
  }

  // ── Surveys ───────────────────────────────────────────────────────────────

  /**
   * Imports a survey structure file and returns the new survey id.
   * @param {string} filePath Absolute path to an .lss (or .lsa) file
   * @param {{ title?: string, surveyId?: number }} [options]
   * @returns {Promise<number>}
   */
  async importSurvey(filePath, { title, surveyId } = {}) {
    const extension = filePath.split('.').pop().toLowerCase();
    const base64 = fs.readFileSync(filePath).toString('base64');
    const sid = await this.#authed('import_survey', base64, extension, title ?? null, surveyId ?? null);
    return Number(sid);
  }

  /**
   * @param {number} surveyId
   * @param {Record<string, 'Y'|'N'>} [settings] anonymized, datestamp, ipaddr, ipanonymize, refurl, savetimings
   */
  async activateSurvey(surveyId, settings = {}) {
    return this.#authed('activate_survey', surveyId, settings);
  }

  async deleteSurvey(surveyId) {
    return this.#authed('delete_survey', surveyId);
  }

  /** @param {number} surveyId @param {string[]|null} [properties] */
  async getSurveyProperties(surveyId, properties = null) {
    return this.#authed('get_survey_properties', surveyId, properties);
  }

  /** @param {number} surveyId @param {Record<string, unknown>} data */
  async setSurveyProperties(surveyId, data) {
    return this.#authed('set_survey_properties', surveyId, data);
  }

  /** @returns {Promise<Array<{ sid: number|string, surveyls_title: string, active: 'Y'|'N' }>>} */
  async listSurveys(username = null) {
    return this.#list('list_surveys', username);
  }

  async listGroups(surveyId, language = null) {
    return this.#list('list_groups', surveyId, language);
  }

  async listQuestions(surveyId, groupId = null, language = null) {
    return this.#list('list_questions', surveyId, groupId, language);
  }

  // ── Participants ─────────────────────────────────────────────────────────────

  /** Creates the participant table, switching the survey to closed-access mode. */
  async activateTokens(surveyId, attributeFields = []) {
    return this.#authed('activate_tokens', surveyId, attributeFields);
  }

  /**
   * @param {number} surveyId
   * @param {Array<{ firstname?: string, lastname?: string, email?: string, token?: string }>} participants
   * @param {boolean} [createToken] let LimeSurvey generate access codes
   * @returns {Promise<Array<{ tid: number, token: string, firstname: string, lastname: string, email: string }>>}
   */
  async addParticipants(surveyId, participants, createToken = true) {
    const result = await this.#authed('add_participants', surveyId, participants, createToken);
    const failed = result.filter((p) => p.errors);
    if (failed.length) {
      throw new RemoteControlError('add_participants', JSON.stringify(failed.map((p) => p.errors)));
    }
    return result;
  }

  /** @returns {Promise<Array<{ tid: number|string, token: string, participant_info: { firstname: string, lastname: string, email: string } }>>} */
  async listParticipants(surveyId, { start = 0, limit = 100, unusedOnly = false, attributes = false } = {}) {
    return this.#list('list_participants', surveyId, start, limit, unusedOnly, attributes);
  }

  // ── Responses ─────────────────────────────────────────────────────────────

  /**
   * Inserts a response. Keys are response-table column names: `Q{qid}` in LimeSurvey 7
   * (`Q{qid}_S{subqid}` for subquestions). Use SeededSurvey#answerColumn() to build them.
   * @returns {Promise<number>} the response id
   */
  async addResponse(surveyId, responseData) {
    return Number(await this.#authed('add_response', surveyId, responseData));
  }

  /**
   * Exports responses as parsed JSON (JsonWriter emits `{ "responses": [ {...}, ... ] }`).
   * With headingType `code`, question columns are keyed by question code.
   * Throws ERR_NO_DATA when the survey has no responses yet.
   * @returns {Promise<Array<Record<string, string|null>>>}
   */
  async exportResponses(surveyId, { completionStatus = 'all', headingType = 'code' } = {}) {
    const base64 = await this.#authed(
      'export_responses',
      surveyId,
      'json',
      null,
      completionStatus,
      headingType,
    );
    const json = JSON.parse(Buffer.from(base64, 'base64').toString('utf8'));
    return json.responses ?? [];
  }

  // ── Users ─────────────────────────────────────────────────────────────────

  async listUsers() {
    return this.#list('list_users');
  }
}
