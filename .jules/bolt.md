## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-21 - Test environment initialization strategies
**Learning:** Testing UI and JS logic contained entirely within a vanilla HTML file is straightforward by launching a Playwright instance pointing to the local file, effectively avoiding the need to establish complex module-loading or Node-based simulated DOM frameworks (like JSDOM) from scratch when no build system exists.
**Action:** Prefer Playwright (either Python or JS flavor) for testing logic inside monolithic static HTML structures, executing target logic via `page.evaluate()` after initial load.
