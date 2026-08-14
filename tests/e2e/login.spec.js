const { test, expect } = require('@playwright/test');
const { LOGIN_URL, FORGOT_URL } = require('../utils/urls');

test.describe('Login', () => {
  // Clear any existing auth state before each test to ensure a clean slate
  test.use({ storageState: { cookies: [], origins: [] } });
  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
  });

  test('successful login redirects to admin dashboard', async ({ page }) => {
    await page.fill('#user', process.env.TEST_USER);
    await page.fill('#password', process.env.TEST_PASSWORD);
    await page.click('button[name="login_submit"]');

    // Dashboard renders a "Create survey" button after successful login
    await expect(page.locator('.btn.btn-info.btn-create')).toBeVisible();
    await expect(page).not.toHaveURL(/authentication/);
  });

  test('invalid credentials keeps user on login page with an error', async ({ page }) => {
    await page.fill('#user', 'invalid_user_that_does_not_exist');
    await page.fill('#password', 'wrong_password_123!');
    await page.click('button[name="login_submit"]');

    // The login form must still be present after a failed attempt
    await expect(page.locator('#loginform')).toBeVisible();

    const hasToast = await page.locator('.alert-danger').count();
    expect(hasToast).toBeGreaterThan(0);
  });

  test('forgot password with non-existent credentials shows feedback message', async ({ page }) => {
    await page.goto(FORGOT_URL);

    await page.fill('#user', 'nobody_at_all');
    await page.fill('#email', 'nobody@example.invalid');
    await page.click('input[type="submit"].action');

    const hasToast = await page.locator('.alert-success').count();
    expect(hasToast).toBeGreaterThan(0);

    await expect(page).toHaveURL(LOGIN_URL);
  });
});
