export default class Hello {
  constructor(elem) {
    this.elem = elem;
  }

  fill() {
    this.elem.innerHTML = "<h1>Hello world!</h1>";
  }
}
