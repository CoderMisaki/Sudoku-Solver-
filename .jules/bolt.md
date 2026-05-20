## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-15 - Reusing Set Objects to Reduce GC Overhead
**Learning:** Continually re-allocating 81 `Set` objects during puzzle updates causes unnecessary garbage collection and performance overhead.
**Action:** Reuse existing `Set` objects by checking for their existence, clearing them, and repopulating them, instead of instantiating new ones.
