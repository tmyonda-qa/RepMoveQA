import { expect, Page } from '@playwright/test';
import { UserData } from '../../fixtures/user.fixture';

export class LoginPage {
  constructor(private page: Page) {}

  private emailInput = this.page.locator('input[type="email"]');
  private passwordInput = this.page.locator('input[type="password"]');
  private loginButton = this.page.locator('[type="submit"]');
  private errorText = this.page.locator('[id="toast-container"]');

  public async goto() {
    await this.page.goto('/auth/sign-in');
  }

  public async login({ email, password }: Partial<UserData>) {
    if (email) {
      await this.emailInput.fill(email);
    }
    if (password) {
      await this.passwordInput.fill(password);
    }
    await this.loginButton.click();
  }

  public async clickSignUpButton() {
    const signUpButton = this.page.locator('[class="__info-button --primary --link"]');
    await signUpButton.click();
  }

  public async checkLoginError() {
    await expect(this.errorText).toHaveText('Invalid to login');
  }
}
