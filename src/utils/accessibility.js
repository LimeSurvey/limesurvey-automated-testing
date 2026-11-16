import { AxeBuilder } from '@axe-core/playwright';

/** WCAG 2.0/2.1/2.2 level A and AA: the common compliance baseline. */
export const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

function csvCell(value) {
  return `"${String(value ?? '').replace(/"/g, '""')}"`;
}

function toCsv(url, violations) {
  const rows = [['url', 'rule', 'impact', 'help', 'target', 'html', 'failureSummary'].join(',')];
  for (const violation of violations) {
    for (const node of violation.nodes) {
      rows.push(
        [
          url,
          violation.id,
          violation.impact,
          violation.help,
          node.target.join(' '),
          node.html,
          node.failureSummary,
        ]
          .map(csvCell)
          .join(','),
      );
    }
  }
  return rows.join('\n');
}

/**
 * Compact, diff-friendly view of axe violations for assertion messages.
 * @param {import('axe-core').Result[]} violations
 */
export function summarizeViolations(violations) {
  return violations.map((v) => ({
    rule: v.id,
    impact: v.impact,
    help: v.help,
    targets: v.nodes.map((n) => n.target.join(' ')),
  }));
}

/**
 * Runs axe on the current page and attaches the full results (JSON) and a CSV
 * report to the test, so they show up in the HTML report.
 *
 * @param {import('@playwright/test').Page} page
 * @param {import('@playwright/test').TestInfo} testInfo
 * @param {{ include?: string, exclude?: string[], disableRules?: string[] }} [options]
 *   Use `exclude`/`disableRules` only for documented, tracked issues.
 */
export async function scanAccessibility(page, testInfo, { include, exclude = [], disableRules = [] } = {}) {
  let builder = new AxeBuilder({ page }).withTags(WCAG_TAGS);
  if (include) builder = builder.include(include);
  for (const selector of exclude) builder = builder.exclude(selector);
  if (disableRules.length) builder = builder.disableRules(disableRules);

  const results = await builder.analyze();

  await testInfo.attach('axe-violations.json', {
    body: JSON.stringify(results.violations, null, 2),
    contentType: 'application/json',
  });
  await testInfo.attach('axe-violations.csv', {
    body: toCsv(page.url(), results.violations),
    contentType: 'text/csv',
  });
  return results;
}
