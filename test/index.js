// requires all tests in `project/test/specs/**/*specs.js`
const tests = require.context('./specs/', true, /specs\.js$/);

tests.keys().forEach(tests);

// requires all components in `project/src/modules/**/index.js`
const components = require.context('../src/', true, /index\.js$/);

components.keys().forEach(components);
