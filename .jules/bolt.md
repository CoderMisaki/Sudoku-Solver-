## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-30 - Optimize DLX Matrix Construction by Pre-allocating Arrays and Inlining
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (building DLX matrix), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Use fixed-size arrays ( instead of ), precompute indices, avoid allocating tiny arrays in deep nested loops, and inline row-addition logic to minimize closures.

## 2024-05-30 - Optimize DLX Matrix Construction
**Learning:** In Dancing Links (DLX) implementations for Sudoku, the matrix generation function (`buildDLX`) is a critical performance hotspot when run repeatedly (e.g., during hint generation). Pre-allocating column arrays and inlining row-addition logic significantly reduces garbage collection pressure compared to dynamic allocations and closures.
**Action:** Use pre-allocated arrays, avoid dynamically sized arrays, and inline helper functions within nested loops in performance-critical code blocks.
