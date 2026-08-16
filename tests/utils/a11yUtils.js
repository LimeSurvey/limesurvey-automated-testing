const { AxeBuilder } = require('@axe-core/playwright');
const fs = require('fs');
const path = require('path');

async function analyzeAccessibilityAndExportCSV(page, outputDir) {
  const headers = ['url', 'impact', 'html', 'failureSummary'];
  const rows = [headers.join(',')];
  let results = [];
  const severity = ['critical', 'serious', 'moderate', 'minor'];

  const csvPath = path.join(outputDir, 'report.csv');
  fs.mkdirSync(outputDir, { recursive: true });

  // A common, pragmatic baseline is wcag2a plus wcag2aa plus wcag21aa, which covers Level A and AA across WCAG 2.0 and 2.1.
  results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
    //.disableRules(['color-contrast'])
    .analyze();
  for (const violation of results.violations) {
    if (severity.includes(violation.impact)) {
      for (const node of violation.nodes) {
        const row = [
          page.url(),
          violation.impact || '',
          `"${node.html.replace(/"/g, '""')}"`,
          `"${node.failureSummary.replace(/"/g, '""')}"`
        ];
        rows.push(row.join(','));
      }
    }
  }
  fs.writeFileSync(csvPath, rows.join('\n'), 'utf8');
  return results;
}

module.exports = { analyzeAccessibilityAndExportCSV };