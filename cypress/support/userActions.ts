declare namespace Cypress {
  interface Chainable {
    /**
     *
     * @param user - username or id
     * @param password - user password
     */
    login(user: string, password: string): Chainable<Element>;

    /**
     *
     * @param title - takes title for form
     * @param description - takes description for form
     */
    submitForm(title: string, description: string): Chainable<Element>;

    /**
     *
     * @param selector - fill in a locator
     */
    getText(selector: Chainable): Chainable<Element>;

    isVisible(selector: Chainable): Chainable<Element>;
  }
}

Cypress.Commands.add('login', (user, pass) => {
  cy.get('#user').type(user);
  cy.get('#password').type(pass);
  cy.get('#submit').click();
});

Cypress.Commands.add('getText', selector => {
  return selector.invoke('text').then($text => {
    return $text.trim();
  });
});

Cypress.Commands.add('isVisible', selector => {
  return selector.should('be.visible');
});
