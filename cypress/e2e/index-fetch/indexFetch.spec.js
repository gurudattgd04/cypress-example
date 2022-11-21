/// <reference types="cypress" />

it("Fetch index", () => {
  cy.visit("../cypress/e2e/indexFetch.html");
  cy.get("ul li.active").then(($el) => {
    cy.log($el.index());
  });
});
