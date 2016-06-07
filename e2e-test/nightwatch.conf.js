/* global request cookie_jar _ */
const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')

const inDocker = process.env.SELENIUM_HOST !== undefined
const seleniumHost = process.env.SELENIUM_HOST || 'localhost'

const frontend = process.env.FRONTEND || 'http://localhost:8080';
const backend = process.env.BACKEND || 'http://localhost:8000';

module.exports = {
  src_folders: [require('nightwatch-cucumber')({
    closeSession: 'afterScenario'
  })],
  // globals_path: 'globalsModule.js',
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  // page_objects_path: 'page_objects',
  live_output: true,
  disable_colors: false,

  selenium: {
    start_process: !inDocker,
    server_path: seleniumServer.path,
    log_path: 'reports',
    host: 'selenium',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path
    }
  },

  test_settings: {
    default: {
      launch_url: frontend,
      globals: {
        backend_url: backend
      },
      selenium_port: 4444,
      selenium_host: seleniumHost,
      silent: true,
      skip_testcases_on_fail: false,
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          'args': ['--no-sandbox', '--js-flags=--expose-gc', '--enable-precise-memory-info']
        }
      }
    }

  }
}
