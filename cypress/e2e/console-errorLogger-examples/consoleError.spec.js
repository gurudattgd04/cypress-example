it("console error logger", () => {
  cy.visit("https://bstackdemo.com/", {
    onBeforeLoad(win) {
      cy.spy(win.console, "log").as("consoleLog");
    },
  });

  cy.get("@consoleLog")
    .invoke("getCalls")
    .then((data) => {
      console.table(data);
    });
});

Cypress.on("uncaught:exception", (msg) => {
  console.log("uncaught exception msg :", msg);
  return false;
});
