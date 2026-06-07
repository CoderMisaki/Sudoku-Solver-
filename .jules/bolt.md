## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-24 - Minimum Size Heuristic in DLX
**Learning:** In Algorithm X / Dancing Links (DLX) implementations, omitting the Minimum Size Heuristic (selecting the column with the fewest nodes) inside the `check` or search function can lead to exponential slowdowns or timeouts on hard Sudoku puzzles.
**Action:** Always ensure DLX column selection iterates through available columns to find the one with the smallest `size` before proceeding with the cover/uncover backtracking loop.
