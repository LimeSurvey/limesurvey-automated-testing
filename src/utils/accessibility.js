import { AxeBuilder } from '@axe-core/playwright';
import axe from 'axe-core';
import { env } from '../config/env.js';

/**
 * Default standard: WCAG 2.0, 2.1 and 2.2, levels A and AA (AA conformance includes A).
 * In axe-core 4.14, `wcag21a` adds one rule (label-content-name-mismatch, SC 2.5.3 "Label in
 * Name"); there is no `wcag22a` rule. Override for a run with A11Y_WCAG_TAGS (see .env.example).
 */
const DEFAULT_WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

/**
 * Rules skipped in every scan. Keep this empty in CI: a rule listed here is no longer checked
 * anywhere. Only add one with a link to its tracked issue, e.g.:
 *   'color-contrast', // https://github.com/LimeSurvey/LimeSurvey/issues/<id>
 * Override for a run with A11Y_DISABLE_RULES (see .env.example).
 */
const DEFAULT_DISABLED_RULES = [
  // 'color-contrast',
];

/**
 * axe silently ignores unknown tags, so a typo (e.g. `wcag2x`) would scan nothing and pass.
 * Unknown rule ids in `disableRules` already make axe throw, so only tags need checking.
 */
function validateTags(tags) {
  const knownTags = new Set(axe.getRules().flatMap((rule) => rule.tags));
  const unknown = tags.filter((tag) => !knownTags.has(tag));
  if (unknown.length) {
    throw new Error(
      `Unknown axe-core ${axe.version} tag(s): ${unknown.join(', ')}. Check A11Y_WCAG_TAGS; ` +
        'an unknown tag would silently skip its rules.',
    );
  }
  return tags;
}

/** Tags every scan uses (A11Y_WCAG_TAGS or the default above). */
export const WCAG_TAGS = validateTags(env.a11yWcagTags ?? DEFAULT_WCAG_TAGS);

/** Rules every scan skips (A11Y_DISABLE_RULES or the default above). */
export const DISABLED_RULES = env.a11yDisabledRules ?? DEFAULT_DISABLED_RULES;

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
 *   Use `exclude`/`disableRules` only for documented, tracked issues. `disableRules` is added
 *   to the global DISABLED_RULES.
 */
export async function scanAccessibility(page, testInfo, { include, exclude = [], disableRules = [] } = {}) {
  const rulesToDisable = [...new Set([...DISABLED_RULES, ...disableRules])];
  let builder = new AxeBuilder({ page }).withTags(WCAG_TAGS);
  if (include) builder = builder.include(include);
  for (const selector of exclude) builder = builder.exclude(selector);
  if (rulesToDisable.length) builder = builder.disableRules(rulesToDisable);

  // Record the standard actually applied, so reports from runs with env overrides are comparable.
  testInfo.annotations.push({
    type: 'axe',
    description: `tags: ${WCAG_TAGS.join(', ')}; disabled rules: ${rulesToDisable.join(', ') || 'none'}`,
  });

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
