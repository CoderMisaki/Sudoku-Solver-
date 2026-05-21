const { test, expect } = require('@playwright/test');
const path = require('path');

const filePath = `file://${path.resolve(__dirname, '../index.html')}`;

test.describe('isValidStart', () => {
    test('should validate a valid empty board', async ({ page }) => {
        await page.goto(filePath);
        const isValid = await page.evaluate(() => {
            const emptyBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
            return isValidStart(emptyBoard);
        });
        expect(isValid).toBe(true);
    });

    test('should validate a valid board with some numbers', async ({ page }) => {
        await page.goto(filePath);
        const isValid = await page.evaluate(() => {
            const board = Array.from({ length: 9 }, () => Array(9).fill(0));
            board[0][0] = 5;
            board[0][1] = 3;
            board[1][0] = 6;
            board[1][2] = 9;
            return isValidStart(board);
        });
        expect(isValid).toBe(true);
    });

    test('should invalidate a board with duplicate numbers in a row', async ({ page }) => {
        await page.goto(filePath);
        const isValid = await page.evaluate(() => {
            const board = Array.from({ length: 9 }, () => Array(9).fill(0));
            board[0][0] = 5;
            board[0][1] = 5;
            return isValidStart(board);
        });
        expect(isValid).toBe(false);
    });

    test('should invalidate a board with duplicate numbers in a column', async ({ page }) => {
        await page.goto(filePath);
        const isValid = await page.evaluate(() => {
            const board = Array.from({ length: 9 }, () => Array(9).fill(0));
            board[0][0] = 5;
            board[1][0] = 5;
            return isValidStart(board);
        });
        expect(isValid).toBe(false);
    });

    test('should invalidate a board with duplicate numbers in a 3x3 block', async ({ page }) => {
        await page.goto(filePath);
        const isValid = await page.evaluate(() => {
            const board = Array.from({ length: 9 }, () => Array(9).fill(0));
            board[0][0] = 5;
            board[1][1] = 5;
            return isValidStart(board);
        });
        expect(isValid).toBe(false);
    });
});
