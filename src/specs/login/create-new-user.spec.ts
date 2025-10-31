import { faker } from '@faker-js/faker';
import { test } from '../../fixtures/base.fixture';
import { dashboard } from '../../modules/dashboard/labels/dashboard.label';

test.describe.parallel('Create new user', () => {
  test('Create new user via UI', async ({ home }) => {
    const newUser = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      companyName: faker.company.name(),
      industry: 'Distributor',
      email: faker.internet.email(),
      country: '+380',
      phone: `67${faker.string.numeric(7)}`,
      password: process.env.USER_PASSWORD as string,
    };

    await home.loginPage.goto();
    await home.loginPage.clickSignUpButton();
    await home.signUpPage.fillForm(newUser);
    await home.signUpPage.clickSignUp();

    await home.dashboardPage.checkDialogExist();
    await home.dashboardPage.clickStartButton();
    await home.dashboardPage.checkWelcomeDialogExist();
    await home.dashboardPage.clickCloseButton();
    await home.dashboardPage.checkDialogNotExist();
    await home.dashboardPage.checkDashboardTitle(dashboard.title);
  });

  test('Check signUp required fields', async ({ home }) => {
    await home.loginPage.goto();
    await home.loginPage.clickSignUpButton();
    await home.signUpPage.checkSignUpDialogExist();
    await home.signUpPage.clickSignUp();
    await home.signUpPage.required.checkAllRequiredMessages();
  });
});
