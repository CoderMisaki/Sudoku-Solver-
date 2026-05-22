## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-18 - Dancing Links (DLX) S-Heuristic Omission
**Learning:** Missing the S-Heuristic (selecting the column with the minimum size) in the `dlxSolveCheck` function causes catastrophic backtracking performance on hard Sudoku boards, leading to >400s execution times instead of ~6ms, causing the browser to freeze.
**Action:** Always ensure DLX column selection uses `if (j.size < c.size) c = j` across all variants of the search algorithm (it was implemented in `DLX_FindOne` and `DLX_SearchAll`, but forgotten in `dlxSolveCheck`).
