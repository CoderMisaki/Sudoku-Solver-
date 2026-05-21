const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

// Match the specific pattern of the doNakedSingle function to be completely independent of surrounding functions
const match = html.match(/function\s+doNakedSingle[^{]*\{([\s\S]*?)return\s+null;\s*\}/);

if (!match) {
    console.error("Could not find doNakedSingle in index.html");
    process.exit(1);
}

// Evaluate function by returning it from a closure
const getDoNakedSingle = new Function(`
    ${match[0]}
    return doNakedSingle;
`);
const doNakedSingle = getDoNakedSingle();

// Mock data structures
function createEmptyBoard() {
    return Array(9).fill(0).map(() => Array(9).fill(0));
}

function createCandidates() {
    return Array(9).fill(0).map(() => Array(9).fill(0).map(() => new Set([1,2,3,4,5,6,7,8,9])));
}

// Test Suite
console.log("Running tests for doNakedSingle...");

try {
    let b = createEmptyBoard();
    let c = createCandidates();
    assert.deepStrictEqual(doNakedSingle(b, c), null, "Empty board should return null");

    b = createEmptyBoard();
    c = createCandidates();
    c[0][0] = new Set([5]);
    assert.deepStrictEqual(doNakedSingle(b, c), { r: 0, c: 0, val: 5, strat: 'Naked Single' });

    b = createEmptyBoard();
    c = createCandidates();
    b[1][1] = 7;
    c[1][1] = new Set([7]);
    assert.deepStrictEqual(doNakedSingle(b, c), null, "Should ignore already filled cells");

    b = createEmptyBoard();
    c = createCandidates();
    c[2][3] = new Set([2]);
    c[5][8] = new Set([9]);
    assert.deepStrictEqual(doNakedSingle(b, c), { r: 2, c: 3, val: 2, strat: 'Naked Single' });

    console.log("✅ All tests passed!");
} catch (error) {
    console.error("❌ Test failed:");
    console.error(error);
    process.exit(1);
}
