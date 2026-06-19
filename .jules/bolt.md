## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-28 - Missing S Heuristic in Secondary DLX Functions
**Learning:** Secondary DLX functions (like `dlxSolveCheck` used for hint validation) can easily be missed when applying heuristics to the main solver (`DLX_SearchAll`), leading to massive ~23-second bottlenecks during UI interactions.
**Action:** Always check all implementations of Algorithm X/DLX in the codebase to ensure the Minimum Size (S) Heuristic (`for (let j = c.R; j !== h; j = j.R) if (j.size < c.size) c = j;`) is consistently applied before node coverage.
