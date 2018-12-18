# JavaScript + Karma + WebPack + Istanbul + Travis + Coveralls
Basic example of ECMAScript 6 using Webpack, Karma and Istanbul (automatic unit testing with coverage report), also travis and coveralls integration to create coverage badges and view coverage online.

(if the badge shows 25% everything is fine, we have some code that is uncovered on purpose to test the system).

[![Build Status](https://travis-ci.org/brean/javascript-karma-webpack-coverage-sample.svg?branch=master)](https://travis-ci.org/brean/javascript-karma-webpack-coverage-sample)
[![Coverage Status](https://coveralls.io/repos/github/brean/javascript-karma-webpack-coverage-sample/badge.svg?branch=master)](https://coveralls.io/github/brean/javascript-karma-webpack-coverage-sample?branch=master)



## Motivation
I did not find an example project that was using webpack and provided test coverage for JavaScript.

## Acknowledgments
Based on the [typescript-karma-webpack-coverage-sample](https://github.com/mcliment/typescript-karma-webpack-coverage-sample)
by [mcliment](https://github.com/mcliment) but for ES 6.

I switched to the Chromium launcher/pupeteer because PhantomJS does not support ES6.
