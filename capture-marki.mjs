import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
  locale: 'ru-RU',
  colorScheme: 'light',
});

await page.goto('https://marki-sng.ru', { waitUntil: 'domcontentloaded', timeout: 90000 });
await page.waitForTimeout(6000);
await page.addStyleTag({
  content:
    '*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.skiptranslate,#WidgetFloaterPanels,[id*="MicrosoftTranslator"]{display:none!important}',
});

for (const [index, scrollTop] of [0, 900, 1800].entries()) {
  await page.evaluate((position) => window.scrollTo(0, position), scrollTop);
  await page.waitForTimeout(1800);
  const path = `public/assets/images/projects/marki-sng-0${index + 1}.png`;
  await page.screenshot({ path, animations: 'disabled' });
  console.log(path, scrollTop);
}

await browser.close();
