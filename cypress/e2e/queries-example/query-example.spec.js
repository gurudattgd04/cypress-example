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
  cy.get("#widget-navbar-217834 ul.horizontal")
    .find("li:contains(' Blog')")
    .click();
});
