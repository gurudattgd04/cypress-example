const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const {
  cypressBrowserPermissionsPlugin,
} = require("cypress-browser-permissions");
import { tagify } from "cypress-tags";
const fs = require("fs");
const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  projectId: "5xvu1h",
  e2e: {
    specPattern: ["**/*.spec.js"],
    setupNodeEvents(on, config) {
      on("file:preprocessor", tagify(config));
      on("task", {
        log(message) {
          console.log(message);

          return null;
        },
        table(message) {
          console.table(message);
          //  fs.writeFile("/../results/axe-report.txt", ...message);
          return null;
        },
      });

      // require("cypress-mochawesome-reporter/plugin")(on);
      cypressBrowserPermissionsPlugin(on, config);
      cypressSplit(on, config);
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
