## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.
## 2024-05-19 - Deferring localStorage operations to prevent UI jank
**Learning:** `localStorage` calls are fully synchronous and blocking on the main thread. Frequent calls to it (like saving board state on every cell change in a Sudoku app) can easily cause UI jank.
**Action:** Debounce synchronous I/O operations inside rapid UI handlers (using `setTimeout`). Always add a `visibilitychange` event listener to synchronously flush any pending state writes when the page visibility is hidden, preventing data loss.
