## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2026-05-18 - Avoiding Object Allocation in Hot Loops (rebuildCandidates)
**Learning:** Instantiating new objects (like 81 `Set` instances) inside frequently called functions causes massive Garbage Collection (GC) overhead, particularly noticeable in backtracking algorithms and responsive UI updates.
**Action:** Reuse existing object instances when possible. For Sets/Maps, use `.clear()` and repopulate them rather than reassigning a `new Set()`, while ensuring the variables are initialized safely on the first pass.
