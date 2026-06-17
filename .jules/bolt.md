## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-15 - Exponential Reduction in Branching Factor with Minimum Size Heuristic (S Heuristic)
**Learning:** In constraint satisfaction problems solved via Dancing Links (Algorithm X), the order of column selection has an exponential impact on performance. An unoptimized solver might just pick the first available column, leading to massive search spaces (taking ~24.5 seconds for a single iteration).
**Action:** Always implement Donald Knuth's S Heuristic (Minimum Size Heuristic) which selects the column with the fewest candidates first. This minor `O(C)` check per step drastically trims the search tree, reducing execution time from seconds to milliseconds (~5ms).
