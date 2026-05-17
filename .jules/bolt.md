## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-17 - Minimizing GC Overhead with Object Reuse
**Learning:** Frequent instantiations of `new Set()` inside a function called often during application interaction (like `rebuildCandidates()`) creates unnecessary memory allocation and garbage collection churn, which can slow down responsiveness on keypresses or board resets.
**Action:** When a function regularly rebuilds a collection structure, prioritize `.clear()` and repopulating the existing structure (e.g., `set.clear()`) over re-instantiation, applying safety checks (`if (!obj) obj = new Set()`) to ensure proper initialization on the first run.
