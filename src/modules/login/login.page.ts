import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}

    private emailInput = this.page.locator('input[type="email"]');
    private passwordInput = this.page.locator('input[type="password"]');
    private loginButton = this.page.locator('[type="submit"]');

    async goto() {
        await this.page.goto('/auth/sign-in');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async clickSignUpButton() {
        const signUpButton = this.page.locator('[class="__info-button --primary --link"]');
        await signUpButton.click();
    }
}