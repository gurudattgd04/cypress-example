/// <reference types="cypress" />

it("let's validate table value based on columns", () => {
  cy.visit("./../../../cypress/table.html");
  cy.getTableData("Centro comercial Moctezuma", "Contact").should(
    "eq",
    "Francisco Chang"
  );
});

it("Test cy.not", () => {
  cy.visit("./../../../cypress/table.html");
  cy.get(".headerRow").not(".selection");
});

Cypress.Commands.add("getTableData", (companyName, columnName) => {
  return cy
    .contains("th", columnName)
    .invoke("index")
    .then((index) => {
      cy.contains("td", companyName)
        .should("have.length", 1)
        .siblings()
        .eq(index - 1)
        .invoke("text");
    });
});
