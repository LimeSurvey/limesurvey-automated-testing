/**
 * Application routes, relative to the LimeSurvey entry URL (BASE_URL).
 *
 * They intentionally have NO leading slash: Playwright resolves them against `baseURL`,
 * which keeps a base such as `http://host/index.php/` intact.
 */
export const routes = {
  api: {
    remoteControl: 'admin/remotecontrol',
    rest: 'rest/v1',
  },

  auth: {
    login: 'admin/authentication/sa/login',
    forgotPassword: 'admin/authentication/sa/forgotpassword',
  },

  admin: {
    dashboard: 'dashboard/view',
    account: 'admin/user/sa/personalsettings',
    newSurvey: 'surveyAdministration/newSurvey',
    surveyList: 'surveyAdministration/listsurveys',
    createSurveyGroup: 'admin/surveysgroups/sa/create',

    /** @param {number|string} surveyId */
    surveyOverview: (surveyId) => `surveyAdministration/view?surveyid=${surveyId}`,
    /** @param {number|string} surveyId */
    participantsOverview: (surveyId) => `admin/tokens/sa/index/surveyid/${surveyId}`,
    /** @param {number|string} surveyId */
    addParticipant: (surveyId) => `admin/tokens/sa/addnew/surveyid/${surveyId}`,
    /** @param {number|string} surveyId */
    responses: (surveyId) => `responses/browse?surveyId=${surveyId}`,
  },

  respondent: {
    /**
     * `newtest=Y` starts a fresh response session every time.
     * @param {number|string} surveyId
     */
    survey: (surveyId) => `${surveyId}?lang=en&newtest=Y`,
  },
};
