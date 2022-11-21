/// <reference types="cypress" />

it("Session test", () => {
  cy.visit("https://www.bstackdemo.com/signin");
  cy.get(
    "#username > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder"
  ).type("existing_orders_user");
  cy.contains("#react-select-2-option-0-2", "existing_orders_user").click();
  cy.get("#password > .css-yk16xz-control > .css-1hwfws3").type(
    "testingisfun99"
  );
  cy.contains("#react-select-3-option-0-0", "testingisfun99").click();
  cy.get("#login-btn").click();
  cy.get(".username").invoke("text").should("eq", "existing_orders_user");
});
