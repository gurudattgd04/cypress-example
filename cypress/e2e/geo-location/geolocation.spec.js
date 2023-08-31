describe("Geolocation tests", () => {
  it.skip("Geolocation testing newyork", () => {
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

  it.only("test Geo Location", () => {
    const latitude = 51.507351;
    const longitude = -0.127758;
    cy.visit("cypress/e2e/geo-location/index.html", {
      onBeforeLoad({ navigator }) {
        cy.stub(navigator.geolocation, "getCurrentPosition").callsArgWith(0, {
          coords: { latitude, longitude },
        });
      },
    });
    cy.contains("button", "Click me").click();
    cy.contains(
      `Your current location is (Latitude: ${latitude}, Longitude: ${longitude})`
    );
  });
});
