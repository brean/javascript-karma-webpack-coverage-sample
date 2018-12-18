const webpackConfig = require("./webpack.config");
const path = require('path');
process.env.CHROME_BIN = require('puppeteer').executablePath();

delete webpackConfig.entry

module.exports = (config) => {
  config.set({
    browsers: ["ChromeHeadless"],
    frameworks: ["mocha", "sinon-chai"],
    reporters: ["spec", 'coverage-istanbul'],
    files: [
      "test/index.js"
    ],
    preprocessors: {
      "test/index.js": ["webpack"]
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly', 'text-summary' ],
      ignore: ['node_modules/**/*.js'],
      dir: path.join(__dirname, 'coverage'),
      fixWebpackSourcePaths: true,
      'report-config': {
        html: { outdir: 'html' }
      }
    }
  })
};
