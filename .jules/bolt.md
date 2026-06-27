## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-10-27 - Unoptimized DLX Solver Timeout
**Learning:** When benchmarking the DLX solver missing the Minimum Size Heuristic (`dlxSolveCheck`), testing it on a hard board even 10 times causes the terminal to timeout (>400 seconds) due to the massive unoptimized search space.
**Action:** When testing complex algorithms prior to optimization (like DLX without the S-heuristic), restrict the benchmarking loop to a single iteration (`for(let i=0; i<1; i++)`) to prevent extreme terminal timeouts.
