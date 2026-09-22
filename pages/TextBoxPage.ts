import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class TextBoxPage extends BasePage {
  constructor(page: Page) { super(page); }
  async open(): Promise<void> { await this.visit('/text-box'); }
  async submit(data: { name: string; email: string; currentAddress: string; permanentAddress: string }): Promise<void> {
    await this.textbox('Full Name').fill(data.name); await this.textbox('name@example.com').fill(data.email);
    await this.textbox('Current Address').fill(data.currentAddress); await this.page.locator('#permanentAddress').fill(data.permanentAddress);
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
  output(): Locator { return this.page.locator('#output'); }
}
