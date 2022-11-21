Feature: duckduckgo.com

    @p1
    Scenario: visiting the frontpage
        When I visit duckduckgo.com
        Then I should see a search bar

    @p2
    Scenario: visiting the frontpage
        When I visit duckduckgo.com
        Then I should see DocukDuckGo title