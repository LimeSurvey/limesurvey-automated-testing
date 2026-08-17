/**
 * Central URL registry for all Playwright projects.
 *
 * BASE_URL is read from the environment at import time (set via .env or shell).
 * Import what you need:
 *
 *   const { LOGIN_URL, FORGOT_URL } = require('../utils/urls');
 */

const BASE = process.env.BASE_URL || 'http://ls-ce/index.php';

// ── APIs ────────────────────────────────────────────────────────────
const RC_URL    = `${BASE}/admin/remotecontrol`;
const API_URL   = `${BASE}/rest/v1`;

// ── Authentication ────────────────────────────────────────────────────────────
const LOGIN_URL    = `${BASE}/admin/authentication/sa/login`;
const LOGOUT_URL   = `${BASE}/admin/authentication/sa/logout`;
const FORGOT_URL   = `${BASE}/admin/authentication/sa/forgotpassword`;

// ── Account ─────────────────────────────────────────────────────────────────
const ACCOUNT_URL = `${BASE}/admin/user/sa/personalsettings`;

// ── Dashboard ─────────────────────────────────────────────────────────────────
const DASHBOARD_URL = `${BASE}/dashboard/view`;

// ── Survey administration ─────────────────────────────────────────────────────
const NEW_SURVEY_URL  = `${BASE}/surveyAdministration/newSurvey`;
const SURVEY_LIST_URL = `${BASE}/surveyAdministration/listsurveys`;
const SURVEY_GROUP_CREATE = `${BASE}/admin/surveysgroups/sa/create`;

// ── Global settings ───────────────────────────────────────────────────────────
const GLOBAL_SETTINGS_URL = `${BASE}/admin/globalsettings`;

// ── User management ───────────────────────────────────────────────────────────
const USER_MANAGEMENT_URL = `${BASE}/userManagement/index`;

// ── Plugin manager ────────────────────────────────────────────────────────────
const PLUGIN_MANAGER_URL = `${BASE}/admin/pluginmanager/sa/index`;

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Build a survey-scoped URL for a given sub-action.
 * @param {string} subaction  e.g. 'tokens', 'generalsettings'
 * @param {string|number} surveyId
 */
function surveySettingsUrl(subaction, surveyId) {
  return `${BASE}/surveyAdministration/rendersidemenulink?subaction=${subaction}&surveyid=${surveyId}`;
}

/**
 * Build the token list URL for a survey.
 * @param {string|number} surveyId
 */
function tokenListUrl(surveyId) {
  return `${BASE}/admin/tokens/sa/index/surveyid/${surveyId}`;
}

/**
 * Build the responses browse URL for a survey.
 * @param {string|number} surveyId
 */
function responsesUrl(surveyId) {
  return `${BASE}/responses/browse?surveyId=${surveyId}`;
}

module.exports = {
  BASE_URL: BASE,
  RC_URL,
  API_URL,
  ACCOUNT_URL,
  SURVEY_GROUP_CREATE,
  LOGIN_URL,
  LOGOUT_URL,
  FORGOT_URL,
  DASHBOARD_URL,
  NEW_SURVEY_URL,
  SURVEY_LIST_URL,
  GLOBAL_SETTINGS_URL,
  USER_MANAGEMENT_URL,
  PLUGIN_MANAGER_URL,
  surveySettingsUrl,
  tokenListUrl,
  responsesUrl,
};
