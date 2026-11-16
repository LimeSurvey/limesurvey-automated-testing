import { expect, test } from '../../src/fixtures/index.js';

test.describe('Survey availability', { tag: '@respondent' }, () => {
  test('inactive survey is refused to anonymous respondents', async ({ survey, surveyPage }) => {
    const status = await surveyPage.requestStatus(survey.id);

    // SurveyIndex throws CHttpException(401) for guests without preview rights.
    expect(status).toBe(401);
    await expect(surveyPage.welcomeContainer).toBeHidden();
  });
});
