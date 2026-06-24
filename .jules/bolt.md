## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-15 - Missing S-Heuristic in DLX Validation Causes Infinite Loops
**Learning:** The `dlxSolveCheck` function in the Dancing Links Sudoku solver omitted the Minimum Size (S) Heuristic for column selection. Without this heuristic, checking for alternative solutions on sparsely populated boards caused astronomical backtracking, taking >400 seconds and effectively hanging the browser thread.
**Action:** Always verify that DLX implementations include the S-heuristic (`for (let j = c.R; j !== h; j = j.R) if (j.size < c.size) c = j;`) when determining which column to cover next.
