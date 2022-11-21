/// <reference types="cypress" />

it("Let's select some dates from calendar", () => {
  cy.visit("../../../cypress/index.html");
  cy.wait(20000);
  cy.get("iframe.aut-iframe").then((iframe) => {
    const body = iframe.contents().find("body");
    return cy.wrap(body);
  });
  cy.getIframe(".aut-iframe").find("#datepicker").click();
  cy.getIframe(".aut-iframe")
    .find(".ui-datepicker-month")
    .then(($element) => {
      cy.log($element.text());
      if (!$element.text().includes("September")) {
        cy.wrap($element).find("[title='Next']").click();
      }
    });
  cy.intercept("url", (req) => {
    req.destroy();
  });
  //cy.get("#datepicker").click();
});

Cypress.Commands.add("getIframe", (selector) => {
  return cy.get(selector).then((iframe) => {
    const body = iframe.contents().find("body");
    return cy.wrap(body);
  });
});
