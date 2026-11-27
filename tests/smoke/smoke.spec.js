import { BASIC_SURVEY } from '../../src/data/index.js';
import { expect, test } from '../../src/fixtures/index.js';

/**
 * Fast health checks of a LimeSurvey deployment: the app answers, admins can work, the
 * seeding API is enabled and respondents can open a survey. Run these first; if they fail,
 * the rest of the suite will not tell you anything new.
 */
test.describe('Smoke', { tag: '@smoke' }, () => {
  test.describe('anonymous visitor', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test('admin login page is reachable', { tag: '@admin' }, async ({ loginPage }) => {
      await loginPage.goto();

      await expect(loginPage.form).toBeVisible();
      await expect(loginPage.loginButton).toBeEnabled();
    });

    test(
      'respondent can open an active survey',
      { tag: '@respondent' },
      async ({ activeSurvey, surveyPage }) => {
        await surveyPage.goto(activeSurvey.id);

        await expect(surveyPage.welcomeContainer).toContainText(BASIC_SURVEY.welcomeText);
        await expect(surveyPage.startButton).toBeVisible();
      },
    );
  });

  test.describe('authenticated admin', () => {
    test('admin dashboard loads with the saved session', { tag: '@admin' }, async ({ dashboardPage }) => {
      await dashboardPage.goto();

      await expect(dashboardPage.marker).toBeAttached();
      await expect(dashboardPage.navbar.userMenuToggle).toBeVisible();
    });

    test(
      'RemoteControl API is enabled and accepts the admin session',
      { tag: '@admin' },
      async ({ remoteControl }) => {
        const surveys = await remoteControl.listSurveys();

        expect(Array.isArray(surveys)).toBe(true);
      },
    );
  });
});
