/// <reference types="cypress" />

describe("Table validation", () => {
  it("let's validate table value based on columns", () => {
    cy.visit("./../../../cypress/table.html");
    cy.getTableData("Centro comercial Moctezuma", "Contact").should(
      "eq",
      "Francisco Chag"
    );
  });

  it("let's validate table value based on columns by query", () => {
    cy.visit("./../../../cypress/table.html");
    cy.contains("th", "Contact")
      .getTableDataByQuery("New Company")
      .should("eq", "New Contact");
  });

  Cypress.Commands.addQuery("getTableDataByQuery", (companyName) => {
    return ($el) => {
      let index = $el.index();
      console.log($el.index());
      console.log($el.parent());
      return $el
        .parents()
        .find(`td:contains(${companyName})`)
        .siblings()
        .eq(index - 1)
        .text();
    };
  });

  it("let's validate table value based on columns using then", () => {
    cy.visit("./../../../cypress/table.html");
    cy.contains("th", "Contact")
      .then(($el) => getTableDataByFn($el, "New Company"))
      .should("eq", "New Contact");
  });

  function getTableDataByFn($el, companyName) {
    let index = $el.index();
    console.log($el.index());
    console.log($el.parent());
    return $el
      .parents()
      .find(`td:contains(${companyName})`)
      .siblings()
      .eq(index - 1)
      .text();
  }

  it("Test cy.not", () => {
    cy.visit("./../../../cypress/table.html");
    cy.get(".headerRow").not(".selection");
  });

  Cypress.Commands.add("getSelectorById", (id) => {
    return cy.get(`#${id}`);
  });

  Cypress.Commands.addQuery("getElementCount", () => {
    return ($el) => $el.length;
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
});
