import path from 'node:path';
import { randomBytes } from 'node:crypto';

const dataDir = import.meta.dirname;

/** Survey structure files (.lss) that fixtures import through the RemoteControl API. */
export const SURVEY_FILES = {
  /**
   * Open-access, group-by-group survey with a welcome page and back navigation:
   *   Group "About you": name (S, mandatory), satisfaction (L: A1..A3)
   *   Group "Feedback":  recommend (Y), comments (T)
   */
  basic: path.join(dataDir, 'surveys/basic-survey.lss'),
};

/** Mirrors the content of basic-survey.lss so specs don't repeat magic strings. */
export const BASIC_SURVEY = {
  welcomeText: 'Welcome to the automated test survey.',
  endText: 'Thank you for completing the automated test survey.',
  groups: { aboutYou: 'About you', feedback: 'Feedback' },
  questions: {
    name: { code: 'name', text: 'What is your name?' },
    satisfaction: {
      code: 'satisfaction',
      text: 'How satisfied are you with LimeSurvey?',
      options: { A1: 'Very satisfied', A2: 'Satisfied', A3: 'Not satisfied' },
    },
    recommend: { code: 'recommend', text: 'Would you recommend LimeSurvey to a friend?' },
    comments: { code: 'comments', text: 'Any other comments?' },
  },
};

/** Short random suffix that keeps names unique across parallel workers and reruns. */
export function uniqueSuffix() {
  return `${Date.now().toString(36)}${randomBytes(3).toString('hex')}`;
}

/** @param {string} prefix */
export function uniqueName(prefix) {
  return `${prefix} ${uniqueSuffix()}`;
}

/**
 * Builds unique participants for add_participants / the participant form.
 * Uses the reserved example.com domain so no real mailbox is ever contacted.
 * @param {number} count
 * @returns {Array<{ firstname: string, lastname: string, email: string }>}
 */
export function buildParticipants(count) {
  return Array.from({ length: count }, (_, index) => {
    const suffix = uniqueSuffix();
    return {
      firstname: `Tester${index + 1}`,
      lastname: `E2E-${suffix}`,
      email: `tester${index + 1}.${suffix}@example.com`,
    };
  });
}
