const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Extract just the xWing function from index.html
const xWingMatch = html.match(/function xWing\(cands\) \{[\s\S]*?return reduced \? "X-Wing" : null;\n\s*\}/);

if (!xWingMatch) {
    throw new Error("Could not find xWing function in index.html");
}

// Evaluate the xWing function so it's available in this scope
eval(xWingMatch[0]);

function createEmptyCands() {
    const cands = [];
    for(let r=0; r<9; r++) {
        let row = [];
        for(let c=0; c<9; c++) {
            row.push(new Set());
        }
        cands.push(row);
    }
    return cands;
}

test('xWing strategy solver function', async (t) => {

    await t.test('Successfully finds an X-Wing on rows and removes candidates', () => {
        let cands = createEmptyCands();
        let v = 5;

        // Set up the X-Wing pattern for value 5 on rows 2 and 6, columns 3 and 7.
        // These rows have value 5 *only* at columns 3 and 7.
        cands[2][3].add(v);
        cands[2][7].add(v);
        cands[6][3].add(v);
        cands[6][7].add(v);

        // Add extra candidates in the cross columns (3 and 7) that should be eliminated
        cands[1][3].add(v);
        cands[8][3].add(v);
        cands[4][7].add(v);

        // Add a candidate in a different column/row just to ensure it's not touched
        cands[8][8].add(v);

        let result = xWing(cands);

        assert.strictEqual(result, "X-Wing", "Should return 'X-Wing' when candidates are reduced");

        // Check that extra candidates were removed
        assert.strictEqual(cands[1][3].has(v), false, "Candidate at (1,3) should be removed");
        assert.strictEqual(cands[8][3].has(v), false, "Candidate at (8,3) should be removed");
        assert.strictEqual(cands[4][7].has(v), false, "Candidate at (4,7) should be removed");

        // Check that base candidates of the X-Wing are intact
        assert.strictEqual(cands[2][3].has(v), true, "Base candidate at (2,3) should remain");
        assert.strictEqual(cands[2][7].has(v), true, "Base candidate at (2,7) should remain");
        assert.strictEqual(cands[6][3].has(v), true, "Base candidate at (6,3) should remain");
        assert.strictEqual(cands[6][7].has(v), true, "Base candidate at (6,7) should remain");

        // Unrelated candidate should be intact
        assert.strictEqual(cands[8][8].has(v), true, "Unrelated candidate at (8,8) should remain");
    });

    await t.test('Returns null when the board has no candidates', () => {
        let cands = createEmptyCands();
        let result = xWing(cands);
        assert.strictEqual(result, null, "Should return null for an empty board");
    });

    await t.test('Returns null when X-Wing pattern exists but no candidates are reduced', () => {
        let cands = createEmptyCands();
        let v = 5;

        // Set up the X-Wing pattern for value 5 on rows 2 and 6, columns 3 and 7.
        cands[2][3].add(v);
        cands[2][7].add(v);
        cands[6][3].add(v);
        cands[6][7].add(v);

        // But do not add any extra candidates in columns 3 and 7.
        // Therefore, there is nothing to reduce.

        let result = xWing(cands);

        assert.strictEqual(result, null, "Should return null since no candidates were deleted");

        // Base candidates of the X-Wing must still be intact
        assert.strictEqual(cands[2][3].has(v), true, "Base candidate at (2,3) should remain");
        assert.strictEqual(cands[2][7].has(v), true, "Base candidate at (2,7) should remain");
        assert.strictEqual(cands[6][3].has(v), true, "Base candidate at (6,3) should remain");
        assert.strictEqual(cands[6][7].has(v), true, "Base candidate at (6,7) should remain");
    });
});
