Feature: Login

    Scenario: Verify the user login fail with an invalid account
        Given the user opens the Login page
        And the user is at "Login" page
        When the user logins an account by entering a user as "admin@yourstore.com" and password as "admin1"
        Then the user is at "Login" page
        And the error "Login was unsuccessful. Please correct the errors and try again." is displayed

    Scenario: Verify the user login success with a valid account
        Given the user opens the Login page
        And the user is at "Login" page
        When the user logins an account by entering a user as "admin@yourstore.com" and password as "admin"
        Then the user is at "Admin" page

    Scenario: Check screenshoot
        Given the user opens the Login page
        And the user is at "Login" page
        When the user logins an account by entering a user as "admin@yourstore.com" and password as "admin1"
        Then the user is at "Login" page
        And the error "Login was unsuccessful. Please correct the errors and try again. 1" is displayed