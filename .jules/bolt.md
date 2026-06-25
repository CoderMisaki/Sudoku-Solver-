## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-30 - Minimum Size Heuristic (S-Heuristic) in Dancing Links
**Learning:** The Minimum Size Heuristic (S-heuristic) is absolutely critical for the performance of the Dancing Links (DLX) algorithm. Without selecting the column with the minimum size, the branching factor explodes, leading to timeouts (>400 seconds) in Node.js for an empty or sparse Sudoku grid, whereas it takes <10ms with the heuristic.
**Action:** Always ensure the S-heuristic `for (let j = c.R; j !== h; j = j.R) if (j.size < c.size) c = j;` is applied in every DLX solver implementation before proceeding to optimization.
