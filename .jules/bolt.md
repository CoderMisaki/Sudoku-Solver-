## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2025-02-18 - Pre-allocating Arrays & Inlining in Matrix Generation
**Learning:** In DLX algorithm matrix generation (`buildDLX`), which is a critical performance hotspot when called repeatedly, dynamic array sizes and array allocations via closures create significant overhead.
**Action:** Pre-allocate column arrays and inline row addition logic to skip closures and redundant calculations, preventing large garbage collection delays.
