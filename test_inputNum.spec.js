const { test, expect } = require('@playwright/test');
const path = require('path');
const url = require('url');

test.describe('Sudoku inputNum functionality', () => {
  let fileUrl;

  test.beforeAll(() => {
    // Dynamically resolve the absolute path to the local index.html file
    const filePath = path.resolve(__dirname, 'index.html');
    fileUrl = url.pathToFileURL(filePath).href;
  });

  test.beforeEach(async ({ page }) => {
    await page.goto(fileUrl);
    await page.waitForSelector('.sudoku-cell');
  });

  test('Cannot input without selecting a cell', async ({ page }) => {
    await page.evaluate(() => { activeCell = null; selectedRow = -1; selectedCol = -1; });
    await page.keyboard.press('1');
    const statusText = await page.locator('#status').innerText();
    expect(statusText).toMatch(/Ketuk kotak putih dulu!|Tap a white box first!/);
  });

  test('Can input a number into an empty cell', async ({ page }) => {
    const cells = page.locator('.sudoku-cell');
    await cells.nth(0).click();
    await page.keyboard.press('5');
    const text = await cells.nth(0).innerText();
    expect(text).toBe('5');
  });

  test('Can delete a number', async ({ page }) => {
    const cells = page.locator('.sudoku-cell');
    await cells.nth(0).click();

    // Type 5
    await page.keyboard.press('5');

    // Press Backspace
    await page.keyboard.press('Backspace');
    let text = await cells.nth(0).innerText();
    expect(text).toBe('');

    // Type 5 again, then press 0
    await page.keyboard.press('5');
    await page.keyboard.press('0');
    text = await cells.nth(0).innerText();
    expect(text).toBe('');
  });

  test('Rejects invalid numbers', async ({ page }) => {
    const cells = page.locator('.sudoku-cell');
    await cells.nth(0).click();
    await page.keyboard.press('5');

    await cells.nth(1).click();
    await page.keyboard.press('5');
    const text = await cells.nth(1).innerText();
    expect(text).toBe('');

    const classAttr = await cells.nth(1).getAttribute('class');
    expect(classAttr).toContain('error-shake');
  });

  test('Clears solution colors when modifying solved board', async ({ page }) => {
    await page.click('#btn-demo');
    await page.click('#btn-solve');
    await page.waitForTimeout(500);

    const hasSure = await page.locator('.cell-sure').count() > 0;
    const hasGamble = await page.locator('.cell-gamble').count() > 0;
    expect(hasSure || hasGamble).toBeTruthy();

    const cells = page.locator('.sudoku-cell');
    await cells.nth(0).click();
    await page.keyboard.press('Backspace');

    const hasSureAfter = await page.locator('.cell-sure').count() > 0;
    const hasGambleAfter = await page.locator('.cell-gamble').count() > 0;
    expect(hasSureAfter || hasGambleAfter).toBeFalsy();
  });

  test('Fills board completely and shows status Board Full', async ({ page }) => {
    const cells = page.locator('.sudoku-cell');

    await page.evaluate(() => {
      for (let r=0; r<9; r++) {
          for (let c=0; c<9; c++) {
              board[r][c] = 1; // dummy fill
          }
      }
      board[0][0] = 0; // leave one empty
    });

    await cells.nth(0).click();
    await page.keyboard.press('2');

    await page.waitForTimeout(100);

    const statusText = await page.locator('#status').innerText();
    expect(statusText).toMatch(/Papan terisi penuh! 🎉|Board is full! 🎉/);
  });
});
