## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-21 - DocumentFragment for DOM loop insertions
**Learning:** Inserting elements directly into the DOM inside nested loops (like grid generation) causes continuous layout recalculations and is inefficient.
**Action:** Use `document.createDocumentFragment()` to accumulate elements in memory first, and only append to the actual DOM once at the end of the operation.
