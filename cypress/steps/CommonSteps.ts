import { Given } from "@badeball/cypress-cucumber-preprocessor";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage();
const adminPage = new AdminPage()

Given('the user opens the Login page', () => {
    loginPage.navigate();
});

Given('the user is at {string} page', (page: string) => {
  switch (page) {
    case "Login":
      loginPage.isAt().should('be.visible');
      break;
      case "Admin":
        adminPage.getCurrentUrl().should('contain', "/admin");
        break;
    default:
      throw new Error(`The ${page} is not supported!`);
  }
});
