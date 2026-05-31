## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.


## 2026-05-31 - Minimum Size Heuristic in DLX
**Learning:** Missing the minimum size heuristic (S Heuristic) in Dancing Links/Algorithm X implementations leads to severe backtracking performance bottlenecks.
**Action:** Always verify that column selection in DLX functions (e.g., dlxSolveCheck, DLX_SearchAll) includes the minimum size heuristic.
