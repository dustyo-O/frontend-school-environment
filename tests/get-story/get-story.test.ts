import { expect } from '@playwright/test';

import { test } from '../playwright';

test('get story', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  const tagSelect = page.locator('.select-quote-tags:has-text("Choose topic...")');
  const firstOption = tagSelect.locator('option').nth(1);

  const value = await firstOption.getAttribute('value');

  await expect(tagSelect).toBeVisible();

  await tagSelect.selectOption(value);

  const colorSelect = page.locator('.select-color');
  const firstColorOption = colorSelect.locator('option').nth(1);

  await expect(colorSelect).toBeVisible();

  const colorValue = await firstColorOption.getAttribute('value');

  await colorSelect.selectOption(colorValue);

  const pageQuote = page.locator('.page__quote');

  await expect(tagSelect).toBeHidden();
  await expect(colorSelect).toBeHidden();
  await expect(pageQuote).toBeVisible();
  await expect(pageQuote).toHaveText('First-rate people hire first-rate people; second-rate people hire third-rate people.');

  // await page.waitForTimeout(5000);
  await expect(pageQuote).toHaveScreenshot('quote.png');
  await expect(page).toHaveScreenshot('page.png');
});
