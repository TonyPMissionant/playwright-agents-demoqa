import { test, expect } from '@playwright/test';
import { DatePickerPage } from '../pages/DatePickerPage';

test.describe('Widgets - Date Picker', () => {
  test('sets a requested date', async ({ page }) => {
    const picker = new DatePickerPage(page);
    await picker.open();
    await picker.setDate('12/25/2026');
    await expect(picker.dateInput()).toHaveValue('12/25/2026');
  });
});