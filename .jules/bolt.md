## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.


## 2026-05-23 - Add S Heuristic to DLX Check
**Learning:** Missing the Minimum Size (S) Heuristic in DLX algorithm search functions (like dlxSolveCheck) causes severe backtracking performance bottlenecks on difficult Sudoku boards due to suboptimal branch selection.
**Action:** Always ensure the S heuristic (selecting the column with the fewest nodes) is included in all Dancing Links (DLX) implementations to minimize the search tree.
