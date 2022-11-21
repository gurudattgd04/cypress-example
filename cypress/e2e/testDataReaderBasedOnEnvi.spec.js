/// <reference types="cypress" />
describe("Envi test", () => {
  it("let's test fixture data read based on envi set", () => {
    cy.visit("https://bistromd-staging.myshopify.com/");
    cy.get('input[type="password"]').type("notyet");
    cy.get('input[type="submit"]').click();
    cy.wait(8000); // waiting for overlay to appear
    cy.root();
    Cypress.onSpecWindow;
  });
});
