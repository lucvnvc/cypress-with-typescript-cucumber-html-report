class LoginPage {
  elements = {
    inputUser: () => cy.get("#Email"),
    inputPass: () => cy.get("#Password"),
    btnLogin: () => cy.get("button[class*='login-button']"),
    lbError: () => cy.get("div[class*='message-error']"),
    btnLogout: () => cy.get("#books-wrapper > .text-right > #submit"),
  };

  navigate() {
    cy.visit('/login');
  }

  isAt() {
    return this.elements.btnLogin();
  }

  setUser(user: string) {
    this.elements.inputUser()
    .clear()
    .type(user);
  }

  setPass(pass: string) {
    this.elements.inputPass()
    .clear()
    .type(pass);
  }

  clickOnLogin() {
    this.elements.btnLogin().click();
  }

  login(user: string, pass: string) {
    this.setUser(user);
    this.setPass(pass);
    this.clickOnLogin();
  }

  getError() {
    return this.elements.lbError();
  }
}

export default LoginPage;
