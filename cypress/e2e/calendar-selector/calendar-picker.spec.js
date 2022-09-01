/// <reference types="cypress" />
import { recurse } from "cypress-recurse";

it("select a date", () => {
  cy.visit("../../../cypress/index.html");
  cy.get("#datepicker").click();
  cy.contains("[data-handler='selectDay'] a", "25").click();
});

it("Select date based on month", () => {
  cy.visit("../../../cypress/index.html");
  cy.get("#datepicker").click();
  recurse(
    () => cy.get(".ui-datepicker-month").invoke("text"),
    (n) => {
      if (!n.includes("December")) {
        cy.get("[title='Next']").click();
        return false;
      }
      cy.contains("[data-handler='selectDay'] a", "24").click();
      return true;
    },
    {
      limit: 12,
    }
  );
});
