it("Intercept test", () => {
  cy.intercept(
    {
      url: "https://www.bstackdemo.com/api/products",
      method: "GET",
    },
    (req) => {
      if (req.headers.host === "www.bstackdemo.com") {
        // req.alias = "waitForProduct";
      }
    }
  ).as("waitForProduct");
  cy.visit("/");
  cy.wait("@waitForProduct", { timeout: 3000 });
  cy.get("@waitForProduct.all").then((data) => {
    cy.log(data);
  });
});
