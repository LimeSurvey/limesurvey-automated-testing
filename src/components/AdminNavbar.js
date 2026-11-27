import { routes } from '../utils/routes.js';

/**
 * Admin top navigation bar (application/views/layouts/adminmenu.php).
 * Since LimeSurvey 7.12 the bar is a <header> with two named navigation landmarks.
 */
export class AdminNavbar {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.mainMenu = page.getByRole('navigation', { name: 'Main menu' });
    this.userMenu = page.getByRole('navigation', { name: 'User menu' });

    // "Create survey" dropdown (LayoutHelper.php, rendered by MenuObjects/_extraMenu.php)
    this.createMenuButton = this.mainMenu.getByRole('button', { name: 'Create survey' });
    this.createSurveyLink = page.locator('#create-survey-link');
    this.copySurveyMenuItem = this.mainMenu.getByRole('button', { name: 'Copy' });
    this.importSurveyMenuItem = this.mainMenu.getByRole('button', { name: 'Import' });
    // Dialogs opened from the create menu (surveyAdministration/partial/_modalCopySurvey.php, _modalImportSurvey.php)
    this.copySurveyDialog = page.getByRole('dialog', { name: 'Copy survey' });
    // Select2 "Source survey" picker; copySurvey.js opens it when the dialog is shown empty.
    this.copySurveySourceOptions = this.copySurveyDialog.getByRole('listbox');
    this.copySurveyAdvancedToggle = this.copySurveyDialog.getByRole('button', { name: 'Advanced options' });
    // Collapse panel; its id is the toggle's aria-controls target.
    this.copySurveyAdvancedOptions = page.locator('#copySurveyAdvanced');
    this.importSurveyDialog = page.locator('#importSurvey_modal');

    // "Configuration" mega-menu (views/admin/super/_configuration_menu.php)
    this.configurationMenuToggle = this.mainMenu.getByRole('link', { name: 'Configuration' });
    this.configurationMenu = page.locator('#mainmenu-dropdown');

    // Only rendered when the user has at least one notification.
    this.notificationsButton = page.locator('#admin-notifications-menu-button');
    this.clearAllNotificationsItem = page.locator('#notification-clear-all');

    // The toggle's accessible name is the user's initial and name (e.g. "A admin"), which
    // depends on who is logged in, so use its stable id instead.
    this.userMenuToggle = this.userMenu.locator('#admin-menu-user-button');
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
