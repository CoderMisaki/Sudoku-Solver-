## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-06-25 - S-Heuristic for Dancing Links (Algorithm X)
**Learning:** The Sudoku solver's implementation of Donald Knuth's Algorithm X (`dlxSolveCheck`) was missing the critical "S-Heuristic" (Minimum Size Heuristic). Without it, the solver arbitrarily chose columns, leading to a massive branching factor and excessive backtracking that occasionally timed out on hard puzzles.
**Action:** Always verify that depth-first search algorithms over exact cover matrices include a heuristic to pick the column with the fewest candidates. In JavaScript DLX implementations, a simple loop `for (let j = c.R; j !== h; j = j.R) if (j.size < c.size) c = j;` can reduce execution time from minutes to milliseconds.
