/**
 * Sample class to show that coverage works.
 * Will greet the user with 'Hello World'.
 */
class Hello {
  /**
   * @param {DOMelement} elem DOM-Element that will show the greeting text.
   */
  constructor(elem) {
    this.elem = elem;
  }

  /**
   * replaces the html content to greet the user with a nice headline.
   * Note that this will delete the previous content of the element
   */
  fill() {
    this.elem.innerHTML = "<h1>Hello world!</h1>";
  }
}

export default Hello;
