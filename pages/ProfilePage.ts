import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class ProfilePage extends BasePage {
  constructor(page: Page) { super(page); }
  async open(): Promise<void> { await this.visit('/profile'); }
  async logout(): Promise<void> { await this.page.getByRole('button', { name: /log out/i }).click(); }
  book(title: string): Locator { return this.page.getByRole('link', { name: title }); }
}
