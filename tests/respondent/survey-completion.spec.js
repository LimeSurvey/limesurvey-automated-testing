import { BASIC_SURVEY } from '../../src/data/index.js';
import { expect, test } from '../../src/fixtures/index.js';

const { questions } = BASIC_SURVEY;

test.describe('Survey completion', { tag: '@respondent' }, () => {
  test('respondent can complete an open-access survey', async ({
    activeSurvey,
    surveyPage,
    remoteControl,
  }) => {
    const name = activeSurvey.question(questions.name.code);
    const satisfaction = activeSurvey.question(questions.satisfaction.code);
    const recommend = activeSurvey.question(questions.recommend.code);
    const comments = activeSurvey.question(questions.comments.code);

    await test.step('open the welcome page', async () => {
      await surveyPage.goto(activeSurvey.id);
      await expect(surveyPage.surveyTitle).toHaveText(activeSurvey.title);
      await surveyPage.start();
    });

    await test.step(`answer the "${BASIC_SURVEY.groups.aboutYou}" group`, async () => {
      await surveyPage.answerText(name, 'Ada Lovelace');
      await surveyPage.chooseOption(satisfaction, 'A1');
      await expect(surveyPage.option(satisfaction, 'A1')).toBeChecked();
      await surveyPage.next();
    });

    await test.step(`answer the "${BASIC_SURVEY.groups.feedback}" group and submit`, async () => {
      await surveyPage.chooseOption(recommend, 'Y');
      await surveyPage.answerText(comments, 'Submitted by the automated tests.');
      await surveyPage.submit();
    });

    await expect(surveyPage.completedMessage).toContainText(BASIC_SURVEY.endText);

    await test.step('the response is stored with the given answers', async () => {
      const [response] = await remoteControl.exportResponses(activeSurvey.id, {
        completionStatus: 'complete',
      });
      expect(response).toMatchObject({
        [questions.name.code]: 'Ada Lovelace',
        [questions.satisfaction.code]: 'A1',
        [questions.recommend.code]: 'Y',
        [questions.comments.code]: 'Submitted by the automated tests.',
      });
    });
  });
});
