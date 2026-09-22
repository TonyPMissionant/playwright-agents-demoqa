import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class BookStorePage extends BasePage {
  constructor(page: Page) { super(page); }
  async open(): Promise<void> { await this.visit('/books'); }
  async search(value: string): Promise<void> { await this.page.getByPlaceholder('Type to search').fill(value); }
  book(title: string): Locator { return this.page.getByRole('link', { name: title }); }
}
