it("test file loading using fixture", () => {
  cy.fixture("/userData-prod").then((data) => {
    cy.log("test", data);
  });
});

cy.readFile("cypress/fixtures/userData-prod.json").then((data) => {
  cy.log("data", data);
});
