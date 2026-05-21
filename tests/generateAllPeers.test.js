const fs = require('fs');
const assert = require('assert');

// Read the script content to evaluate the function in isolated scope
const html = fs.readFileSync('index.html', 'utf8');
const funcMatch = html.match(/function generateAllPeers\(\) \{[\s\S]*?return all;\n\s*\}/);

if (!funcMatch) {
    console.error("Function generateAllPeers not found");
    process.exit(1);
}

eval(funcMatch[0]);

function runTests() {
    console.log("Running tests for generateAllPeers...");

    let allPeers;
    try {
        allPeers = generateAllPeers();
    } catch (e) {
        console.error("Error running generateAllPeers:", e);
        process.exit(1);
    }

    let passed = 0;
    let failed = 0;

    function test(name, condition) {
        try {
            assert.ok(condition, name);
            console.log(`✅ PASS: ${name}`);
            passed++;
        } catch (e) {
            console.error(`❌ FAIL: ${name}`);
            console.error(e.message);
            failed++;
        }
    }

    test("Output should be a 9x9 2D array",
         allPeers.length === 9 && allPeers.every(row => row.length === 9));

    test("Every cell should have exactly 20 peers",
         allPeers.every(row => row.every(cell => cell.length === 20)));

    test("Cell (0,0) should not contain itself as a peer",
         !allPeers[0][0].some(p => p.r === 0 && p.c === 0));

    const p00 = allPeers[0][0];
    test("Cell (0,0) should contain row peers (e.g., 0,1 and 0,8)",
         p00.some(p => p.r === 0 && p.c === 1) && p00.some(p => p.r === 0 && p.c === 8));

    test("Cell (0,0) should contain col peers (e.g., 1,0 and 8,0)",
         p00.some(p => p.r === 1 && p.c === 0) && p00.some(p => p.r === 8 && p.c === 0));

    test("Cell (0,0) should contain box peers not in same row/col (e.g., 1,1 and 2,2)",
         p00.some(p => p.r === 1 && p.c === 1) && p00.some(p => p.r === 2 && p.c === 2));

    test("Cell (0,0) should NOT contain cells outside its row/col/box (e.g., 1,3 or 8,8)",
         !p00.some(p => p.r === 1 && p.c === 3) && !p00.some(p => p.r === 8 && p.c === 8));

    const p44 = allPeers[4][4];
    test("Cell (4,4) should contain its box peers correctly (e.g., 3,3 and 5,5)",
         p44.some(p => p.r === 3 && p.c === 3) && p44.some(p => p.r === 5 && p.c === 5));

    test("Peers should have no duplicates (Set size = 20)",
         new Set(p00.map(p => `${p.r},${p.c}`)).size === 20);

    // Symmetric test
    const cellA = {r: 3, c: 5};
    const cellB = {r: 4, c: 5}; // B is peer of A (same col)
    const aHasB = allPeers[cellA.r][cellA.c].some(p => p.r === cellB.r && p.c === cellB.c);
    const bHasA = allPeers[cellB.r][cellB.c].some(p => p.r === cellA.r && p.c === cellA.c);
    test("Peer relationship should be symmetric", aHasB && bHasA);

    console.log(`\nResults: ${passed} passed, ${failed} failed`);

    if (failed > 0) {
        process.exit(1);
    }
}

runTests();
