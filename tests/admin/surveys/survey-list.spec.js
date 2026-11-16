import { expect, test } from '../../../src/fixtures/index.js';

test.describe('Survey list', { tag: '@admin' }, () => {
  test('admin can find a survey in the survey list by its title', async ({ survey, surveyListPage }) => {
    await surveyListPage.goto();

    await surveyListPage.search(survey.title);

    await expect(surveyListPage.rows).toHaveCount(1);
    await expect(surveyListPage.surveyRow(survey.title)).toContainText(String(survey.id));
    await expect(surveyListPage.surveyStatus(survey.title)).toHaveText('Inactive');
  });
});
