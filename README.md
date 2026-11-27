# LimeSurvey automated tests

Playwright (JavaScript) end-to-end, API and accessibility tests for [LimeSurvey](https://github.com/LimeSurvey/LimeSurvey).
This repository contains only tests; the application lives in its own repository.

Contributor rules (page objects, locators, test conventions) are in [.claude/CLAUDE.md](.claude/CLAUDE.md).

## Quick start

```bash
npm ci
npx playwright install chromium
cp .env.example .env          # then set BASE_URL and the admin credentials
npm test                      # everything
npm run test:smoke            # health checks only
```

### Requirements on the LimeSurvey instance

Set these in _Configuration > Global settings_ (Interfaces / Security) or in `config.php`'s `'config'` array:

| Setting            | Value                                      | Why                                                                                                                                                         |
| ------------------ | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RPCInterface`     | `json`                                     | **Required.** Fixtures seed data through the RemoteControl 2 JSON-RPC API. When it is `off`, every seeded test fails in its fixture with a non-JSON error.  |
| `tokenIpWhitelist` | the IP LimeSurvey sees for the test runner | **Required for repeated runs.** Each run submits one invalid access code; LimeSurvey never resets that counter, so the 3rd run within 10 min is locked out. |
| `loginIpWhitelist` | the IP LimeSurvey sees for the test runner | Recommended. Negative login tests count towards the same kind of lockout.                                                                                   |

The IP is `127.0.0.1` when the app runs on the same host (CI), but the Docker gateway (e.g. `172.18.0.1`) for a
Dockerised dev environment. Check `failed_login_attempts.ip` in the database after one run if unsure.

The setup project switches the test admin to the classic admin interface (user setting `editorEnabled = 0`)
through the REST API, because LimeSurvey 7 enables the new React editor by default and it redirects several
classic pages.

### Environment variables

| Variable             | Default                 | Description                                                       |
| -------------------- | ----------------------- | ----------------------------------------------------------------- |
| `BASE_URL`           | `http://localhost:8080` | LimeSurvey entry URL. Without URL rewriting include `/index.php`. |
| `LS_ADMIN_USER`      | —                       | Super-administrator user name                                     |
| `LS_ADMIN_PASSWORD`  | —                       | Super-administrator password                                      |
| `CI`                 | —                       | Enables retries, `forbidOnly`, 2 workers and CI reporters         |
| `A11Y_WCAG_TAGS`     | WCAG 2.0/2.1/2.2 A + AA | Comma-separated axe tags to scan for; unknown tags fail the run   |
| `A11Y_DISABLE_RULES` | none                    | Comma-separated axe rule ids skipped in every scan                |

Values come from the shell first, then from `.env` (gitignored). Never commit credentials.
The accessibility defaults live in [src/utils/accessibility.js](src/utils/accessibility.js); the variables
are for local exploration. Leave them unset in CI so results stay comparable between runs, and only
disable a rule with a link to its tracked issue.

## Running tests

| Command                                   | What it runs                                          |
| ----------------------------------------- | ----------------------------------------------------- |
| `npm test`                                | All projects                                          |
| `npm run test:smoke`                      | `smoke` project: fast health checks / deployment gate |
| `npm run test:admin`                      | `admin` project: admin UI flows                       |
| `npm run test:respondent`                 | `respondent` project: survey-taking flows             |
| `npm run test:api`                        | `api` project: RemoteControl and REST API             |
| `npm run test:a11y`                       | `accessibility` project: axe-core WCAG 2.x A/AA scans |
| `npm run test:regression`                 | Everything except accessibility                       |
| `npx playwright test --grep @respondent`  | Filter by tag across projects                         |
| `npx playwright test tests/admin/surveys` | One folder or file                                    |

Debugging: `npm run test:ui` (UI mode), `npm run test:debug` (inspector), `npm run test:headed`,
`npm run report` (last HTML report). Failed tests keep a trace, screenshot and video; open a trace with
`npx playwright show-trace test-results/<test>/trace.zip`. Accessibility tests attach the full axe results
(JSON and CSV) to the HTML report.

**Accessibility tests are currently `test.fixme`.** Every scanned screen of LimeSurvey 7.10.0 fails WCAG A/AA
(at least `color-contrast`; see the comment at the top of each spec in `tests/admin/accessibility/`). Per the
project rules the assertions are not relaxed: link the filed issue in each spec, and remove the `test.fixme()`
line once LimeSurvey is fixed. To see the current violations, comment that line out locally and run
`npm run test:a11y`; the HTML report holds the axe JSON/CSV per screen.

### Projects and tags

| Project         | Folder                                           | Session                                      | Depends on |
| --------------- | ------------------------------------------------ | -------------------------------------------- | ---------- |
| `setup`         | `tests/auth.setup.js`                            | logs in, saves `playwright/.auth/admin.json` | —          |
| `smoke`         | `tests/smoke/`                                   | admin (anonymous where needed)               | `setup`    |
| `admin`         | `tests/admin/` (except `api/`, `accessibility/`) | admin                                        | `setup`    |
| `respondent`    | `tests/respondent/`                              | anonymous                                    | —          |
| `api`           | `tests/admin/api/`                               | none (API only)                              | —          |
| `accessibility` | `tests/admin/accessibility/`                     | admin                                        | `setup`    |

Every test carries at least one of `@smoke`, `@admin`, `@respondent`; additional tags are `@api` and `@a11y`.

## Design

- **Seed through the API.** Fixtures import `.lss` files, activate surveys and add participants with the
  RemoteControl API ([src/api/RemoteControlClient.js](src/api/RemoteControlClient.js)). The UI is only used
  when it is the thing under test.
- **Authenticate once.** The `setup` project logs in through the UI and saves `storageState`; the admin
  projects reuse it. Tests that need a clean or different session override `storageState` locally.
  Consequence: all those tests share **one server-side PHP session**, so in parallel runs they must not
  assert on session-scoped UI state such as flash messages (another test's page load can consume them).
  Assert on the durable outcome instead (page content, API state). The API clients use their own isolated
  cookie jars, because every RemoteControl call destroys the PHP session it runs in.
- **Isolated tests.** Every test creates its own surveys with unique titles and the `surveyFactory` fixture
  deletes them afterwards, even when the test fails. Tests run fully in parallel and in any order.
- **Ids from the API.** Respondent-side ids are built from the ids returned on import
  (`#question{qid}`, `#answerQ{qid}`; LimeSurvey 7 no longer uses `{sid}X{gid}X{qid}`).

### Fixtures ([src/fixtures/index.js](src/fixtures/index.js))

| Fixture                                       | Scope  | Provides                                                                              |
| --------------------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| `remoteControl`                               | worker | Logged-in `RemoteControlClient`                                                       |
| `surveyFactory`                               | test   | `create({ active, closedAccess, participants, title, file })`, `track(id)`; cleans up |
| `survey`                                      | test   | Inactive, open-access basic survey (`SeededSurvey`)                                   |
| `activeSurvey`                                | test   | Active, open-access basic survey                                                      |
| `closedAccessSurvey`                          | test   | Active, closed-access survey (`access_mode` `C` + participant table), 1 participant   |
| `loginPage`, `dashboardPage`, `surveyPage`, … | test   | Page objects                                                                          |

`SeededSurvey` exposes `id`, `title`, `participants`, `question(code)` (`{ qid, gid, … }`) and
`answerColumn(code)` (response column for `add_response`). The basic survey's content is described in
[src/data/index.js](src/data/index.js).

### Layout

```
src/
  api/          RemoteControl + REST clients, SeededSurvey
  components/   reusable UI parts (navbar, flash messages, dialogs, floating actions bar)
  config/       environment loading
  data/         .lss surveys and test-data builders
  fixtures/     Playwright fixtures (the only import source for specs)
  pages/        page objects: admin/ and respondent/
  utils/        routes, accessibility helper
tests/
  auth.setup.js
  smoke/  admin/  respondent/
scripts/db/     legacy DB snapshot tooling; its CI seed step is disabled (the tests don't depend on it)
```

### Writing a test

```js
import { expect, test } from '../../src/fixtures/index.js';

test.describe('Survey responses', { tag: '@admin' }, () => {
  test('response browser lists the responses stored for a survey', async ({
    activeSurvey,
    remoteControl,
    responsesPage,
  }) => {
    await remoteControl.addResponse(activeSurvey.id, { [activeSurvey.answerColumn('name')]: 'Ada' });

    await responsesPage.goto(activeSurvey.id);

    await expect(responsesPage.responseRow('Ada')).toBeVisible();
  });
});
```

Before committing run `npm run check` (ESLint + Prettier). ESLint enforces the Playwright rules
(no `waitForTimeout`, no `force`, web-first assertions, specs importing from `src/fixtures` only).

## CI/CD

[.github/workflows/master.yml](.github/workflows/master.yml) runs on push, pull request, manual dispatch and
`workflow_call`:

1. **lint**: ESLint and Prettier.
2. **test** (matrix per project): installs LimeSurvey (`limesurvey_ref` input, default `master`) with
   Apache/PHP/MySQL, enables the JSON-RPC API and the loopback allowlists, then runs
   `npx playwright test --project=<project>`. The HTML report, traces and JUnit XML are uploaded as artifacts.

The step that loads the legacy DB snapshot ([scripts/db/ls-ce.sql](scripts/db/ls-ce.sql)) is commented out:
the dump no longer matches the current LimeSurvey schema. How to re-export it is described above that
step in the workflow.

Pull-request runs cancel their superseded run; push, dispatch and called runs are never cancelled.

To use the suite as a deployment gate, call it from the application pipeline and pass the commit being
deployed (otherwise LimeSurvey `master` is tested):

```yaml
jobs:
  e2e:
    uses: LimeSurvey/limesurvey-automated-testing/.github/workflows/master.yml@master
    with:
      limesurvey_ref: ${{ github.sha }}
```

The workflow checks out its own code via `job.workflow_repository`/`job.workflow_sha` (in a called workflow
the `github` context belongs to the caller). Alternatively, run the suite against any deployed environment by
exporting `BASE_URL`, `LS_ADMIN_USER` and `LS_ADMIN_PASSWORD` (from CI secrets) and running
`npm run test:smoke` followed by `npm run test:regression`.
