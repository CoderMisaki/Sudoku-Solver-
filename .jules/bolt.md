## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2025-01-22 - Pre-allocate Arrays and Avoid Closures in High-Frequency DLX Logic
**Learning:** In Dancing Links (DLX) implementations (like the Sudoku `buildDLX` matrix generation), incrementally pushing to arrays (`cols.push()`) and declaring internal helper functions (`addRow`) that create closures for every invocation introduce significant overhead and garbage collection pressure when called repeatedly (e.g., during hint generation loops).
**Action:** When working on algorithm-heavy and high-frequency functions, inline nested logic and pre-allocate fixed-size arrays (e.g. `new Array(324)`) instead of using dynamic allocation (`[]`) or array methods like `.push()`.
