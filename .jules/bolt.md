## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-24 - Precomputing index calculations and eliminating dynamic closures
**Learning:** In highly repetitive tasks like DLX constraint propagation (`buildDLX`), dynamic closures (functions inside loops) and array dynamic allocations via `.push()` generate immense garbage collection overhead.
**Action:** Inline nested logic, manually allocate constant sized arrays and simplify calculations directly into the loops.
