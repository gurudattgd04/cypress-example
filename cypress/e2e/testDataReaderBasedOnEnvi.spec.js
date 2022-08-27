/// <reference types="cypress" />

it("let's test fixture data read based on envi set", () => {
  cy.fixture(`userData-${Cypress.env("ENVIRONMENT")}`).then((data) => {
    cy.log(data);
  });
});
