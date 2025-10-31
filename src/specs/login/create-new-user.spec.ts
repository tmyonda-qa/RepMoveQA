/**
 * Description:
 * Test 1 verifies user creation via UI and by checking the title on the dashboard.
 * Test 2 checks the required fields on the signUp page.
 */
import { test } from '../../fixtures/base.fixture';
import { dashboard } from '../../modules/dashboard/labels/dashboard.label';
import { UserFixture } from '../../fixtures/user.fixture';

test.describe.parallel('Create new user', () => {
  test('Create new user via UI', async ({ home }) => {
    const newUser = UserFixture.data();

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
