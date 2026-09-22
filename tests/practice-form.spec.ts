import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../pages/PracticeFormPage';

test.describe('Forms - Practice Form', () => {
  test('submits a valid student registration', async ({ page }) => {
    const form = new PracticeFormPage(page);
    await form.open();
    await form.fillRequired({ firstName: 'Ava', lastName: 'Tester', email: 'ava@example.com', mobile: '1234567890', address: '1 Main Street' });
    await form.submit();
    await expect(page.getByRole('dialog')).toContainText('Ava');
    await expect(page.getByRole('dialog')).toContainText('1234567890');
  });
});