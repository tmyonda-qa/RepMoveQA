import { Page, expect } from '@playwright/test';

export class DashboardPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async checkDialogExist() {
    const locator = this.page.locator('.modal-content');
    await expect(locator).toBeVisible();
  }

  public async clickStartButton() {
    const startButton = this.page.locator('[buttontype="submit"]');
    await startButton.click();
  }

  public async checkDialogNotExist() {
    const locator = this.page.locator('.modal-content');
    await expect(locator).toBeHidden({ timeout: 5000 });
  }

  public async checkDashboardTitle(text: string) {
    const locator = this.page.locator('[class="__list"]');
    await expect(locator).toBeVisible();
  }

  public async checkWelcomeDialogExist() {
    const locator = this.page.locator(
      '[class="modal-dialog rmv-modal-auto-width"] [class="rmv-heading-1 __title"]',
    );
    await expect(locator).toBeVisible();
  }

  public async clickCloseButton() {
    const closeButton = this.page.locator(
      '[class="modal-dialog rmv-modal-auto-width"] [type="button"]',
    );
    await closeButton.click();
  }
}
