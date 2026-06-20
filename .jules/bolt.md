## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## $(date +%Y-%m-%d) - S-Heuristic Missing in Dancing Links Solver
**Learning:** The implementation of the Dancing Links (DLX) algorithm in `dlxSolveCheck` failed to implement the Minimum Size (S) Heuristic for branching. It simply took the first available column (`let c = h.R`), leading to massive branching factors on blank or sparse Sudoku boards, effectively causing an infinite loop (400s+ timeout in Node.js benchmarks).
**Action:** When working with constraint satisfaction problems like backtracking or DLX, always explicitly look for heuristic implementations that select the most constrained variable first. Without this, theoretically fast algorithms can degrade into naive exponential searches.
