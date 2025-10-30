import {expect, Page} from "@playwright/test";
import {UserData} from "../../fixtures/user.fixture";

export class LoginPage {
    constructor(private page: Page) {}

    private emailInput = this.page.locator('input[type="email"]');
    private passwordInput = this.page.locator('input[type="password"]');
    private loginButton = this.page.locator('[type="submit"]');
    private errorText = this.page.locator('[id="toast-container"]');

    async goto() {
        await this.page.goto('/auth/sign-in');
    }

    async login(emailOrUser: string | UserData, password?: string) {
        let email: string;
        let pass: string;

        if (typeof emailOrUser === 'string') {
            email = emailOrUser;
            pass = password!;
        } else {
            email = emailOrUser.email;
            pass = emailOrUser.password;
        }

        await this.emailInput.fill(email);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

    async clickSignUpButton() {
        const signUpButton = this.page.locator('[class="__info-button --primary --link"]');
        await signUpButton.click();
    }

    async checkLoginError() {
        await expect(this.errorText).toHaveText('Invalid to login');
    }
}