/// <reference types="cypress" />

describe("Scrollbar test", () => {
  it("Lets test horizontal scroll bar using position", () => {
    cy.visit("cypress/horizontalScroll.html");
    cy.contains("a", "Work").should("not.be.visible");
    cy.get(".scrollmenu").scrollTo("topRight");
    cy.contains("a", "Work").should("be.visible");
  });

  it.only("Lets test horizontal scroll bar using co-ordinates", () => {
    cy.visit("cypress/horizontalScroll.html");
    cy.contains("a", "Work").should("not.be.visible");
    // x, y co-ordinates
    cy.get(".scrollmenu").scrollTo("100%", 0);
    cy.contains("a", "Work").should("be.visible");
  });

  it.only("Lets test element is scrollable", () => {
    cy.visit("cypress/horizontalScroll.html");
    cy.contains("a", "Work").should("not.be.visible");
    // x, y co-ordinates. x co-ordinate is for scrolling width and y is for scrolling height
    cy.get(".scrollmenu").scrollTo("100%", 0, { ensureScrollable: true });
    cy.contains("a", "Work").should("be.visible");
  });

  it.only("Lets test horizontal scroll bar using scrollIntoView", () => {
    cy.visit("cypress/horizontalScroll.html");
    cy.contains("a", "Work").should("not.be.visible");
    cy.contains("a", "Work").scrollIntoView().should("be.visible");
  });

  it.only("Lets test window scroll", () => {
    cy.visit("cypress/horizontalScroll.html");
    //cy.contains("button", "Click here").should("not.be.visible");
    cy.scrollTo("bottom");
    cy.contains("button", "Click here").should("be.visible");
  });
});
