## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-26 - Pre-allocating Arrays and Inlining Closures in DLX Matrix Build
**Learning:** In Dancing Links (DLX) matrix generation (a severe hotspot for hint generation), closures and dynamic array allocations (e.g., `push`, `[r*9+c...]`) inside double-nested loops cause excessive GC and slowness.
**Action:** Pre-allocate fixed-size column arrays (`new Array(324)`) and inline closure-logic directly into the loop body to avoid generating thousands of temporary closure and array scopes.
