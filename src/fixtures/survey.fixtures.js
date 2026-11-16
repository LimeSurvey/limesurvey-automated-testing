import { RemoteControlError } from '../api/RemoteControlClient.js';
import { SeededSurvey } from '../api/SeededSurvey.js';
import { SURVEY_FILES, buildParticipants, uniqueName } from '../data/index.js';
import { test as base } from './api.fixtures.js';

/**
 * @typedef {object} SurveyOptions
 * @property {string} [file] .lss file to import (defaults to SURVEY_FILES.basic)
 * @property {string} [title] survey title (defaults to a unique "E2E ..." title)
 * @property {boolean} [active] activate the survey after import
 * @property {boolean} [closedAccess] closed-access mode: participant table + access_mode 'C'
 * @property {number|Array<object>} [participants] participant count or explicit participant rows; implies closedAccess
 * @property {Record<string, 'Y'|'N'>} [activationSettings] passed to activate_survey
 */

/**
 * @typedef {object} SurveyFactory
 * @property {(options?: SurveyOptions) => Promise<SeededSurvey>} create Seeds a survey through the API.
 * @property {(surveyId: number) => void} track Registers a survey created elsewhere (e.g. through the UI) for cleanup.
 */

/**
 * @typedef {object} SurveyFixtures
 * @property {SurveyFactory} surveyFactory
 * @property {SeededSurvey} survey Inactive, open-access basic survey.
 * @property {SeededSurvey} activeSurvey Active, open-access basic survey.
 * @property {SeededSurvey} closedAccessSurvey Active, closed-access basic survey with one participant.
 */

/** Random 6-digit id, so parallel imports of the same .lss don't race for the id stored in the file. */
function randomSurveyId() {
  return 100000 + Math.floor(Math.random() * 900000);
}

/** @type {import('@playwright/test').TestType<SurveyFixtures, {}>} */
export const test = base.extend({
  surveyFactory: async ({ remoteControl }, use, testInfo) => {
    const createdIds = new Set();

    async function importSurvey(file, title) {
      try {
        return await remoteControl.importSurvey(file, { title, surveyId: randomSurveyId() });
      } catch (error) {
        // A concurrent import can still grab the same id; one retry with a new id is enough.
        if (error instanceof RemoteControlError && error.errorCode === 'ERR_CREATION_FAILED') {
          return remoteControl.importSurvey(file, { title, surveyId: randomSurveyId() });
        }
        throw error;
      }
    }

    /** @type {SurveyFactory} */
    const factory = {
      async create({
        file = SURVEY_FILES.basic,
        title = uniqueName(`E2E w${testInfo.workerIndex}`),
        active = false,
        closedAccess = false,
        participants = [],
        activationSettings = {},
      } = {}) {
        const id = await importSurvey(file, title);
        createdIds.add(id);

        const participantRows =
          typeof participants === 'number' ? buildParticipants(participants) : participants;
        let seededParticipants = [];
        if (closedAccess || participantRows.length > 0) {
          // Closed access in LimeSurvey 7 = participant table + `access_mode` 'C' (what the
          // UI's SurveyAccessModeService does). The table alone leaves the survey open to
          // everyone, so respondents would never see the access-code prompt.
          await remoteControl.activateTokens(id);
          await remoteControl.setSurveyProperties(id, { access_mode: 'C' });
          if (participantRows.length > 0) {
            seededParticipants = await remoteControl.addParticipants(id, participantRows);
          }
        }
        if (active) {
          await remoteControl.activateSurvey(id, activationSettings);
        }

        const [groups, questions] = await Promise.all([
          remoteControl.listGroups(id),
          remoteControl.listQuestions(id),
        ]);
        return new SeededSurvey({ id, title, active, groups, questions, participants: seededParticipants });
      },

      track(surveyId) {
        createdIds.add(Number(surveyId));
      },
    };

    await use(factory);

    // Teardown: delete everything this test created, even if the test failed.
    for (const id of [...createdIds].reverse()) {
      try {
        await remoteControl.deleteSurvey(id);
      } catch (error) {
        // delete_survey reports a missing survey as ERR_NO_PERMISSION, so check whether the
        // test already deleted it (e.g. the UI deletion test) before reporting a leak.
        const stillExists = await remoteControl
          .getSurveyProperties(id, ['sid'])
          .then(() => true)
          .catch((e) => !(e instanceof RemoteControlError && e.errorCode === 'ERR_INVALID_SURVEY'));
        if (stillExists) {
          console.warn(`[surveyFactory] could not delete survey ${id}: ${error.message}`);
        }
      }
    }
  },

  survey: async ({ surveyFactory }, use) => {
    await use(await surveyFactory.create());
  },

  activeSurvey: async ({ surveyFactory }, use) => {
    await use(await surveyFactory.create({ active: true }));
  },

  closedAccessSurvey: async ({ surveyFactory }, use) => {
    await use(await surveyFactory.create({ active: true, participants: 1 }));
  },
});
