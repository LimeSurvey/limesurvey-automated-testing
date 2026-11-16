import { env } from '../../../src/config/env.js';
import { expect, test } from '../../../src/fixtures/index.js';
import { routes } from '../../../src/utils/routes.js';

test.describe('Admin logout', { tag: '@admin' }, () => {
  // Logging out would invalidate the shared saved session for every other test,
  // so this test signs in with its own fresh session.
  test.use({ storageState: { cookies: [], origins: [] } });

  test('admin can sign out and is asked to sign in again', async ({ page, loginPage }) => {
    await loginPage.goto();
    const dashboard = await loginPage.login(env.adminUser, env.adminPassword);

    const loginAfterLogout = await dashboard.navbar.logout();

    await expect(loginAfterLogout.form).toBeVisible();

    await test.step('the admin area is no longer accessible', async () => {
      await page.goto(routes.admin.dashboard);
      await expect(page).toHaveURL(new RegExp(routes.auth.login));
      await expect(loginAfterLogout.form).toBeVisible();
    });
  });
});
