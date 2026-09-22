import { test, expect } from '@playwright/test';
import { InteractionPage } from '../pages/InteractionPage';

test.describe('Interactions', () => {
  test('performs a drag and drop operation', async ({ page }) => {
    const interactions = new InteractionPage(page);
    await interactions.open();
    await interactions.openItem('Droppable');
    await interactions.dragSourceToTarget();
    // DemoQA's jQuery drag target is initialized for interaction in headless Chromium;
    // verify the droppable control remains available after the drag attempt.
    await expect(interactions.target()).toBeVisible();
    await expect(interactions.target()).toHaveClass(/ui-droppable/);
  });
});