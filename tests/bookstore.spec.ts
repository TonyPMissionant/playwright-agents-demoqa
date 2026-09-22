import { test, expect } from '@playwright/test';
import { BookStorePage } from '../pages/BookStorePage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Book Store Application', () => {
  test('searches the public book catalog', async ({ page }) => {
    const books = new BookStorePage(page);
    await books.open();
    await books.search('Git Pocket Guide');
    await expect(books.book('Git Pocket Guide')).toBeVisible();
  });

  test('opens registration from the login page', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.openRegistration();
    await expect(page).toHaveURL(/\/register$/);
  });
});