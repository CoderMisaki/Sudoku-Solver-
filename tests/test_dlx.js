const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error("Failed to find script tag in index.html");
  process.exit(1);
}
const code = scriptMatch[1];

const dlxCodeMatch = code.match(/class DLXNode[\s\S]*?function buildDLX\(board\) \{[\s\S]*?return header;\n\s*\}/);

if (!dlxCodeMatch) {
  console.error("Failed to find buildDLX code");
  process.exit(1);
}

eval(dlxCodeMatch[0]);

let board = [
    [0,0,0, 2,6,0, 7,0,1],
    [6,8,0, 0,7,0, 0,9,0],
    [1,9,0, 0,0,4, 5,0,0],
    [8,2,0, 1,0,0, 0,4,0],
    [0,0,4, 6,0,2, 9,0,0],
    [0,5,0, 0,0,3, 0,2,8],
    [0,0,9, 3,0,0, 0,7,4],
    [0,4,0, 0,5,0, 0,3,6],
    [7,0,3, 0,1,8, 0,0,0]
];

try {
  let header = buildDLX(board);
  if (!header || header.name !== "H") {
    console.error("buildDLX failed to return a proper header");
    process.exit(1);
  }

  // Count nodes in column 0
  let col0 = header.R;
  while (col0 && col0.name !== 0 && col0 !== header) {
    col0 = col0.R;
  }
  if (!col0 || col0 === header) {
      console.error("Failed to find column 0");
      process.exit(1);
  }

  if (col0.size === 0) {
      console.error("Column 0 is empty!");
      process.exit(1);
  }

  console.log("buildDLX output validated successfully. Column 0 size:", col0.size);
} catch (e) {
  console.error("Error executing buildDLX:", e);
  process.exit(1);
}
