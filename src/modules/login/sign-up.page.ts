import { expect, Page } from '@playwright/test';
import { RequiredComponent } from './components/required.component';

export class SignUpPage {
  readonly page: Page;
  readonly required: RequiredComponent;

  constructor(page: Page) {
    this.page = page;
    this.required = new RequiredComponent(page);
  }
  public async fillForm(data: {
    firstName: string;
    lastName: string;
    companyName: string;
    industry: string;
    email: string;
    country: string;
    phone: string;
    password: string;
  }) {
    await this.fillFirstName(data.firstName);
    await this.fillLastName(data.lastName);
    await this.fillCompanyName(data.companyName);
    await this.selectIndustry(data.industry);
    await this.fillEmail(data.email);
    await this.selectCountry(data.country);
    await this.fillPhone(data.phone);
    await this.fillPassword(data.password);
  }

  public async clickSignUp() {
    await this.page.click('button:has-text("Sign Up")');
  }

  public async checkSignUpDialogExist() {
    const dialog = this.page.locator('[class="__form"] [fxlayoutalign="center"]');
    await expect(dialog).toBeVisible();
  }

  private async fillFirstName(firstName: string) {
    await this.page.fill('[formcontrolname="firstName"] input', firstName);
  }

  private async fillLastName(lastName: string) {
    await this.page.fill('[formcontrolname="lastName"] input', lastName);
  }

  private async fillCompanyName(companyName: string) {
    await this.page.fill('[formcontrolname="companyName"] input', companyName);
  }

  private async selectIndustry(industry: string) {
    await this.page.click('[formcontrolname="industry"]');
    const option = this.page.locator(`text=${industry}`);
    await option.click();
  }

  private async fillEmail(email: string) {
    await this.page.fill('[formcontrolname="email"] input', email);
  }

  private async selectCountry(country: string) {
    await this.page.click('[formcontrolname="phone"] [class="ng-select-container"]');
    const option = this.page.locator(`text=${country}`);
    await option.click();
  }

  private async fillPhone(phone: string) {
    await this.page.fill(
      '[fxlayoutalign="start start"] [class="__input ng-untouched ng-pristine ng-valid"]',
      phone,
    );
  }

  private async fillPassword(password: string) {
    await this.page.fill('[formcontrolname="password"] input', password);
  }
}
