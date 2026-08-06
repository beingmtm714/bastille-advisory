// Renders templates/og-card.html to og-main.png at 1200x630.
// Run after any change to the homepage hero: node templates/render-og.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { chromium } from 'playwright';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const dataUri = (file) =>
  `data:font/ttf;base64,${readFileSync(join(here, 'fonts', file)).toString('base64')}`;

const html = readFileSync(join(here, 'og-card.html'), 'utf8')
  .replace('FONT_BEBAS', dataUri('BebasNeue-Regular.ttf'))
  .replace('FONT_BARLOW', dataUri('Barlow-SemiBold.ttf'));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);

const png = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 630 } });
writeFileSync(join(root, 'og-main.png'), png);

await browser.close();
console.log('wrote og-main.png');
