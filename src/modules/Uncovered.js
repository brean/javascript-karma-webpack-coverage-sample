export default class Uncovered {
  constructor() {
    this.message = "";
  }

  hasMessage() {
    return this.message && this.message.length > 0;
  }

  get getMessage() {
    return this.message;
  }

  set setMessage(value) {
    this.message = value;
  }
}
