## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2025-01-20 - Optimize DLX matrix generation
**Learning:** In Dancing Links (DLX) implementations for Sudoku, the matrix generation function (e.g., `buildDLX`) is a critical performance hotspot when run repeatedly (e.g., during hint generation). Dynamic allocations (`push()`) and recreating closures in nested loops creates significant garbage collection pressure.
**Action:** Pre-allocate column arrays (`new Array(size)`) and inline row-addition logic rather than relying on dynamic allocations and closures to significantly reduce garbage collection pressure.
