import { routes } from '../utils/routes.js';

/**
 * Admin top navigation bar (application/views/layouts/adminmenu.php).
 */
export class AdminNavbar {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    // The main <nav> has no accessible name; `navbar` is its only stable hook.
    this.root = page.locator('nav.navbar');

    // "Create survey" dropdown (LayoutHelper.php, rendered by MenuObjects/_extraMenu.php)
    this.createMenuButton = this.root.getByRole('button', { name: 'Create survey' });
    this.createSurveyLink = page.locator('#create-survey-link');
    this.copySurveyMenuItem = this.root.getByRole('button', { name: 'Copy' });
    this.importSurveyMenuItem = this.root.getByRole('button', { name: 'Import' });
    // Dialogs opened from the create menu (surveyAdministration/partial/_modalCopySurvey.php, _modalImportSurvey.php)
    this.copySurveyDialog = page.getByRole('dialog', { name: 'Copy survey' });
    // Select2 "Source survey" picker; copySurvey.js opens it when the dialog is shown empty.
    this.copySurveySourceOptions = this.copySurveyDialog.getByRole('listbox');
    this.copySurveyAdvancedToggle = this.copySurveyDialog.getByRole('button', { name: 'Advanced options' });
    // Collapse panel; its id is the toggle's aria-controls target.
    this.copySurveyAdvancedOptions = page.locator('#copySurveyAdvanced');
    this.importSurveyDialog = page.locator('#importSurvey_modal');

    // "Configuration" mega-menu (views/admin/super/_configuration_menu.php)
    this.configurationMenuToggle = this.root.getByRole('link', { name: 'Configuration' });
    this.configurationMenu = page.locator('#mainmenu-dropdown');

    // Only rendered when the user has at least one notification.
    this.notificationsButton = page.locator('#admin-notifications-menu-button');
    this.clearAllNotificationsItem = page.locator('#notification-clear-all');

    // The user dropdown is the list item that holds the "Account" entry; its toggle is
    // named after the user (e.g. "A admin"), so locate it structurally instead.
    this.userMenuToggle = this.root
      .getByRole('listitem')
      .filter({ has: page.locator('#admin-menu-item-account') })
      .getByRole('button');
    this.logoutLink = page.getByRole('link', { name: 'Logout', exact: true });

    // "Editor version" entry, injected by EditorService when the React editor is available.
    this.editorVersionButton = page.locator('#feature-preview-button');
    this.editorVersionDialog = page.locator('#activate_editor');
  }

  async openUserMenu() {
    await this.userMenuToggle.click();
  }

  async openCreateMenu() {
    await this.createMenuButton.click();
  }

  async openConfigurationMenu() {
    await this.configurationMenuToggle.click();
  }

  async openNotifications() {
    await this.notificationsButton.click();
  }

  async openCopySurveyDialog() {
    await this.openCreateMenu();
    await this.copySurveyMenuItem.click();
  }

  /**
   * Picks the survey to copy in the auto-opened "Source survey" picker.
   * @param {string} title
   */
  async chooseCopySource(title) {
    await this.copySurveySourceOptions.getByRole('option', { name: title }).click();
  }

  async showCopySurveyAdvancedOptions() {
    await this.copySurveyAdvancedToggle.click();
  }

  async openImportSurveyDialog() {
    await this.openCreateMenu();
    await this.importSurveyMenuItem.click();
  }

  async openEditorVersionDialog() {
    await this.openUserMenu();
    await this.editorVersionButton.click();
  }

  /** @returns {Promise<import('../pages/admin/LoginPage.js').LoginPage>} */
  async logout() {
    const { LoginPage } = await import('../pages/admin/LoginPage.js');
    await this.openUserMenu();
    await this.logoutLink.click();
    await this.page.waitForURL((url) => url.href.includes(routes.auth.login));
    return new LoginPage(this.page);
  }
}
