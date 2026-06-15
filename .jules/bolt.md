## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-06-15 - DLX S Heuristic Missing in Verification Logic
**Learning:** The Dancing Links (DLX) `dlxSolveCheck` function was missing the Minimum Size Column (S Heuristic) selection logic, causing combinatorial explosions during alternative solution checking (taking 400s+ compared to ~8ms). The heuristic was present in the main solver but forgotten in the validation logic.
**Action:** Always ensure critical algorithmic optimizations like heuristics are applied consistently across all variations of the algorithm in the codebase.
