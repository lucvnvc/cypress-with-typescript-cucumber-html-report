import { Given } from '@badeball/cypress-cucumber-preprocessor';
import adminPage from '../page-objects/AdminPage';
import loginPage from '../page-objects/LoginPage';

Given('the user opens the Login page', () => {
  loginPage.navigate();
});

Given('the user is at {string} page', (page: string) => {
  switch (page) {
    case 'Login':
      loginPage.elements.btnLogin().should('be.visible');
      break;
    case 'Admin':
      adminPage.getCurrentUrl().should('contain', '/admin');
      break;
    default:
      throw new Error(`The ${page} is not supported!`);
  }
});
