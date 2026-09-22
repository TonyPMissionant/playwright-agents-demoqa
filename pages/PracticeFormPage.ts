import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class PracticeFormPage extends BasePage {
  constructor(page: Page) { super(page); }
  async open(): Promise<void> { await this.visit('/automation-practice-form'); }
  async fillRequired(d: { firstName: string; lastName: string; email: string; mobile: string; address: string }): Promise<void> {
    await this.textbox('First Name').fill(d.firstName); await this.textbox('Last Name').fill(d.lastName); await this.textbox('name@example.com').fill(d.email);
    await this.page.getByText('Male', { exact: true }).click(); await this.textbox('Mobile Number').fill(d.mobile); await this.textbox('Current Address').fill(d.address);
  }
  async submit(): Promise<void> { await this.page.getByRole('button', { name: 'Submit' }).click(); }
}
