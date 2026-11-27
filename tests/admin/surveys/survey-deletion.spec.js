import { expect, test } from '../../../src/fixtures/index.js';

test.describe('Survey deletion', { tag: '@admin' }, () => {
  test('admin can delete a survey from the survey overview', async ({
    survey,
    surveyOverviewPage,
    remoteControl,
  }) => {
    await surveyOverviewPage.goto(survey.id);

    const dashboard = await surveyOverviewPage.deleteSurvey();

    await expect(dashboard.marker).toBeAttached();

    await test.step('the survey no longer exists', async () => {
      const surveys = await remoteControl.listSurveys();
      expect(surveys.map((s) => Number(s.sid))).not.toContain(survey.id);
    });
  });
});
