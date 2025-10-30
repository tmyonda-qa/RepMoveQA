import { test } from '../../fixtures/base.fixture';


test.describe.parallel('Login user', () => {
test('login test', async ({ home }) => {
    await home.loginPage.goto();
    await home.loginPage.login('pmtest@gmail.com', 'Qwerty123');

    // Check dashboard
    await home.dashboardPage.checkDashboardTitle('Dashboard');

});
});