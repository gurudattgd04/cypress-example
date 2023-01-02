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
});
