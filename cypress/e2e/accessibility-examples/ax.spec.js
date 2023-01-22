function terminalLog(violations) {
  cy.task(
    "log",
    `${violations.length} accessibility violation${
      violations.length === 1 ? "" : "s"
    } ${violations.length === 1 ? "was" : "were"} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  );

  cy.task("table", violationData);
}

it(["axe"], "Lets test accessibility", () => {
  cy.visit("https://tenant2.tst.e-bate.net/login");
  cy.injectAxe();
  cy.configureAxe({
    branding: {
      brand: "Swag Labs",
      application: "Swag Labs Demo App",
    },
    reporter: "v2",
    iframes: true,
  });
  cy.checkA11y(null, null, terminalLog);
});
