import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';

test.describe('Alerts and dialogs', () => {
  test('accepts the immediate alert', async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.open();
    let message = '';
    page.once('dialog', async dialog => { message = dialog.message(); await dialog.accept(); });
    await alerts.button(0).click();
    expect(message.includes('You clicked a button')).toBe(true);
  });

  test('handles confirmation dismissal and prompt input', async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.open();
    page.once('dialog', dialog => dialog.dismiss());
    await alerts.button(2).click();
    page.once('dialog', dialog => dialog.accept('Playwright'));
    await alerts.button(3).click();
    await expect(page).toHaveURL(/\/alerts$/);
  });
});