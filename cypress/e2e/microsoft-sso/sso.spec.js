const { url } = require("inspector");

describe("Authenticate", () => {
  beforeEach(() => {
    cy.visit("https://etexaustralia.e-bate.net");
    cy.intercept({ url: "/api/SSO/SSOSilentLogin", method: "POST" }).as(
      "SSOSilentLogin"
    );
    cy.origin("https://login.microsoftonline.com", () => {
      cy.get('[name="loginfmt"]').type(`helpdesk@e-bate.net`);
      cy.get("[data-report-value='Submit']").click();
      cy.get('[name="passwd"]').type(`TaFV6Dqu6f5U2o`);
      cy.get("[data-report-value='Submit']").click();

      cy.get("#idBtn_Back").click();
      cy.wait("@SSOSilentLogin")
        .its("response")
        .then((response) => {
          cy.log("response is: ", response.body);
          expect(response.statusCode).to.be.equal(200);
        });
    });

    // cy.get('[name="passwd"]').type(`${Cypress.env("password")}{enter}`);
    // cy.get('[type="submit"]').type("{enter}");
  });

  it("Show homepage once logged in", () => {});
});
