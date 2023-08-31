it("Lets read xls file", () => {
  cy.fixture("userData.xlsx").then((data) => {
    cy.log(data);
  });
  cy.readFile("cypress/fixtures/userData.xlsx").then((data) => {
    cy.log(data);
  });
});

it.only("Excel file import using excelJs", async () => {
  cy.task("readXlsxData").then((data) => {
    cy.log(data);
  });
});
