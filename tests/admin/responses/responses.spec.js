import { expect, test } from '../../../src/fixtures/index.js';

test.describe('Survey responses', { tag: '@admin' }, () => {
  test('response browser lists the responses stored for a survey', async ({
    activeSurvey,
    remoteControl,
    responsesPage,
  }) => {
    const names = ['Ada E2E', 'Grace E2E'];
    for (const name of names) {
      await remoteControl.addResponse(activeSurvey.id, {
        [activeSurvey.answerColumn('name')]: name,
        [activeSurvey.answerColumn('satisfaction')]: 'A2',
      });
    }

    await responsesPage.goto(activeSurvey.id);

    await expect(responsesPage.heading).toBeVisible();
    await expect(responsesPage.rows).toHaveCount(names.length);
    for (const name of names) {
      await expect(responsesPage.responseRow(name)).toBeVisible();
    }
  });
});
