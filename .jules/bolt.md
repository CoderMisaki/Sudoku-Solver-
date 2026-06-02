## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-06-03 - [DLX Matrix Generation Optimization]
**Learning:** In Dancing Links (DLX) implementations for Sudoku, the matrix generation function (`buildDLX`) is a critical performance hotspot when run repeatedly (e.g., during hint generation). Pre-allocating column arrays and inlining row-addition logic significantly reduces garbage collection pressure compared to dynamic allocations and closures.
**Action:** Pre-allocate column arrays and inline row-addition logic to significantly reduce GC pressure and speed up performance.
