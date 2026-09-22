import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class HomePage extends BasePage {
  constructor(page: Page) { super(page); }
  async open(): Promise<void> { await this.visit('/'); }
  async openModule(name: string): Promise<void> { await this.page.getByRole('link', { name, exact: true }).click(); }
}
