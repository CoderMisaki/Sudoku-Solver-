/**
 * Test runner for xyWing function.
 */

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');

// Extract the script tag content
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

if (!scriptMatch) {
    console.error("Failed to find script in index.html");
    process.exit(1);
}

const scriptContent = scriptMatch[1];

// Use stable string manipulation to extract the core logic block
const startIndex = scriptContent.indexOf('function getUnits()');
const endIndex = scriptContent.indexOf('function getLogicalHint(b)');

if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
    console.error("Failed to locate core logic boundaries.");
    process.exit(1);
}

const coreLogic = scriptContent.substring(startIndex, endIndex);

// Evaluate the logical parts to expose them
try {
    eval(coreLogic);
} catch (e) {
    console.error("Failed to evaluate core logic:", e);
    process.exit(1);
}

function createEmptyCands() {
    return Array(9).fill().map(() => Array(9).fill().map(() => new Set()));
}

console.log("Running xyWing tests...");
let passed = 0, failed = 0;

function assert(condition, message) {
    if (!condition) {
        console.error("❌ " + message);
        failed++;
    } else {
        console.log("✅ " + message);
        passed++;
    }
}

// --- TEST SUITE FOR xyWing ---

// Test 1: No xyWing
let cands1 = createEmptyCands();
cands1[0][0] = new Set([1, 2]);
cands1[0][1] = new Set([1, 3]);
let result1 = xyWing(cands1);
assert(result1 === null, "Test 1: Expected null when no xyWing exists");

// Test 2: Basic xyWing
let cands2 = createEmptyCands();
cands2[0][0] = new Set([1, 2]); // pivot xy
cands2[0][5] = new Set([1, 3]); // pincer xz
cands2[5][0] = new Set([2, 3]); // pincer yz
cands2[5][5] = new Set([3, 4, 5]); // target seeing both pincers

let result2 = xyWing(cands2);
assert(result2 === "XY-Wing", "Test 2: Expected 'XY-Wing' when valid xyWing exists");
assert(!cands2[5][5].has(3), "Test 2: Target candidate z (3) successfully removed");
assert(cands2[5][5].has(4), "Test 2: Non-target candidate (4) correctly retained");
assert(cands2[5][5].has(5), "Test 2: Non-target candidate (5) correctly retained");

// Test 3: No intersection between target and pincers
let cands3 = createEmptyCands();
cands3[0][0] = new Set([1, 2]); // pivot xy
cands3[0][5] = new Set([1, 3]); // pincer xz
cands3[8][0] = new Set([2, 3]); // pincer yz
cands3[5][5] = new Set([3, 4, 5]); // target, does not see pincer [8][0]
let result3 = xyWing(cands3);
assert(result3 === null, "Test 3: Expected null when target doesn't see both pincers");

// Test 4: XY-Wing in same block
let cands4 = createEmptyCands();
cands4[0][0] = new Set([1, 2]); // pivot
cands4[0][1] = new Set([1, 3]); // pincer 1
cands4[1][0] = new Set([2, 3]); // pincer 2
cands4[1][1] = new Set([3, 8]); // target seeing both pincers
let result4 = xyWing(cands4);
assert(result4 === "XY-Wing", "Test 4: Expected 'XY-Wing' for same block configuration");
assert(!cands4[1][1].has(3), "Test 4: Target candidate z (3) successfully removed");
assert(cands4[1][1].has(8), "Test 4: Non-target candidate (8) correctly retained");

console.log(`\nTests completed: ${passed} passed, ${failed} failed`);

if (failed > 0) process.exit(1);
