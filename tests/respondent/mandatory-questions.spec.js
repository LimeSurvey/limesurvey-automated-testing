import { BASIC_SURVEY } from '../../src/data/index.js';
import { expect, test } from '../../src/fixtures/index.js';

const { questions } = BASIC_SURVEY;

test.describe('Mandatory questions', { tag: '@respondent' }, () => {
  test('respondent cannot leave a page until its mandatory question is answered', async ({
    activeSurvey,
    surveyPage,
  }) => {
    const name = activeSurvey.question(questions.name.code);
    const recommend = activeSurvey.question(questions.recommend.code);
    await surveyPage.goto(activeSurvey.id);
    await surveyPage.start();

    await surveyPage.next();

    await test.step('the respondent stays on the page and is told to answer', async () => {
      await expect(surveyPage.alertDialog).toBeVisible();
      await expect(surveyPage.alertDialog).toContainText('You cannot proceed');
      await surveyPage.closeAlertDialog();
      await expect(surveyPage.mandatoryError(name)).toBeVisible();
      await expect(surveyPage.question(recommend)).toBeHidden();
    });

    await test.step('answering it lets the respondent continue', async () => {
      await surveyPage.answerText(name, 'Grace Hopper');
      await surveyPage.next();
      await expect(surveyPage.question(recommend)).toBeVisible();
    });
  });
});
