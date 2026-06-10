## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-15 - DLX Algorithm X Needs S-Heuristic for Sudoku
**Learning:** The native `dlxSolveCheck` implementation of Algorithm X omitted the Knuth Minimum Size (S) Heuristic. This caused the backtracking solver to pick the first available column instead of the most constrained one, leading to massive exponential branching and time-outs (>400s) on difficult Sudoku boards.
**Action:** Always ensure any Exact Cover / DLX implementation explicitly loops to select the column with the minimum size (`j.size < c.size`) before covering, which reduces branching factor and drops solve times to ~15ms.
