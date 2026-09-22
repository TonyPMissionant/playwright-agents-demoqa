import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class AlertsPage extends BasePage {
  constructor(page: Page) { super(page); }
  async open(): Promise<void> { await this.visit('/alerts'); }
  button(index: number): Locator { return this.page.getByRole('button', { name: 'Click me' }).nth(index); }
}
