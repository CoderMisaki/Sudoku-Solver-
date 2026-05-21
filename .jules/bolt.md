## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## $(date +%Y-%m-%d) - Deferring synchronous I/O and JSON serialization
**Learning:** Performing synchronous I/O operations (like `localStorage.setItem`) and intensive computations (like `JSON.stringify` on large board states) within the main thread can cause UI jank, especially when invoked repeatedly (e.g., during Sudoku solver updates).
**Action:** When saving state locally, use `requestIdleCallback` (with a `setTimeout` fallback) to defer the operation and prevent blocking the UI thread. Apply debouncing/cancelling on the pending timeout ID to avoid executing multiple unnecessary saves during rapid consecutive updates.
