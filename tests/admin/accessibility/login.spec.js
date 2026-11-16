import { expect, test } from '../../../src/fixtures/index.js';
import { scanAccessibility, summarizeViolations } from '../../../src/utils/accessibility.js';

test.describe('Accessibility: login screens', { tag: ['@admin', '@a11y'] }, () => {
  // Application bug (LimeSurvey 7.10.0, verified 2026-11-16): every screen fails
  //   color-contrast: primary buttons and #donate-button
  //   link-name: the logo link `a.logo-alt-1` contains only &nbsp;
  // Issue: TODO link once filed. Remove this line when fixed; do not relax the assertions.
  test.fixme();

  test.use({ storageState: { cookies: [], origins: [] } });

  test('login page with the language dropdown open has no WCAG A/AA violations', async ({
    page,
    loginPage,
  }, testInfo) => {
    await loginPage.goto();
    await loginPage.openLanguageSelector();
    await expect(loginPage.languageDropdown).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('login page showing an invalid-credentials error has no WCAG A/AA violations', async ({
    page,
    loginPage,
  }, testInfo) => {
    await loginPage.goto();
    await loginPage.submitCredentials('e2e_unknown_user', 'wrong-password-123!');
    await expect(loginPage.flash.errorAlerts).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('forgot password page has no WCAG A/AA violations', async ({ page, forgotPasswordPage }, testInfo) => {
    await forgotPasswordPage.goto();
    await expect(forgotPasswordPage.form).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('password reset confirmation has no WCAG A/AA violations', async ({
    page,
    forgotPasswordPage,
  }, testInfo) => {
    await forgotPasswordPage.goto();
    const loginPage = await forgotPasswordPage.requestPasswordReset('e2e_nobody', 'nobody@example.com');
    await expect(loginPage.flash.successAlerts).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });
});
