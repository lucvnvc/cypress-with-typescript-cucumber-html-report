import { When } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

When(
  'the user logins an account by entering a user as {string} and password as {string}',
  (user: string, pass: string) => {
    loginPage.login(user, pass);
  }
);

When('the error {string} is displayed', (error: string) => {
  loginPage.getError().should('contain', error);
});
