const fs = require('fs');
const assert = require('assert');

let html = fs.readFileSync('index.html', 'utf8');
let startIdx = html.indexOf('class DLXNode {');
let endIdx = html.indexOf('function cover(c)');

let dlxCode = html.substring(startIdx, endIdx);

eval(dlxCode + `
    let board = Array.from({length:9}, ()=>Array(9).fill(0));
    board[0][0] = 5;
    let header = buildDLX(board);

    // Validate sizes and structure
    let c = header.R;
    let totalCols = 0;
    while(c !== header) {
        totalCols++;
        c = c.R;
    }
    assert.equal(totalCols, 324, "Should have 324 columns");
`);
console.log("DLX Matrix generation test passed.");
