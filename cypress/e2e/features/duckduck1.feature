Feature: My feature 1

    Background: Background name

    @p1 @sbx
    Scenario: visiting the frontpage 1
        When I visit duckduckgo.com
        Then I should see a search bar

    @p2
    Scenario: visiting the title page 1
        When I visit duckduckgo.com
        Then I should see DocukDuckGo title