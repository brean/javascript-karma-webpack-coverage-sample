# JavaScript + Karma + WebPack + Istanbul + ESLint + Web Services for Developers (Travis + Coveralls + inch-ci + CodeClimate)
Basic example of ECMAScript 6 using Webpack, Karma and Istanbul (automatic unit testing with coverage report), [linting](https://en.wikipedia.org/wiki/Lint_(software)) using ESLint, also travis and coveralls integration to create coverage badges and view it online as well as online suggestions for documentation improvements provided by inch-ci.

(if the badge shows 33% everything is fine, we have some code that is uncovered on purpose to test the system).

[![Build Status](https://travis-ci.org/brean/javascript-karma-webpack-coverage-sample.svg?branch=master)](https://travis-ci.org/brean/javascript-karma-webpack-coverage-sample)
[![Coverage Status](https://coveralls.io/repos/github/brean/javascript-karma-webpack-coverage-sample/badge.svg?branch=master)](https://coveralls.io/github/brean/javascript-karma-webpack-coverage-sample?branch=master)
[![Documentation Status](https://inch-ci.org/github/brean/javascript-karma-webpack-coverage-sample.svg?branch=master)](https://inch-ci.org/github/brean/javascript-karma-webpack-coverage-sample?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/bd64a7f55066b90b9f67/maintainability)](https://codeclimate.com/github/brean/javascript-karma-webpack-coverage-sample/maintainability)


## Motivation
I did not find an example project that was using webpack and provided test coverage for JavaScript.

## Notes on running npm locally
 - `npm run build` - builds your application in `dist/bundle.js` (you can check if the code works manually by opening [index.html](index.html))
 - `npm run watch` - continuous build when one of the JavaScript-files changes, makes direct testing while development easier.
 - `npm run docs` - creates the JSDoc-API documentation in the `docs/`-folder
 - `npm run test` - starts karma and runs the unit-tests from the `test/`-folder. Creates a HTML code-coverage report in the `coverage/`-folder

## Acknowledgments
Based on the [typescript-karma-webpack-coverage-sample](https://github.com/mcliment/typescript-karma-webpack-coverage-sample)
by [mcliment](https://github.com/mcliment) but for ES 6, with linting (ESLint) and web-services (travis, coveralls and inch-ci).

I switched to the Chromium launcher/pupeteer because PhantomJS does not support ES6.
