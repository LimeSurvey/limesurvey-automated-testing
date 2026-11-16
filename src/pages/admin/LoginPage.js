import { FlashMessages } from '../../components/FlashMessages.js';
import { routes } from '../../utils/routes.js';

/**
 * Admin login: admin/authentication/sa/login
 * (views/admin/authentication/login.php; fields from core/plugins/Authdb/Authdb.php).
 */
export class LoginPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.form = page.locator('#loginform');
    this.usernameInput = page.getByLabel('Username', { exact: true });
    this.passwordInput = page.getByLabel('Password', { exact: true });
    this.loginButton = page.getByRole('button', { name: 'Log in', exact: true });
    // Select2 replaces the native <select id="loginlang">; the visible widget is a combobox.
    this.languageSelector = page.locator('#language-selector').getByRole('combobox');
    // Select2 renders its option list at the end of <body>, without a stable role across versions.
    this.languageDropdown = page.locator('.select2-dropdown');
    this.flash = new FlashMessages(page);
  }

  async goto() {
    await this.page.goto(routes.auth.login);
    return this;
  }

  /**
   * Fills and submits the form without assuming the outcome (use for negative paths).
   * @param {string} username
   * @param {string} password
   */
  async submitCredentials(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    return this;
  }

  /**
   * Logs in and waits for the dashboard.
   * @returns {Promise<import('./DashboardPage.js').DashboardPage>}
   */
  async login(username, password) {
    const { DashboardPage } = await import('./DashboardPage.js');
    await this.submitCredentials(username, password);
    await this.page.waitForURL((url) => url.href.includes(routes.admin.dashboard));
    return new DashboardPage(this.page);
  }

  async openLanguageSelector() {
    await this.languageSelector.click();
  }
}
