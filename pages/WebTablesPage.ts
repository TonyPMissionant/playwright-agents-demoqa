import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class WebTablesPage extends BasePage {
  constructor(page: Page) { super(page); }
  async open(): Promise<void> { await this.visit('/webtables'); }
  row(name: string): Locator { return this.page.getByRole('row').filter({ hasText: name }); }
  async add(data: Record<string, string>): Promise<void> {
    await this.page.getByRole('button', { name: 'Add' }).click(); const dialog = this.page.getByRole('dialog');
    for (const [name, value] of Object.entries({ 'First Name': data.firstName, 'Last Name': data.lastName, 'name@example.com': data.email, Age: data.age, Salary: data.salary, Department: data.department })) await dialog.getByRole('textbox', { name }).fill(value);
    await dialog.getByRole('button', { name: 'Submit' }).click();
  }
  async search(value: string): Promise<void> { await this.page.getByPlaceholder('Type to search').fill(value); }
  async delete(name: string): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.row(name).locator('[title="Delete"]').dispatchEvent('click');
  }
}
