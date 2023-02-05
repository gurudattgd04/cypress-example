it("Validate the dropdown option selection by it's text and assert the selection", () => {
  cy.visit("https://www.bstackdemo.com/");
  cy.get("select").select("Highest to lowest");
  cy.get("select option:selected")
    .invoke("text")
    .should("eq", "Highet to lowest");
});
