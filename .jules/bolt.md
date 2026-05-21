## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2025-02-14 - Avoiding Closure and Array Allocation in Recursion
**Learning:** In a vanilla JS environment without a build system, recreating closures inside high-frequency backtracking loops (like `buildDLX`) leads to a 30-40% performance degradation due to garbage collection and memory allocation bottlenecks.
**Action:** Inline nested helper functions to eliminate closures and precompute loop bounds mathematically to prevent array creations on the hot path.
