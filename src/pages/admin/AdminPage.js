import { AdminNavbar } from '../../components/AdminNavbar.js';
import { FlashMessages } from '../../components/FlashMessages.js';

/**
 * Base class for authenticated admin pages: shared navbar and flash messages.
 *
 * Page objects never assert. They expose locators and perform user actions; navigation
 * methods return the destination page object. Navigation targets are imported lazily
 * (`await import(...)`) because page objects reference each other in cycles, and a static
 * cycle would break `class X extends AdminPage`.
 */
export class AdminPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.navbar = new AdminNavbar(page);
    this.flash = new FlashMessages(page);
    // Survey pages: "Breadcrumb: <survey title> (<id>), <current page>" (BreadcrumbWidget)
    this.breadcrumb = page.getByRole('navigation', { name: /^Breadcrumb/ });
  }

  /**
   * LimeSurvey prints `<x-test id="action::NAME">` on many admin views as a test hook
   * (viewHelper::getViewTestTag). It has no size, so assert `toBeAttached()`, not visibility.
   * @param {string} name e.g. 'index', 'listSurveys', 'surveySummary'
   */
  viewMarker(name) {
    return this.page.locator(`x-test[id="action::${name}"]`);
  }
}
