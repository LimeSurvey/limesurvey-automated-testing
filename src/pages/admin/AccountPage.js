import { routes } from '../../utils/routes.js';
import { AdminPage } from './AdminPage.js';

/**
 * Account / personal settings: admin/user/sa/personalsettings
 * (controllers/admin/UserAction.php::personalsettings, views/admin/user/personalsettings.php).
 */
export class AccountPage extends AdminPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Account', level: 1 });

    this.profilePanel = page.locator('#your-profile');
    this.personalSettingsPanel = page.locator('#your-personal-settings');
    this.personalizedMenusPanel = page.locator('#your-personal-menues');
    this.personalizedMenuEntriesPanel = page.locator('#your-personal-menueentries');

    this.changePasswordButton = page.getByRole('button', { name: 'Change password' });
    this.changeEmailButton = page.getByRole('button', { name: 'Change email address' });
    this.currentPasswordInput = page.getByLabel('Current password:');
  }

  async goto() {
    await this.page.goto(routes.admin.account);
    return this;
  }

  /** Reveals the password fields (both buttons disappear afterwards). */
  async startPasswordChange() {
    await this.changePasswordButton.click();
  }

  /** Reveals the email fields (both buttons disappear afterwards). */
  async startEmailChange() {
    await this.changeEmailButton.click();
  }

  /** @param {'Profile'|'Personal settings'|'Personalized menus'|'Personalized menu entries'} name */
  async openTab(name) {
    await this.page.getByRole('tab', { name, exact: true }).click();
  }
}
