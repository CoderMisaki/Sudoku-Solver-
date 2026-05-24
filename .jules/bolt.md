## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-24 - Pre-allocating Arrays and Inlining Closures in DLX Matrix Generation
**Learning:** In the Dancing Links (DLX) matrix generation function (`buildDLX`), dynamically allocating the `cols` array and using closures (like `addRow`) within heavy nested loops creates substantial garbage collection pressure and degrades performance during repeated solver execution.
**Action:** Pre-allocate fixed-size arrays (e.g., `const cols = new Array(324);`) and inline loop logic to eliminate closure creation overhead, which measurably decreases execution time without changing algorithmic behavior.
