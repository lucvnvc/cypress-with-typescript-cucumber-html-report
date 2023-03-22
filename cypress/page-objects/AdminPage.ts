class AdminPage {
  elements = {};

  getCurrentUrl() {
    return cy.url();
  }
}

export default new AdminPage();
