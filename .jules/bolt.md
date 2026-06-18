## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-18 - Missing S Heuristic in Secondary DLX Solver
**Learning:** The primary `DLX_SearchAll` engine used the Minimum Size (S) Heuristic to pick the column with the fewest options, but the secondary `dlxSolveCheck` (used rapidly for hint fallback logic checks) lacked it. This resulted in O(e^N) explosive runtime for near-empty boards when verifying alternative candidate values, hitting >400s timeouts instead of ~4ms.
**Action:** Always ensure all discrete variants of recursive search algorithms in a codebase share the same critical search-space-reducing heuristics, especially when one is used as a nested validation tool.
