import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Core module navigation', () => {
  test('opens the Elements module from the home page', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.openModule('Elements');
    await expect(page).toHaveURL(/\/elements$/);
  });
});