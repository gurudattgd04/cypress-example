Feature:  My feature 3

    @p12
    Scenario: visiting the frontpage
        When I visit duckduckgo.com
        Then I should see a search bar

    @p22
    Scenario: visiting the title page
        When I visit duckduckgo.com
        Then I should see DocukDuckGo title

    Scenario Outline: visiting the title page outline
        When I visit duckduckgo.com
        Then I should see DocukDuckGo title