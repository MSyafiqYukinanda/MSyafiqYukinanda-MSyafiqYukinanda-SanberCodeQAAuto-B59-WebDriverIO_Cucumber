Feature: SauceDemo Login

  Scenario: Successful login with valid credentials
    Given I am on the SauceDemo login page
    When I enter valid credentials
    Then I should see the inventory page
    When I add an item to the cart
    Then I should see the cart with one item
