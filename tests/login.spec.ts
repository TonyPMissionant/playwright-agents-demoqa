import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Book Store login', () => {
  test('rejects invalid credentials without leaving login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login('invalid-user', 'invalid-password');
    await expect(page).toHaveURL(/\/login$/);
  });
});