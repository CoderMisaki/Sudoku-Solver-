## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-16 - Reusing objects to reduce GC overhead during fast grid updates
**Learning:** In a highly interactive stateful grid app where board cells frequently rebuild their candidate lists (like when deleting/updating numbers or importing puzzles), repeatedly re-instantiating 81 `Set` objects causes unnecessary Garbage Collection overhead and slows down interactions.
**Action:** Reuse existing `Set` objects by checking for their existence, clearing them using `Set.prototype.clear()`, and repopulating them, thus saving memory allocations. Always check if the object exists first before clearing it to avoid `TypeError`.
