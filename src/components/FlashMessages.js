/**
 * Flash messages rendered after an admin action
 * (application/views/admin/notifications/notifications.php + AlertWidget).
 *
 * They auto-close after ~4 s (success) or ~7 s (error), so assert on them right after the action.
 *
 * Flash messages live in the server-side PHP session and are shown by the next page render of
 * that session. Tests that reuse the saved admin storageState all share ONE session, so in a
 * parallel run another test's page load can consume the message. Only assert on flash messages
 * in tests that sign in with their own session (login, logout, password recovery); otherwise
 * assert on the durable outcome (page content, API state).
 */
export class FlashMessages {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.container = page.locator('#notif-container');
    this.alerts = this.container.getByRole('alert');
    // The alert type is only expressed through Bootstrap classes.
    this.successAlerts = this.container.locator('.alert-success');
    this.errorAlerts = this.container.locator('.alert-danger');
  }

  /** @param {string|RegExp} text */
  withText(text) {
    return this.alerts.filter({ hasText: text });
  }
}
