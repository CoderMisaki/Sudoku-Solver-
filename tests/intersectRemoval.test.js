const test = require('node:test');
const assert = require('node:assert');

// -------------------------------------------------------------------------
// Function to be tested (duplicated from index.html)
// -------------------------------------------------------------------------
function intersectRemoval(cands) {
    let reduced = false;
    for(let br=0; br<3; br++) for(let bc=0; bc<3; bc++) {
        let bCells = [];
        for(let i=0; i<3; i++) for(let j=0; j<3; j++) bCells.push({r:br*3+i, c:bc*3+j});
        for(let v=1; v<=9; v++) {
            let hasV = bCells.filter(cell => cands[cell.r][cell.c].has(v));
            if(hasV.length > 1) {
                if(hasV.every(cell => cell.r === hasV[0].r)) {
                    let row = hasV[0].r;
                    for(let col=0; col<9; col++) if(Math.floor(col/3) !== bc && cands[row][col].has(v)) { cands[row][col].delete(v); reduced=true; }
                }
                if(hasV.every(cell => cell.c === hasV[0].c)) {
                    let col = hasV[0].c;
                    for(let row=0; row<9; row++) if(Math.floor(row/3) !== br && cands[row][col].has(v)) { cands[row][col].delete(v); reduced=true; }
                }
            }
        }
    }
    return reduced ? "Pointing/Box-Line" : null;
}

// -------------------------------------------------------------------------
// Test Setup
// -------------------------------------------------------------------------
function createEmptyCands() {
    return Array(9).fill().map(() => Array(9).fill().map(() => new Set()));
}

// -------------------------------------------------------------------------
// Tests
// -------------------------------------------------------------------------

test('intersectRemoval - Pointing Row (Box to Line)', () => {
    let cands = createEmptyCands();

    // Setup a pointing row scenario in box 0,0 (rows 0-2, cols 0-2)
    // Value 5 is only possible in row 0 within this box
    cands[0][0].add(5);
    cands[0][1].add(5);
    // Value 5 shouldn't be in other cells in this box
    cands[1][0].add(1); cands[1][1].add(1);

    // In other boxes on the same row, 5 should be removed
    cands[0][4].add(5); // This should be removed
    cands[0][5].add(5); // This should be removed

    let result = intersectRemoval(cands);

    assert.strictEqual(result, "Pointing/Box-Line");
    assert.strictEqual(cands[0][4].has(5), false);
    assert.strictEqual(cands[0][5].has(5), false);
    assert.strictEqual(cands[0][0].has(5), true); // shouldn't be removed
});

test('intersectRemoval - Pointing Col (Box to Line)', () => {
    let cands = createEmptyCands();

    // Setup a pointing col scenario in box 0,0 (rows 0-2, cols 0-2)
    // Value 5 is only possible in col 1 within this box
    cands[0][1].add(5);
    cands[1][1].add(5);
    // Value 5 shouldn't be in other cells in this box
    cands[0][2].add(1); cands[1][2].add(1);

    // In other boxes on the same col, 5 should be removed
    cands[4][1].add(5); // This should be removed
    cands[5][1].add(5); // This should be removed

    let result = intersectRemoval(cands);

    assert.strictEqual(result, "Pointing/Box-Line");
    assert.strictEqual(cands[4][1].has(5), false);
    assert.strictEqual(cands[5][1].has(5), false);
    assert.strictEqual(cands[0][1].has(5), true); // shouldn't be removed
});

test('intersectRemoval - No Reduction', () => {
    let cands = createEmptyCands();

    // No pointing pairs
    cands[0][0].add(5);
    cands[1][1].add(5); // different row and col

    let result = intersectRemoval(cands);

    assert.strictEqual(result, null);
});
