## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-15 - Matrix Generation Performance (DLX)
**Learning:** In Dancing Links (DLX) implementations for Sudoku, the matrix generation function (buildDLX) is a critical performance hotspot when run repeatedly (e.g., during hint generation). Dynamic array allocation and creating closures per row introduces massive GC pressure and latency.
**Action:** Always pre-allocate arrays (e.g., column arrays, index arrays) and inline nested row-addition logic to prevent closures inside heavy generation loops.
