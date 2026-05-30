const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

const classStr = `class DLXNode {
    constructor(c) {
        this.L = this; this.R = this; this.U = this; this.D = this;
        this.C = c; this.rowID = null;
    }
}
class DLXColumn extends DLXNode {
    constructor(n) { super(null); this.size = 0; this.name = n; this.C = this; }
}`;

let buildDlxFn = '';
let capture = false;
let braceCount = 0;
for (const line of html.split('\n')) {
    if (line.includes('function buildDLX(board) {')) {
        capture = true;
    }
    if (capture) {
        buildDlxFn += line + '\n';
        if (line.includes('{')) braceCount += (line.match(/{/g) || []).length;
        if (line.includes('}')) braceCount -= (line.match(/}/g) || []).length;
        if (braceCount === 0) {
            break;
        }
    }
}

// Combine strings and evaluate
const allCode = classStr + '\n\n' + buildDlxFn;
const myEval = new Function('board', allCode + '\nreturn buildDLX(board);');

const emptyBoard = Array.from({length: 9}, () => Array(9).fill(0));
const header = myEval(emptyBoard);

let colCount = 0;
let c = header.R;
while (c !== header) {
    colCount++;
    c = c.R;
}
assert.strictEqual(colCount, 324, 'Should have exactly 324 columns');

console.log('buildDLX test passed!');
