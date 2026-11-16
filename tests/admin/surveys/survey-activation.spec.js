import { expect, test } from '../../../src/fixtures/index.js';

test.describe('Survey activation', { tag: '@admin' }, () => {
  test('admin can activate a survey in open-access mode', async ({
    survey,
    surveyOverviewPage,
    remoteControl,
  }) => {
    await surveyOverviewPage.goto(survey.id);
    await expect(surveyOverviewPage.breadcrumbTitle).toContainText(`${survey.title} (${survey.id})`);

    const dialog = await surveyOverviewPage.openActivationDialog();
    const overview = await dialog.activate();

    await expect(overview.activationFeedback).toBeVisible();
    await expect(overview.stopSurveyLink).toBeVisible();

    await test.step('the API reports the survey as active', async () => {
      const { active } = await remoteControl.getSurveyProperties(survey.id, ['active']);
      expect(active).toBe('Y');
    });
  });
});
