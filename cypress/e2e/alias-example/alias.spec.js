it.only("Dynamic table", () => {
  cy.visit("./../../../cypress/table.html");
  cy.get("#CompanyData tr")
    .not(".tableRow")
    .its("length")
    .as("tableLength", { type: "static" });
  // cy.get("@tableLength").should("eq", 7);
});
