## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-18 - Avoid Set to Array conversion in hot loops
**Learning:** Converting Sets to Arrays (`Array.from(set)`) within deeply nested loops causes significant performance overhead and garbage collection pauses.
**Action:** Use Set iterators (`set.values()`) directly with `.next().value` to extract elements efficiently, or iterate directly with `for..of` if applicable, reducing runtime considerably (e.g. 5x improvement).
