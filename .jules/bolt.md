## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-06-23 - Exponential Speedup via Minimum Size Heuristic in Exact Cover
**Learning:** In Algorithm X (Dancing Links) implementations for constraint satisfaction problems like Sudoku, selecting the column with the minimum size (the 'S Heuristic') is critical for performance. Without it, the branching factor explodes, causing Node.js scripts to exceed 400-second timeouts on complex boards.
**Action:** Always verify that exact cover constraint solvers use heuristic column selection before attempting micro-optimizations like loop unrolling or object pooling.
