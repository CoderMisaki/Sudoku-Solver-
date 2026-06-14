## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2026-06-14 - DLX S Heuristic Optimization
**Learning:** The Dancing Links algorithm without the Minimum Size (S Heuristic) can cause exponential backtracking, timing out on difficult Sudoku puzzles. It must be consistently applied across all DLX variations in the codebase.
**Action:** Always ensure DLX column selection iterates through available columns to select the one with the smallest size (minimum remaining values).
