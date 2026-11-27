import { BASIC_SURVEY } from '../../src/data/index.js';
import { expect, test } from '../../src/fixtures/index.js';

test.describe('Closed-access survey', { tag: '@respondent' }, () => {
  test('participant can start the survey with a valid access code', async ({
    closedAccessSurvey,
    accessCodePage,
  }) => {
    const [participant] = closedAccessSurvey.participants;
    await accessCodePage.goto(closedAccessSurvey.id);
    await expect(accessCodePage.prompt).toBeVisible();

    const surveyPage = await accessCodePage.submitAccessCode(participant.token);

    await expect(surveyPage.welcomeContainer).toContainText(BASIC_SURVEY.welcomeText);
  });

  test('survey rejects an invalid access code', async ({ closedAccessSurvey, accessCodePage }) => {
    // Each invalid code counts towards the per-IP lockout (3 attempts in 10 minutes), so the
    // suite submits exactly one. CI also allowlists loopback via `tokenIpWhitelist`.
    await accessCodePage.goto(closedAccessSurvey.id);

    await accessCodePage.submitAccessCode('e2e-invalid-code');

    await expect(accessCodePage.errorMessage).toBeVisible();
    await expect(accessCodePage.accessCodeInput).toBeVisible();
  });
});
