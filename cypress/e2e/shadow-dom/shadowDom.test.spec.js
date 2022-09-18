/// <reference types="cypress" />

it("shadow dom test", () => {
  cy.visit("https://selectorshub.com/xpath-practice-page/");
  cy.get("#pact").then(($el) => {
    const body = $el.contents();
    cy.wrap(body).find("#snacktime").shadow().find("#tea").type("Chai");
  });
});
