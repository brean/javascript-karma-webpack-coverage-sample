import Hello from './modules/Hello';
import './modules/Uncovered';

const container = document.getElementById('app');

if (container) {
  // we assume the code is called from index.html and there is a container
  // present. The testing environment does not provide an "app"-DOM element.
  let hello = new Hello(container);
  hello.fill();
}
