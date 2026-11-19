import { env } from '../../../src/config/env.js';
import { expect, test } from '../../../src/fixtures/index.js';
import { routes } from '../../../src/utils/routes.js';

test.describe('Admin login', { tag: '@admin' }, () => {
  // Start every test signed out, independent of the saved admin session.
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('admin can sign in with valid credentials', async ({ page, loginPage }) => {
    const dashboard = await loginPage.login(env.adminUser, env.adminPassword);

    await expect(dashboard.marker).toBeAttached();
    await expect(dashboard.navbar.userMenuToggle).toContainText(env.adminUser);
    await expect(page).not.toHaveURL(new RegExp(routes.auth.login));
  });

  test('sign-in with invalid credentials shows an error and stays on the login page', async ({
    loginPage,
  }) => {
    await loginPage.submitCredentials('e2e_unknown_user', 'wrong-password-123!');

    await expect(loginPage.flash.withText('Incorrect or expired username and/or password!')).toBeVisible();
    await expect(loginPage.form).toBeVisible();
  });
});
