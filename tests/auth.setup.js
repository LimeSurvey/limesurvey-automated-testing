import { RestApiClient } from '../src/api/RestApiClient.js';
import { ADMIN_STORAGE_STATE, env } from '../src/config/env.js';
import { expect, test as setup } from '../src/fixtures/index.js';

/**
 * Setup project: runs once before the projects that depend on it (see playwright.config.js).
 */
setup.describe('Global setup', () => {
  setup('admin account uses the classic admin interface', async ({ request }) => {
    // LimeSurvey 7 enables the new React editor by default (config `editorEnabled`). It redirects
    // the survey overview, survey creation and response pages and hides the Activate/Stop
    // buttons. The page objects target the classic interface, so pin it for the test admin
    // through the per-user setting (the same one the "Editor version" dialog writes).
    const api = new RestApiClient(request);
    const session = await api.createSession(env.adminUser, env.adminPassword);
    expect(session.status(), 'REST API login').toBe(200);

    const response = await api.setUserSetting('editorEnabled', '0');

    expect(response.status(), 'saving the editorEnabled user setting').toBe(200);
    await api.deleteSession();
  });

  setup('authenticate as admin', async ({ page, loginPage }) => {
    await loginPage.goto();
    const dashboard = await loginPage.login(env.adminUser, env.adminPassword);

    await expect(dashboard.marker).toBeAttached();
    await page.context().storageState({ path: ADMIN_STORAGE_STATE });
  });
});
