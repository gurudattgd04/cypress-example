const { defineConfig } = require("cypress");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const {
  cypressBrowserPermissionsPlugin,
} = require("cypress-browser-permissions");
import { tagify } from "cypress-tags";
const fs = require("fs");
const cypressSplit = require("cypress-split");
const ExcelJS = require("exceljs");

module.exports = defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  experimentalSessionAndOrigin: true,
  projectId: "6o7rte",
  e2e: {
    specPattern: ["cypress/e2e/**/*.js"],
    setupNodeEvents(on, config) {
      on("task", {
        async readXlsxData() {
          const workbook = await new ExcelJS.Workbook();
          return await workbook.xlsx
            .readFile("cypress/fixtures/userData.xlsx")
            .then(function () {
              console.log("test", workbook.getWorksheet("Sheet1"));
              return workbook.getWorksheet("Sheet1");
            });
        },
      });
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
      // config.baseUrl = `https://${config.env.HOST}`;
      return config;
    },
    experimentalWebKitSupport: true,
    defaultCommandTimeout: 9000,
    videoCompression: 50,
  },
});
