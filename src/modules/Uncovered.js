/**
 * some sample that is uncovered by unit-tests but documented for jsdoc.
 */
class Uncovered {
  /**
   * @constructor
   * @param {string} message - message string that will be stored
   */
  constructor(message = '') {
    this.message = message;
  }

  /**
   * checks, if a message has been set
   * @return {boolean} true if a message has been set
   */
  hasMessage() {
    return this.message && this.message.length > 0;
  }

  /**
   * @return {string} the message text
   */
  get message() {
    return this._message;
  }

  /**
   * sets the message
   * @param {string} value - the message text
   */
  set message(value) {
    this._message = value;
  }
}

export default Uncovered;
