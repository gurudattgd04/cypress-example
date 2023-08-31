it("Let's validate get query command", () => {
  cy.visit("https://ecommerce-playground.lambdatest.io/");
  cy.get("span.title:contains(' Mega Menu')").trigger("mouseover");
});

it("Lets test contains", () => {
  cy.visit("https://ecommerce-playground.lambdatest.io/");
  cy.contains("span.title", " Mega Menu").trigger("mouseover");
});

it("Lets validate find query command", () => {
  cy.visit("https://ecommerce-playground.lambdatest.io/");
  cy.get("#widget-navbar-217834 ul.horizontal li:contains(' Blog')")
    .invoke("text")
    .should("to.include", "Blog");
  /* .then((el) => {
      expect(el.text()).to.include("Blog");
    }) */
  cy.getTextFromSelector(
    "#widget-navbar-217834 ul.horizontal li:contains(' Blog')"
  ).should("have.text".replace("  ", ""), "Blog");
});

Cypress.Commands.addQuery(
  "getTextFromSelector",
  function getTextFromSelector(selector) {
    const getFn = cy.now("get", selector, {});

    return () => {
      console.log("The subject we received was:");

      const btn = cy.now("get", selector, {});

      console.log(".get returned this element:", btn().text());

      return btn();
    };
  }
);
