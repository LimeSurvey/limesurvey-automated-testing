import { expect, test } from '../../../src/fixtures/index.js';
import { scanAccessibility, summarizeViolations } from '../../../src/utils/accessibility.js';

test.describe('Accessibility: account', { tag: ['@admin', '@a11y'] }, () => {
  // Application bug (LimeSurvey 7.10.0, verified 2026-11-16): every tab fails
  //   color-contrast: #username / #email read-only inputs, On/Off toggle labels (`*_1_label`)
  // Issue: TODO link once filed. Remove this line when fixed; do not relax the assertions.
  test.fixme();

  test.beforeEach(async ({ accountPage }) => {
    await accountPage.goto();
  });

  test('profile tab has no WCAG A/AA violations', async ({ page, accountPage }, testInfo) => {
    await expect(accountPage.profilePanel).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('change password form has no WCAG A/AA violations', async ({ page, accountPage }, testInfo) => {
    await accountPage.startPasswordChange();
    await expect(accountPage.currentPasswordInput).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('change email form has no WCAG A/AA violations', async ({ page, accountPage }, testInfo) => {
    await accountPage.startEmailChange();
    await expect(accountPage.currentPasswordInput).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  const tabs = [
    { name: 'Personal settings', panel: 'personalSettingsPanel' },
    { name: 'Personalized menus', panel: 'personalizedMenusPanel' },
    { name: 'Personalized menu entries', panel: 'personalizedMenuEntriesPanel' },
  ];
  for (const { name, panel } of tabs) {
    test(`"${name}" tab has no WCAG A/AA violations`, async ({ page, accountPage }, testInfo) => {
      await accountPage.openTab(name);
      await expect(accountPage[panel]).toBeVisible();

      const results = await scanAccessibility(page, testInfo);

      expect(summarizeViolations(results.violations)).toEqual([]);
    });
  }
});
