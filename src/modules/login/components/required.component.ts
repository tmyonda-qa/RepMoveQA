import { expect, Page } from '@playwright/test';

export class RequiredComponent {
    constructor(private page: Page) {}

    private firstNameError = this.page.locator('text=The First Name is required');
    private lastNameError = this.page.locator('text=The Last Name is required');
    private companyError = this.page.locator('text=The Company Name is required');
    private industryError = this.page.locator('text=Please, select the industry');
    private emailError = this.page.locator('text=Please, enter your email address');
    private phoneError = this.page.locator('text=The Phone is required');
    private passwordError = this.page.locator('text=The Password is required');

    async checkFirstNameRequired() {
        await expect(this.firstNameError).toBeVisible();
    }

    async checkLastNameRequired() {
        await expect(this.lastNameError).toBeVisible();
    }

    async checkCompanyRequired() {
        await expect(this.companyError).toBeVisible();
    }

    async checkIndustryRequired() {
        await expect(this.industryError).toBeVisible();
    }

    async checkEmailRequired() {
        await expect(this.emailError).toBeVisible();
    }

    async checkPhoneRequired() {
        await expect(this.phoneError).toBeVisible();
    }

    async checkPasswordRequired() {
        await expect(this.passwordError).toBeVisible();
    }

    async checkAllRequiredMessages() {
        await expect(this.firstNameError).toBeVisible();
        await expect(this.lastNameError).toBeVisible();
        await expect(this.companyError).toBeVisible();
        await expect(this.industryError).toBeVisible();
        await expect(this.emailError).toBeVisible();
        await expect(this.phoneError).toBeVisible();
        await expect(this.passwordError).toBeVisible();
    }
}