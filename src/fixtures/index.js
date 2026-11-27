import { expect as baseExpect, mergeTests } from '@playwright/test';
import { test as pageTest } from './pages.fixtures.js';
import { test as surveyTest } from './survey.fixtures.js';

/**
 * The only entry point for specs:
 *
 *   import { test, expect } from '../../src/fixtures/index.js';
 *
 * Fixtures
 *   remoteControl       (worker) logged-in RemoteControl API client
 *   surveyFactory       seeds surveys through the API and deletes them after the test
 *   survey              inactive, open-access basic survey
 *   activeSurvey        active, open-access basic survey
 *   closedAccessSurvey  active basic survey with 3 participants
 *   <name>Page          page objects (loginPage, dashboardPage, surveyPage, ...)
 */
export const test = mergeTests(surveyTest, pageTest);
export const expect = baseExpect;
