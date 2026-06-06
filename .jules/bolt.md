## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-05-24 - DLX Matrix Generation Optimization
**Learning:** In Dancing Links implementations for Sudoku, the matrix generation function (`buildDLX`) creates significant performance bottlenecks when called repeatedly. Dynamically allocating arrays and using closures within loops generates excessive garbage collection pressure.
**Action:** Pre-allocate fixed-size column arrays and inline nested function logic (like row additions) mathematically to avoid memory overhead and vastly improve speed.
