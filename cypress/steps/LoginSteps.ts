import { When } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../page-objects/LoginPage';

When(
  'the user logins an account by entering a user as {string} and password as {string}',
  (user: string, pass: string) => {
    loginPage.login(user, pass);
  }
);

When('the error {string} is displayed', (error: string) => {
  loginPage.elements.lbError().should('contain', error);
});
