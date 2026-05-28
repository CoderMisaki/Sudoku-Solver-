const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf-8');

// Extract isValid function
const startIdx = html.indexOf('function isValid(b, row, col, num) {');
const endIdx = html.indexOf('function isValidStart(b)', startIdx);
const isValidFnString = html.substring(startIdx, endIdx);

eval(isValidFnString);

function createEmptyBoard() {
    return Array.from({ length: 9 }, () => Array(9).fill(0));
}

// Test cases
// 1. Valid placement on empty board
let board = createEmptyBoard();
assert.strictEqual(isValid(board, 0, 0, 5), true, "Should be valid on empty board");

// 2. Invalid due to same row
board = createEmptyBoard();
board[0][8] = 5;
assert.strictEqual(isValid(board, 0, 0, 5), false, "Should be invalid due to same row");

// 3. Invalid due to same column
board = createEmptyBoard();
board[8][0] = 5;
assert.strictEqual(isValid(board, 0, 0, 5), false, "Should be invalid due to same column");

// 4. Invalid due to same 3x3 block
board = createEmptyBoard();
board[1][1] = 5;
assert.strictEqual(isValid(board, 0, 0, 5), false, "Should be invalid due to same 3x3 block");

// 5. Valid placement in populated block but different number
board = createEmptyBoard();
board[1][1] = 4;
board[0][8] = 6;
board[8][0] = 7;
assert.strictEqual(isValid(board, 0, 0, 5), true, "Should be valid if other numbers are present");

console.log("All tests passed!");
