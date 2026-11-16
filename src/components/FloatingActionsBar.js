/**
 * Bulk-action toolbar shown under a grid once rows are selected
 * (extensions/admin/grid/FloatingActionsWidget/views/floating_bar.php).
 */
export class FloatingActionsBar {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.root = page.getByRole('toolbar', { name: 'Actions for selected items' });
    // Bulk-action modals (MassiveActionsWidget/views/modals/*) are role="dialog" with a
    // labelled title; their DOM ids are position-based, so target the open dialog instead.
    this.openDialog = page.getByRole('dialog');
  }

  // The buttons' accessible names start with the glyph of their (non aria-hidden) icon font,
  // so names are matched as substrings, not exactly.

  /** @param {'Set survey theme'|'Set survey group'|'Set expiry date'|'Delete'} name */
  async openAction(name) {
    await this.root.getByRole('button', { name }).click();
  }

  /** @param {'Survey archive (*.lsa)'|'Survey structure (*.lss)'|'Printable survey (*.html)'} format */
  async openExport(format) {
    await this.root.getByRole('button', { name: 'Export' }).click();
    await this.root.getByRole('link', { name: format }).click();
  }
}
