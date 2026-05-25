## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-14 - Avoiding Closures and Array Allocations in High-Frequency Loops
**Learning:** The Dancing Links matrix generation (`buildDLX`) was repeatedly allocating a closure `addRow` and multiple small arrays within nested loops. This caused significant garbage collection overhead, bottlenecking operations that run `buildDLX` multiple times like hints and solvers.
**Action:** Always pre-allocate arrays of known size when generating matrices, and inline repeated logic inside tight loops to avoid dynamic object creation and closure overhead.
