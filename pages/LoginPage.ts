import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) { super(page); }
  async open(): Promise<void> { await this.visit('/login'); }
  async login(username: string, password: string): Promise<void> {
    await this.textbox('UserName').fill(username);
    await this.textbox('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
  async openRegistration(): Promise<void> {
    await this.page.getByRole('button', { name: 'New User' }).click();
  }
}
