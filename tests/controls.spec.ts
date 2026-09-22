import { test, expect } from '@playwright/test';

test.describe('Elements controls', () => {
  test('selects an enabled radio option', async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button');
    await page.getByText('Yes', { exact: true }).click();
    await expect(page.locator('.text-success')).toHaveText('Yes');
  });

  test('performs double-click and right-click button actions', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
    await expect(page.locator('#doubleClickMessage')).toBeVisible();
    await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
    await expect(page.locator('#rightClickMessage')).toBeVisible();
  });
});