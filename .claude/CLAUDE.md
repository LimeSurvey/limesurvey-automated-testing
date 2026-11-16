# LimeSurvey E2E tests

Playwright (JavaScript) end-to-end tests for LimeSurvey. This repo contains only tests. The application lives in a separate repo.

## Application source

- The LimeSurvey source is checked out at `../LimeSurvey`. It is read-only: never edit, commit, or run git commands there.
- Key locations (confirm these against the checked-out version):
  - Admin controllers: `application/controllers/admin/`
  - Admin views: `application/views/admin/`
  - Respondent-facing survey themes: `themes/survey/`
  - RemoteControl API: `application/helpers/remotecontrol/remotecontrol_handle.php`
- Before writing or changing a page object or test:
  1. Read the controller and view for the feature.
  2. Take locators from the real templates.
  3. Don't confirm them in the running app yet.

## Environment

- `BASE_URL` is the target instance (default `http://localhost:8080`)
- `LS_ADMIN_USER` and `LS_ADMIN_PASSWORD` are the admin credentials
- Local values live in `.env`, which is gitignored. Never commit credentials or hardcode them in tests.

## Structure

- `src/pages/` has one page object class per page
- `src/components/` has reusable UI parts (sidebar, modals, top bar)
- `src/fixtures/` extends the Playwright `test` object. Import `test` and `expect` from `src/fixtures/index.js`, never from `@playwright/test`, in spec files.
- `src/api/` is the RemoteControl client used for seeding and cleanup
- `src/data/` holds `.lss` survey exports and participant CSVs
- `tests/admin/`, `tests/respondent/`, `tests/smoke/` hold the specs
- `tests/auth.setup.js` logs in once and saves `storageState`

## Page object rules

- One class per page or component. The constructor takes `page` and defines locators as properties.
- Methods describe user actions (`createSurvey(title)`), not clicks (`clickSaveButton()`).
- No assertions inside page objects. They return locators or values, and specs assert.
- A method that navigates returns the page object for the destination page.

## Locator rules

Order of preference:

1. `getByRole` with an accessible name
2. `getByLabel`, `getByPlaceholder`, `getByText`
3. Stable `id` or `name` attributes from the templates
4. CSS selectors as a last resort, with a comment explaining why

Never use XPath, positional selectors such as `nth-child`, or auto-generated class names. Question inputs on the respondent side use ids built from survey, group, and question ids, so construct those from the ids returned by the API instead of hardcoding them.

## Test rules

- Each test creates its own data through the API fixtures and deletes it afterwards. Tests must pass in any order and in parallel.
- Seed through the RemoteControl API (import `.lss`, activate, add participants). Use the UI for setup only when the setup is the thing under test.
- Never use `page.waitForTimeout`. Rely on web-first assertions (`await expect(locator).toBeVisible()`).
- Tag every test with at least one of `@smoke`, `@admin`, `@respondent`.
- Test titles state the expected behavior: `admin can activate a survey with one question group`.
- One behavior per test. Use `test.step` for long flows.
- If a test fails because of an application bug, do not weaken the assertion. Mark it with `test.fixme`, add a comment linking the issue, and report it.

## Code style

- ES modules, `async`/`await`, no TypeScript
- ESLint and Prettier must pass before committing
- File names: `SurveyListPage.js` for page objects, `survey-activation.spec.js` for specs

## Git workflow

- Do not commit anything yet. Everything should stay local for now.
