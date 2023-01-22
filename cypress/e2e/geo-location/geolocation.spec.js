describe("Geolocation tests", () => {
  it("Geolocation testing newyork", () => {
    cy.visit("https://locations.dennys.com/search.html/", {
      onBeforeLoad({ navigator }) {
        const latitude = 43.0;
        const longitude = -75.0;
        cy.stub(navigator.geolocation, "getCurrentPosition").callsArgWith(0, {
          coords: { latitude, longitude },
        });
      },
    });
    cy.contains(" 701 MOHAWK ST");
  });

  it("Geolocation testing california", () => {
    cy.visit("https://locations.dennys.com/search.html/", {
      onBeforeLoad({ navigator }) {
        const latitude = 36.7783;
        const longitude = -119.417931;
        cy.stub(navigator.geolocation, "getCurrentPosition").callsArgWith(0, {
          coords: { latitude, longitude },
        });
      },
    });
    cy.contains(" 536 ACADEMY AVENUE");
  });

  it("Geolocation testing california using lambdatest playground", () => {
    cy.intercept(
      {
        url: "https://geolocation-db.com/json/",
        method: "GET",
      },
      {
        statusCode: 200,
        body: {
          country_code: "US",
          country_name: "United States",
          city: "newyork",
          postal: "10001",
          latitude: 40.73061,
          longitude: -73.935242,
          IPv4: "100.1.245.30",
          state: "New York",
        },
      }
    ).as("wait");
    cy.visit(
      "https://www.lambdatest.com/selenium-playground/geolocation-testing"
    );
    cy.wait("@wait");
    cy.contains("p", "United States");
  });
});
