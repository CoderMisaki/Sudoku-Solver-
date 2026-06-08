## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-24 - Missing Minimum Size (S) Heuristic in Algorithm X Check
**Learning:** Omission of the Minimum Size (S) heuristic (selecting the column with the fewest nodes) in Dancing Links algorithms, specifically in the `dlxSolveCheck` path, leads to severe backtracking performance bottlenecks resulting in effectively infinite timeouts on hard boards.
**Action:** Always ensure DLX column selection includes the S-heuristic loops when modifying search algorithms.
