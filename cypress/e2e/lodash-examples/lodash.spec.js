/// <reference types="cypress" />

var _ = require("lodash");

it("Assert all the elements are truely", () => {
  let testArry = [
    {
      processId: 1,
      status: 1,
      startDate: "2023-06-09T14:38:40.4404499",
      endDate: null,
    },
    {
      processId: 4,
      status: 2,
      startDate: "2023-06-09T14:31:40.9584041",
      endDate: "2023-06-09T14:31:40.9655563",
    },
    {
      processId: 6,
      status: 2,
      startDate: "2023-06-09T14:36:02.3850904",
      endDate: "2023-06-09T14:36:06.4816924",
    },
  ];
  cy.log(Cypress._.every(testArry, ["status", 2]));

  //assert with expect
  expect(Cypress._.every(testArry, ["status", 2])).to.deep.equal(true);

  //wrap it for later usage or assertion
  cy.wrap(Cypress._.every(testArry, ["status", 2])).as("status");

  //assert by using get function to get the wrapped alias
  cy.get("@status").should("equal", true);
});

it.only("test some", () => {
  let tst = [
    {
      fileId: "00000000-0000-0000-0000-000000000000",
      creationDate: "2023-06-13T11:50:21.132",
      status: 2,
      fileName: "company-1686656906589.csv",
      uploadUserName: "Gurudatt Sa",
      outputFileName: null,
      companyName: null,
      importFileType: null,
    },
    {
      fileId: "00000000-0000-0000-0000-000000000000",
      creationDate: "2023-06-13T11:40:22.878",
      status: 2,
      fileName: "company-1686656293026.csv",
      uploadUserName: "Gurudatt Sa",
      outputFileName: null,
      companyName: null,
      importFileType: null,
    },
    {
      fileId: "00000000-0000-0000-0000-000000000000",
      creationDate: "2023-06-13T11:35:40.536",
      status: 2,
      fileName: "product-1686655850850.csv",
      uploadUserName: "Gurudatt Sa",
      outputFileName: null,
      companyName: null,
      importFileType: null,
    },
    {
      fileId: "00000000-0000-0000-0000-000000000000",
      creationDate: "2023-06-13T11:35:19.443",
      status: 2,
      fileName: "company-1686655955538.csv",
      uploadUserName: "Gurudatt Sa",
      outputFileName: null,
      companyName: null,
      importFileType: null,
    },
    {
      fileId: "00000000-0000-0000-0000-000000000000",
      creationDate: "2023-06-13T11:30:19.457",
      status: 2,
      fileName: "company-1686655576559.csv",
      uploadUserName: "Gurudatt Sa",
      outputFileName: null,
      companyName: null,
      importFileType: null,
    },
    {
      fileId: "00000000-0000-0000-0000-000000000000",
      creationDate: "2023-06-13T11:21:01.878",
      status: 2,
      fileName: "project-1686654863289.csv",
      uploadUserName: "Gurudatt Sa",
      outputFileName: null,
      companyName: null,
      importFileType: null,
    },
    {
      fileId: "00000000-0000-0000-0000-000000000000",
      creationDate: "2023-06-13T11:20:42.389",
      status: 2,
      fileName: "product-1686654850224.csv",
      uploadUserName: "Gurudatt Sa",
      outputFileName: null,
      companyName: null,
      importFileType: null,
    },
    {
      fileId: "00000000-0000-0000-0000-000000000000",
      creationDate: "2023-06-13T11:20:20.381",
      status: 2,
      fileName: "company-1686654836709.csv",
      uploadUserName: "Gurudatt Sa",
      outputFileName: null,
      companyName: null,
      importFileType: null,
    },
    {
      fileId: "00000000-0000-0000-0000-000000000000",
      creationDate: "2023-06-12T13:55:13.485",
      status: 2,
      fileName: "transaction-1686577537784.csv",
      uploadUserName: "Gurudatt Sa",
      outputFileName: null,
      companyName: null,
      importFileType: null,
    },
    {
      fileId: "00000000-0000-0000-0000-000000000000",
      creationDate: "2023-06-12T12:35:23.128",
      status: 2,
      fileName: "transaction-tieredRetro-1686573208200.csv",
      uploadUserName: "Gurudatt Sa",
      outputFileName: null,
      companyName: null,
      importFileType: null,
    },
  ];
  let fileName = "transaction-tieredRetro-1686573208200";
  cy.log(
    Cypress._.some(tst, {
      status: 2,
      fileName: `${fileName}.csv`,
    })
  );
});
