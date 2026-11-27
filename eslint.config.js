import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import playwright from 'eslint-plugin-playwright';
import globals from 'globals';

export default [
  {
    ignores: ['node_modules/', 'playwright-report/', 'blob-report/', 'test-results/', 'playwright/.auth/'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
    },
  },
  {
    files: ['tests/**/*.js', 'src/fixtures/**/*.js'],
    ...playwright.configs['flat/recommended'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      // Specs must import `test`/`expect` from src/fixtures, never from @playwright/test.
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@playwright/test',
              message: "Import { test, expect } from 'src/fixtures/index.js' instead.",
            },
          ],
        },
      ],
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-force-option': 'error',
      'playwright/no-page-pause': 'error',
      'playwright/no-focused-test': 'error',
      'playwright/no-element-handle': 'error',
      'playwright/no-eval': 'error',
      'playwright/no-raw-locators': 'off',
      'playwright/prefer-web-first-assertions': 'error',
      'playwright/require-top-level-describe': 'error',
      // Assertions live in helpers such as expectNoA11yViolations().
      'playwright/expect-expect': ['error', { assertFunctionNames: ['expectNoA11yViolations'] }],
    },
  },
  {
    // Fixtures are the one place allowed to build on @playwright/test.
    files: ['src/fixtures/**/*.js'],
    rules: { 'no-restricted-imports': 'off' },
  },
  {
    // Page objects must not assert: specs own every assertion.
    files: ['src/pages/**/*.js', 'src/components/**/*.js'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@playwright/test',
              importNames: ['expect', 'test'],
              message: 'Page objects return locators/values; assertions belong in specs.',
            },
          ],
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CallExpression[callee.property.name="waitForTimeout"]',
          message: 'Never use waitForTimeout. Wait for a locator or a response instead.',
        },
      ],
    },
  },
  prettier,
];
