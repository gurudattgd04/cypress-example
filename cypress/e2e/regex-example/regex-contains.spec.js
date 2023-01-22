it("Let's test regex contains", () => {
  cy.visit("https://www.bstackdemo.com/");
  cy.get("select").select("highestprice");
  cy.wait(2000);
  cy.contains("Galaxy S20").invoke("text").should("eq", "Galaxy S20 Ultra");
  const s20 = new RegExp(`${"Galaxy S20"}[^&]*`, "gm");
  cy.contains(s20)
    .invoke("text")
    .then((data) => {
      cy.log(data);
    });
  const matcher = new RegExp("^Galaxy S20\\+$", "gm");
  cy.contains(matcher)
    .invoke("text")
    .then((data) => {
      cy.log(data);
    });
});
