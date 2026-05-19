## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-15 - Reuse Set objects to reduce GC overhead
**Learning:** Instantiating new `Set` objects dynamically inside tight loops (like `rebuildCandidates()`) creates a lot of garbage for the garbage collector (GC), degrading runtime performance. Re-using the same object using `.clear()` drastically improves performance.
**Action:** When a Set needs to be re-populated dynamically inside heavy loops, safely check for its existence (`if (!obj)`), then reuse it with `.clear()` and `.add()` instead of reallocating it with `new Set()`.
