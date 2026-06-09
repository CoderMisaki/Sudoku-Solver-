const fs = require('fs');

let code = fs.readFileSync('index.html', 'utf8');

let dlxCode = code.match(/class DLXNode[\s\S]*?function dlxSolveCheck\(b\) \{[\s\S]*?return hasAlt;\n        \}/)[0];
let boardInit = `
function buildDLX(board) {
` + dlxCode.split('function buildDLX(board) {')[1];

let testBoard = [
    [0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 3],
    [0, 7, 4, 0, 8, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 2],
    [0, 8, 0, 0, 4, 0, 0, 1, 0],
    [6, 0, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 7, 8, 0],
    [5, 0, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0]
];

eval(dlxCode);

let start = performance.now();
for (let i = 0; i < 10; i++) {
    dlxSolveCheck(testBoard);
}
console.log("Time without S-heuristic:", performance.now() - start);

// Add S-heuristic
dlxCode = dlxCode.replace('let c = h.R;', 'let c = h.R; for (let j=c.R; j!==h; j=j.R) if(j.size<c.size) c=j;');
eval(dlxCode);

start = performance.now();
for (let i = 0; i < 10; i++) {
    dlxSolveCheck(testBoard);
}
console.log("Time with S-heuristic:", performance.now() - start);
