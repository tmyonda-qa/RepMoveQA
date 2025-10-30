import { Page } from "@playwright/test";
import {LoginPage} from "../modules/login/login.page";
import {DashboardPage} from "../modules/dashboard/dashboard.page";
import {SignUpPage} from "../modules/login/sign-up.page";

export class Home {
    readonly page: Page;
    readonly loginPage: LoginPage;
    readonly dashboardPage: DashboardPage;
    readonly signUpPage: SignUpPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.signUpPage = new SignUpPage(page);
        this.dashboardPage = new DashboardPage(page);
    }
}