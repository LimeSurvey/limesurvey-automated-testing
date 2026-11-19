/**
 * Read-only view of a survey created through the API, with the ids LimeSurvey assigned
 * on import. Specs and page objects use it to build id-based locators and response
 * column names instead of hardcoding ids.
 */
export class SeededSurvey {
  /**
   * @param {object} init
   * @param {number} init.id
   * @param {string} init.title
   * @param {boolean} init.active
   * @param {Array<{ gid: number, group_name: string, group_order: number }>} init.groups
   * @param {Array<{ qid: number, gid: number, title: string, type: string, question: string, parent_qid: number }>} init.questions
   * @param {Array<{ tid: number, token: string, firstname: string, lastname: string, email: string }>} init.participants
   */
  constructor({ id, title, active, groups, questions, participants }) {
    this.id = id;
    this.title = title;
    this.active = active;
    this.groups = groups;
    this.questions = questions;
    this.participants = participants;
  }

  /**
   * @param {string} code question code (the `title` column in LimeSurvey)
   * @returns {{ qid: number, gid: number, sid: number, code: string, type: string, text: string }}
   */
  question(code) {
    const question = this.questions.find((q) => q.title === code && Number(q.parent_qid) === 0);
    if (!question) {
      throw new Error(`Survey ${this.id} has no question with code "${code}"`);
    }
    return {
      qid: Number(question.qid),
      gid: Number(question.gid),
      sid: this.id,
      code: question.title,
      type: question.type,
      text: question.question,
    };
  }

  /**
   * Response-table column for a question, as used by add_response.
   * LimeSurvey 7 names columns `Q{qid}` (see createFieldMap in common_helper.php).
   * @param {string} code
   */
  answerColumn(code) {
    return `Q${this.question(code).qid}`;
  }
}
