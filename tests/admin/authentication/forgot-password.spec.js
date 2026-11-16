import { expect, test } from '../../../src/fixtures/index.js';

test.describe('Password recovery', { tag: '@admin' }, () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test('reset request for an unknown account shows the generic confirmation', async ({
    forgotPasswordPage,
  }) => {
    await forgotPasswordPage.goto();

    // Same message whether or not the account exists, so accounts can't be enumerated.
    const loginPage = await forgotPasswordPage.requestPasswordReset('e2e_nobody', 'nobody@example.com');

    await expect(
      loginPage.flash.withText(
        'If the username and email address is valid a password reminder email has been sent',
      ),
    ).toBeVisible();
    await expect(loginPage.form).toBeVisible();
  });
});
