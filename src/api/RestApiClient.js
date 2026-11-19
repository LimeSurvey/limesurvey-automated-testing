import { routes } from '../utils/routes.js';

/**
 * Minimal client for the LimeSurvey REST API v1 (application/config/rest/v1/*.php).
 * Methods return the raw APIResponse so specs can assert on status codes and bodies.
 */
export class RestApiClient {
  #request;
  #token = null;

  /** @param {import('@playwright/test').APIRequestContext} request */
  constructor(request) {
    this.#request = request;
  }

  get token() {
    return this.#token;
  }

  #headers() {
    return this.#token ? { Authorization: `Bearer ${this.#token}` } : {};
  }

  /** POST /rest/v1/session: returns the bearer token as a JSON string on success. */
  async createSession(username, password) {
    const response = await this.#request.post(`${routes.api.rest}/session`, { data: { username, password } });
    if (response.ok()) {
      this.#token = await response.json();
    }
    return response;
  }

  /** DELETE /rest/v1/session */
  async deleteSession() {
    const response = await this.#request.delete(`${routes.api.rest}/session`, { headers: this.#headers() });
    this.#token = null;
    return response;
  }

  /** GET /rest/v1/user */
  async listUsers({ page = 1, pageSize = 10 } = {}) {
    return this.#request.get(`${routes.api.rest}/user`, {
      headers: this.#headers(),
      params: { page, pageSize },
    });
  }

  /**
   * POST /rest/v1/user-setting: stores a setting for the authenticated user.
   * @param {string} settingName
   * @param {string} settingValue
   */
  async setUserSetting(settingName, settingValue) {
    return this.#request.post(`${routes.api.rest}/user-setting`, {
      headers: this.#headers(),
      data: { settingName, settingValue },
    });
  }
}
