it("Let's validate get query command", () => {
  cy.visit("https://ecommerce-playground.lambdatest.io/");
  cy.get("#widget-navbar-217834 ul.horizontal")
    // find immediate children
    .children("li")
    .its("length")
    .should("eq", 6);
  //get element using jquery
  cy.get("span.title:contains(' Mega Menu')").trigger("mouseover");
});

it("Let's validate contains query command", () => {
  cy.visit("https://ecommerce-playground.lambdatest.io/");
  cy.contains("span.title", " Mega Menu").trigger("mouseover");
});

it("Let's validate get and within query command and subject", () => {
  cy.visit("https://ecommerce-playground.lambdatest.io/");
  cy.get("#widget-navbar-217834").within(() => {
    cy.get("ul.horizontal").children("li").its("length");
    cy.get("button:contains('All Categories')", { withinSubject: null });
  });
});

it("Let's validate find query command", () => {
  cy.visit("https://ecommerce-playground.lambdatest.io/");
  cy.get("#widget-navbar-217834 ul.horizontal")
    // finds immediate children and it's descendents
    .find("li")
    .its("length")
    .should("eq", 6);
});
