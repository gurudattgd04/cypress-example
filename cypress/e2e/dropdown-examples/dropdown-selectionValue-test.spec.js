it("Validate the dropdown option selection by it's value", () => {
  cy.visit("https://www.bstackdemo.com/");
  cy.get("select")
    .select("lowestprice")
    .invoke("val")
    .should("eq", "lowestprice");
});
