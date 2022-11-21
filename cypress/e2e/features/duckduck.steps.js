import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  cy.get("#searchbox_input").should(
    "have.attr",
    "placeholder",
    "Search without being tracked"
  );
});

Then("I should see DocukDuckGo title", () => {
  cy.get(".header_headerContent__hDivV a").eq(1).should("be.visible");
});
