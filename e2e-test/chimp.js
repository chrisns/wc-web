module.exports = {
  // - - - - CHIMP - - - -
  config: {
    frontend: process.env.FRONTEND || "http://localhost:8080",
    backend: process.env.BACKEND || "http://localhost:8000"
  },
  watch: false,
  watchTags: '@focus',
  watchWithPolling: false,
  criticalSteps: null,
  criticalTag: '@critical',
  server: false,
  serverPort: 8060,
  serverHost: 'localhost',
  sync: true,
  offline: false,

  // - - - - CUCUMBER - - - -
  path: './features',
  format: 'pretty',
  tags: '~@ignore',
  singleSnippetPerFile: true,
  recommendedFilenameSeparator: '_',
  chai: true,
  screenshotsOnError: true,
  screenshotsPath: 'screenshots',
  captureAllStepScreenshots: false,
  saveScreenshotsToDisk: true,

  browser: 'firefox',
  saveScreenshotsToReport: false,

  noSessionReuse: true,

  // - - - - PHANTOM  - - - -
  phantom_w: 1280,
  phantom_h: 1024,

  log: 'info',
};
