## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-14 - Precomputing Array Elements for Matrix Generation in DLX
**Learning:** In Dancing Links matrix generation (`buildDLX`), dynamic array allocation and anonymous closures (like `addRow` returning nested closures) execute iteratively for every cell and digit (324 columns, hundreds of rows) creating massive memory garbage overhead and invoking the garbage collector on repeated solver triggers.
**Action:** Inline matrix element construction explicitly logic and pre-allocate node map sizes `new Array(324)` instead of using `Array.prototype.push`.
