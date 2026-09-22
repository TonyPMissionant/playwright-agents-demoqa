import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class DatePickerPage extends BasePage {
  constructor(page: Page) { super(page); }
  async open(): Promise<void> { await this.visit('/date-picker'); }
  dateInput(): Locator { return this.page.locator('#datePickerMonthYearInput'); }
  async setDate(value: string): Promise<void> { await this.dateInput().fill(value); await this.dateInput().press('Enter'); }
}
