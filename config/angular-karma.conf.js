// Karma configuration
// Generated on Sat Apr 16 2016 16:47:26 GMT-0600 (Mountain Daylight Time)
var webpackConfig = require('./webpack.test');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: './karma-test-shim.js', watched: false}
    ],
    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha'],
    port: 9876,

    colors: true,
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,
    concurrency: Infinity
  })
}
