## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2026-06-12 - Algorithm X Minimum Size (S) Heuristic
**Learning:** The Sudoku solver's Dancing Links (DLX) implementation for `dlxSolveCheck` lacked the Minimum Size (S) Heuristic (selecting the column with the fewest nodes). This caused severe backtracking performance bottlenecks.
**Action:** Always ensure the S Heuristic (`for (let j=c.R; j!==header; j=j.R) if(j.size<c.size) c=j;`) is included in DLX search and check functions to minimize the search tree branching factor.
