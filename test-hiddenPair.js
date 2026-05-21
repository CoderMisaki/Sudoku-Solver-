const fs = require('fs');

const htmlContent = fs.readFileSync('index.html', 'utf8');

const scriptRegex = /<script>([\s\S]*?)<\/script>/gi;
let match;
let scripts = [];
while ((match = scriptRegex.exec(htmlContent)) !== null) {
    scripts.push(match[1]);
}

const jsContent = scripts.join('\n');

const setup = `
    const window = {
        addEventListener: () => {},
        matchMedia: () => ({ matches: false, addEventListener: () => {} }),
        localStorage: { getItem: () => null, setItem: () => {} },
        navigator: { language: 'en' },
        requestAnimationFrame: (cb) => cb()
    };
    const document = {
        addEventListener: () => {},
        getElementById: () => ({ children: [{appendChild:()=>{}},{appendChild:()=>{}},{appendChild:()=>{}},{appendChild:()=>{}},{appendChild:()=>{}},{appendChild:()=>{}},{appendChild:()=>{}},{appendChild:()=>{}},{appendChild:()=>{}}], classList: { add: ()=>{}, remove: ()=>{} }, addEventListener: ()=>{}, style: {}, value: '', textContent: '', appendChild: ()=>{}, focus: ()=>{} }),
        createElement: () => ({ classList: { add: ()=>{}, remove: ()=>{} }, addEventListener: ()=>{}, style: {}, appendChild: ()=>{} }),
        querySelectorAll: () => [],
        querySelector: () => ({ classList: { add: ()=>{}, remove: ()=>{} }, addEventListener: ()=>{} }),
        body: { classList: { add: ()=>{}, remove: ()=>{} }, appendChild: ()=>{} },
        documentElement: { lang: 'en', classList: { add: ()=>{}, remove: ()=>{} } }
    };
    const navigator = window.navigator;
    const localStorage = window.localStorage;

    ${jsContent}

    function runTests() {
        console.log("Running hiddenPair tests...");
        let passed = 0;
        let total = 0;
        let failed = false;

        function assert(condition, message) {
            total++;
            if (condition) {
                console.log("✅ " + message);
                passed++;
            } else {
                console.error("❌ " + message);
                failed = true;
            }
        }

        function createCands() {
            return Array.from({length: 9}, () => Array.from({length: 9}, () => new Set([1,2,3,4,5,6,7,8,9])));
        }

        // Test 1: Positive - Row
        let c1 = createCands();
        for(let c=2; c<9; c++) { c1[0][c].delete(1); c1[0][c].delete(2); }
        let res1 = hiddenPair(c1);
        assert(res1 === "Hidden Pair" && c1[0][0].size === 2 && c1[0][1].size === 2, "Positive - Row hidden pair");

        // Test 2: Negative - Full Board
        let c2 = createCands();
        let res2 = hiddenPair(c2);
        assert(res2 === null && c2[0][0].size === 9, "Negative - Full board (no hidden pairs)");

        // Test 3: Negative - Not a pair
        let c3 = createCands();
        for(let c=1; c<9; c++) { c3[0][c].delete(1); c3[0][c].delete(2); }
        let res3 = hiddenPair(c3);
        assert(res3 === null && c3[0][0].size === 9, "Negative - Only 1 cell has the values");

        // Test 4: Positive - Column
        let c4 = createCands();
        for(let r=2; r<9; r++) { c4[r][0].delete(8); c4[r][0].delete(9); }
        let res4 = hiddenPair(c4);
        assert(res4 === "Hidden Pair" && c4[0][0].size === 2 && c4[1][0].size === 2, "Positive - Column hidden pair");

        // Test 5: Positive - Block
        let c5 = createCands();
        let blockCells = [{r:0,c:0}, {r:0,c:1}, {r:0,c:2}, {r:1,c:0}, {r:1,c:1}, {r:1,c:2}, {r:2,c:0}, {r:2,c:1}, {r:2,c:2}];
        for (let cell of blockCells) {
            if ((cell.r === 1 && cell.c === 1) || (cell.r === 2 && cell.c === 2)) continue;
            c5[cell.r][cell.c].delete(3); c5[cell.r][cell.c].delete(4);
        }
        let res5 = hiddenPair(c5);
        assert(res5 === "Hidden Pair" && c5[1][1].size === 2 && c5[2][2].size === 2, "Positive - Block hidden pair");

        // Test 6: Negative - Already reduced
        let c6 = createCands();
        for(let c=2; c<9; c++) { c6[0][c].delete(1); c6[0][c].delete(2); }
        for(let v=3; v<=9; v++) { c6[0][0].delete(v); c6[0][1].delete(v); }
        let res6 = hiddenPair(c6);
        assert(res6 === null, "Negative - Already reduced");

        console.log(\`\n\${passed}/\${total} tests passed.\`);
        if (failed) process.exit(1);
    }

    runTests();
`;

// Create a temporary file to run the tests
const testFileName = '.temp-hiddenPair-runner.js';
fs.writeFileSync(testFileName, setup);

try {
    const { execSync } = require('child_process');
    execSync('node ' + testFileName, { stdio: 'inherit' });
} finally {
    if (fs.existsSync(testFileName)) {
        fs.unlinkSync(testFileName);
    }
}
