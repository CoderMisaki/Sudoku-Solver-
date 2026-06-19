const fs = require('fs');

const code = fs.readFileSync('index.html', 'utf8');

function extractFuncs(codeStr) {
    let dlxCode = codeStr.substring(codeStr.indexOf('class DLXNode'), codeStr.indexOf('// =====================================================================', codeStr.indexOf('class DLXNode') + 10));
    return dlxCode;
}

const funcs = extractFuncs(code);

let setup = `
${funcs}
global.buildDLX = buildDLX;
global.cover = cover;
global.uncover = uncover;
global.dlxSolveCheckWithoutS = function(b) {
    let h = buildDLX(b);
    let hasAlt = false;
    let check = (k) => {
        if (h.R === h) { hasAlt = true; return true; }
        let c = h.R;
        if (c.size === 0) return false;
        cover(c);
        for (let r = c.D; r !== c; r = r.D) {
            for (let j = r.R; j !== r; j = j.R) cover(j.C);
            if (check(k + 1)) return true;
            for (let j = r.L; j !== r; j = j.L) uncover(j.C);
        }
        uncover(c);
        return false;
    }
    check(0);
    return hasAlt;
}

global.dlxSolveCheckWithS = function(b) {
    let h = buildDLX(b);
    let hasAlt = false;
    let check = (k) => {
        if (h.R === h) { hasAlt = true; return true; }
        let c = h.R;
        for (let j = c.R; j !== h; j = j.R) if (j.size < c.size) c = j;
        if (c.size === 0) return false;
        cover(c);
        for (let r = c.D; r !== c; r = r.D) {
            for (let j = r.R; j !== r; j = j.R) cover(j.C);
            if (check(k + 1)) return true;
            for (let j = r.L; j !== r; j = j.L) uncover(j.C);
        }
        uncover(c);
        return false;
    }
    check(0);
    return hasAlt;
}

global.hardBoard = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,0]
];
`;

eval(setup);

console.log("Measuring without S heuristic (1 iteration)...");
let start1 = performance.now();
for(let i=0; i<1; i++) {
    global.dlxSolveCheckWithoutS(global.hardBoard);
}
let end1 = performance.now();
console.log("Time without S:", end1 - start1, "ms");

console.log("Measuring with S heuristic (100 iterations)...");
let start2 = performance.now();
for(let i=0; i<100; i++) {
    global.dlxSolveCheckWithS(global.hardBoard);
}
let end2 = performance.now();
console.log("Time with S (100x):", end2 - start2, "ms");
