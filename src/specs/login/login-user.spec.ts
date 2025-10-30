import { test } from '../../fixtures/base.fixture';
import { UserFixture} from "../../fixtures/user.fixture";
import {SignUpApi} from "../../services/create-user.service";
import {dashboard} from "../../modules/dashboard/labels/dashboard.label";


test.describe.parallel('Login user', () => {
    test('Login to a non-existent user', async ({ home }) => {
        await home.loginPage.goto();
        await home.loginPage.login('notexistent@gmail.com', 'Qwerty123');
        await home.loginPage.checkLoginError();
    });
    test('Create user via API and login via UI', async ({ page, home }) => {
        const newUser = UserFixture.data();
        const signUpApi = new SignUpApi();
        await signUpApi.createUser(newUser);

        await home.loginPage.goto();
        await home.loginPage.login(newUser);
        // Check dashboard
        await home.dashboardPage.checkDashboardTitle(dashboard.title);
    });
});