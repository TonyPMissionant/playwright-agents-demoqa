import { type Locator, type Page } from '@playwright/test';
export abstract class BasePage {
  protected constructor(protected readonly page: Page) {}
  protected async visit(path: string): Promise<void> { await this.page.goto(`https://demoqa.com${path}`); }
  protected textbox(name: string): Locator { return this.page.getByRole('textbox', { name }); }
}
