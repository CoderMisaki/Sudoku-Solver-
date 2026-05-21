const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('file://' + path.resolve('index.html'));

  const results = await page.evaluate(() => {
    let passed = 0;
    let failed = 0;
    const details = [];
    function assert(cond, msg) {
        if (cond) { passed++; details.push("✅ " + msg); }
        else { failed++; details.push("❌ " + msg); }
    }

    // Store original board state
    const originalBoard = board.map(row => [...row]);

    // Test 1: Naked Single
    let b1 = Array.from({ length: 9 }, () => Array(9).fill(0));
    b1[0][0] = 1; b1[0][1] = 2; b1[0][2] = 3;
    b1[1][0] = 4; b1[1][1] = 5; b1[1][2] = 6;
    b1[2][0] = 7; b1[2][1] = 8;
    board = b1; rebuildCandidates();
    let hint1 = getLogicalHint(b1);
    assert(hint1 && hint1.val === 9 && hint1.r === 2 && hint1.c === 2 && hint1.strat === 'Naked Single', "Should find Naked Single");

    // Test 2: Empty Board
    let b2 = Array.from({ length: 9 }, () => Array(9).fill(0));
    board = b2; rebuildCandidates();
    let hint2 = getLogicalHint(b2);
    assert(hint2 === null, "Empty board should return no logical hint");

    // Test 3: Hidden Single
    let b3 = Array.from({ length: 9 }, () => Array(9).fill(0));
    b3[1][3] = 5; b3[2][3] = 5; b3[3][1] = 5; b3[3][2] = 5;
    board = b3; rebuildCandidates();
    let hint3 = getLogicalHint(b3);
    assert(hint3 && hint3.val === 5 && hint3.r === 0 && hint3.c === 0 && hint3.strat === 'Hidden Single', "Should find Hidden Single");

    // Test 4: Intersection Removal (Pointing/Box-Line)
    let b4 = Array.from({ length: 9 }, () => Array(9).fill(0));
    b4[1][3] = 9; b4[2][4] = 9;
    b4[1][8] = 1; b4[2][8] = 2; b4[3][8] = 3; b4[4][8] = 4; b4[5][8] = 5; b4[6][8] = 6; b4[7][8] = 7;
    b4[0][7] = 1;
    board = b4; rebuildCandidates();
    let hint4 = getLogicalHint(b4);
    assert(hint4 && hint4.val === 8 && hint4.r === 0 && hint4.c === 8 && hint4.strat.includes('Pointing/Box-Line'), "Should find Naked Single after Pointing/Box-Line");

    // Test 5: Naked Pair
    let b5 = Array.from({ length: 9 }, () => Array(9).fill(0));
    b5[1][0] = 3; b5[2][0] = 4; b5[3][0] = 5; b5[4][0] = 6; b5[5][0] = 7; b5[6][0] = 8; b5[7][0] = 9;
    b5[1][1] = 3; b5[2][1] = 4; b5[3][1] = 5; b5[4][1] = 6; b5[5][1] = 7; b5[6][1] = 8; b5[7][1] = 9;
    b5[1][2] = 4; b5[2][2] = 5; b5[3][2] = 6; b5[4][2] = 7; b5[5][2] = 8; b5[6][2] = 9;
    board = b5; rebuildCandidates();
    let hint5 = getLogicalHint(b5);
    assert(hint5 && hint5.strat.includes('Naked Pair'), "Should use Naked Pair strategy");

    // Restore
    board = originalBoard;
    rebuildCandidates();

    return { passed, failed, details };
  });

  console.log(results.details.join('\n'));
  console.log(`Passed: ${results.passed}, Failed: ${results.failed}`);

  await browser.close();
  if (results.failed > 0) process.exit(1);
})();
