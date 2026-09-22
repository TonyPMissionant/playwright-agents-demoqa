import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class RegisterPage extends BasePage {
  constructor(page: Page) { super(page); }
  async fill(d: { firstName: string; lastName: string; username: string; password: string }): Promise<void> {
    await this.textbox('First Name').fill(d.firstName); await this.textbox('Last Name').fill(d.lastName); await this.textbox('UserName').fill(d.username); await this.textbox('Password').fill(d.password);
  }
  async submit(): Promise<void> { await this.page.getByRole('button', { name: 'Register' }).click(); }
}
