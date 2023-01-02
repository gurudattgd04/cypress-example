const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const {
  cypressBrowserPermissionsPlugin,
} = require("cypress-browser-permissions");

const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: true,
  },
  e2e: {
    specPattern: ["**/*.spec.js"],
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      cypressBrowserPermissionsPlugin(on, config);
      return config;
    },
    env: {
      browserPermissions: {
        geolocation: "allow",
      },
    },
    experimentalWebKitSupport: true,
    defaultCommandTimeout: 4000,
  },
});
