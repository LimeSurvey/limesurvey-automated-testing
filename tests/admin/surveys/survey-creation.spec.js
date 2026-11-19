import { uniqueName } from '../../../src/data/index.js';
import { expect, test } from '../../../src/fixtures/index.js';

test.describe('Survey creation', { tag: '@admin' }, () => {
  test('admin can create a survey from the UI', async ({
    createSurveyPage,
    surveyFactory,
    remoteControl,
  }) => {
    const title = uniqueName('E2E UI survey');
    await createSurveyPage.goto();

    const surveyId = await createSurveyPage.createSurvey(title);
    surveyFactory.track(surveyId); // cleaned up through the API after the test

    // LimeSurvey opens the new survey in the editor (its first sample question by default).
    await expect(createSurveyPage.breadcrumb).toContainText(title);

    await test.step('the survey is stored as an inactive survey', async () => {
      const surveys = await remoteControl.listSurveys();
      expect(surveys.find((s) => Number(s.sid) === surveyId)).toMatchObject({
        surveyls_title: title,
        active: 'N',
      });
    });
  });
});
