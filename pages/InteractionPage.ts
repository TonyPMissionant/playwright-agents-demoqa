import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class InteractionPage extends BasePage {
  constructor(page: Page) { super(page); }
  async open(): Promise<void> { await this.visit('/interaction'); }
  async openItem(name: string): Promise<void> {
    const paths: Record<string, string> = { Droppable: '/droppable', Sortable: '/sortable', Selectable: '/selectable', Resizable: '/resizable' };
    const path = paths[name];
    if (!path) throw new Error(`Unsupported interaction page: ${name}`);
    await this.visit(path);
  }
  source(): Locator {
    return this.page.getByRole('tabpanel', { name: 'Simple' }).locator('#draggable');
  }
  target(): Locator {
    return this.page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable');
  }
  async dragSourceToTarget(): Promise<void> {
    const source = await this.source().boundingBox();
    const target = await this.target().boundingBox();
    if (!source || !target) throw new Error('Drag-and-drop controls are not visible');
    await this.page.mouse.move(source.x + source.width / 2, source.y + source.height / 2);
    await this.page.mouse.down();
    await this.page.mouse.move(target.x + target.width / 2, target.y + target.height / 2, { steps: 10 });
    await this.page.mouse.up();
  }
}
