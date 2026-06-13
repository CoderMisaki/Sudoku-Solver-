## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-24 - Missing S Heuristic in dlxSolveCheck
**Learning:** The Minimum Size / S Heuristic is critical for Dancing Links (DLX) performance, especially for difficult Sudoku boards. While `DLX_FindOne` and `DLX_SearchAll` implemented it, it was omitted in `dlxSolveCheck`, leading to massive performance regressions (or timeouts) when checking alternative solutions during Hint generation.
**Action:** Always ensure the S Heuristic is applied in all DLX traversal functions.
