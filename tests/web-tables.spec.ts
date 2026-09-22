import { test, expect } from '@playwright/test';
import { WebTablesPage } from '../pages/WebTablesPage';

test.describe('Elements - Web Tables', () => {
  test('creates, searches, and deletes a record', async ({ page }) => {
    const tables = new WebTablesPage(page);
    const firstName = `Test${Date.now()}`;
    await tables.open();
    await tables.add({ firstName, lastName: 'User', email: `${firstName.toLowerCase()}@example.com`, age: '30', salary: '50000', department: 'QA' });
    await tables.search(firstName);
    await expect(tables.row(firstName)).toBeVisible();
    await tables.delete(firstName);
    await expect(tables.row(firstName)).toHaveCount(0);
  });
});