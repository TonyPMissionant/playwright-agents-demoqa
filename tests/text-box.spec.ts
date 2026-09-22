import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';

test.describe('Elements - Text Box', () => {
  test('submits valid details and displays each value', async ({ page }) => {
    const textBox = new TextBoxPage(page);
    await textBox.open();
    await textBox.submit({ name: 'Ava Tester', email: 'ava.tester@example.com', currentAddress: '1 Main Street', permanentAddress: '2 Oak Avenue' });
    await expect(textBox.output()).toContainText('Ava Tester');
    await expect(textBox.output()).toContainText('ava.tester@example.com');
    await expect(textBox.output()).toContainText('1 Main Street');
    await expect(textBox.output()).toContainText('2 Oak Avenue');
  });
});