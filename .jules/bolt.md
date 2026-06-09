## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-15 - DLX S-Heuristic
**Learning:** Missing the Minimum Size (S) Heuristic in any DLX search implementation (like check functions) causes exponential backtracking growth, resulting in severe performance bottlenecks.
**Action:** Always verify that column selection loops through all columns to pick the one with the fewest nodes (e.g., `if (j.size < c.size) c = j`) before covering.
