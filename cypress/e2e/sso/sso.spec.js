describe("SSO scenarios", () => {
  it("SSO test", () => {
    cy.visit("https://onedrive.live.com/about/en-gb/signin/");
    cy.get(".SignIn").then((iframe) => {
      const body = iframe.contents().find("body");
      cy.wrap(body)
        .as("iframe")
        .find("[type='email']")
        .type("blah@gmail.com", { force: true });
      cy.get("@iframe").find("[value='Next']").click();
      cy.origin("https://www.microsoft.com/", () => {
        cy.visit("/");
        cy.get("[name='passwd']").type("blah", { force: true });
        cy.get("#idSIButton9").click();
      });
    });

    // cy.get("[type='email']").type("aryandutt04@gmail.com", { force: true });
    // cy.get("[value='Next']").click();
  });
  it.only("sso test 1", () => {
    cy.origin("https://login.microsoftonline.com", () => {
      cy.visit("/");
      cy.get(".SignIn").then((iframe) => {
        const body = iframe.contents().find("body");
        cy.wrap(body)
          .as("iframe")
          .find("[type='email']")
          .type("aryandutt04@gmail.com", { force: true });
        cy.get("@iframe").find("[value='Next']").click();

        cy.get("[name='passwd']").type("gurudatt@26", { force: true });
        cy.get("#idSIButton9").click();
      });
    });
  });

  it("lamdaTest SSO", () => {
    cy.visit("https://www.lambdatest.com/");
    cy.get("[href='https://accounts.lambdatest.com/login']").click();
    cy.get("[href='/login/github/v1?disableSignup=1']").click();
    cy.origin("https://github.com/", () => {
      cy.get("[name='login']").type("blah");
    });
  });
});
