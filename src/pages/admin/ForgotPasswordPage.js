import { routes } from '../../utils/routes.js';

/**
 * Password recovery: admin/authentication/sa/forgotpassword
 * (views/admin/authentication/forgotpassword.php).
 */
export class ForgotPasswordPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.form = page.locator('#forgotpassword');
    this.usernameInput = page.getByLabel('Username', { exact: true });
    this.emailInput = page.getByLabel('Email address', { exact: true });
    this.submitButton = page.getByRole('button', { name: 'Check data' });
  }

  async goto() {
    await this.page.goto(routes.auth.forgotPassword);
    return this;
  }

  /**
   * Submits a reset request. LimeSurvey always redirects back to the login page with a
   * generic confirmation, whether or not the account exists.
   * @returns {Promise<import('./LoginPage.js').LoginPage>}
   */
  async requestPasswordReset(username, email) {
    const { LoginPage } = await import('./LoginPage.js');
    await this.usernameInput.fill(username);
    await this.emailInput.fill(email);
    await this.submitButton.click();
    await this.page.waitForURL((url) => url.href.includes(routes.auth.login));
    return new LoginPage(this.page);
  }
}
