## 2024-05-14 - Precomputing Peer Arrays for O(1) Lookups in Backtracking
**Learning:** In highly repetitive tasks like Sudoku constraint propagation (`getPeers`), dynamic array creation generates massive memory allocation overhead and triggers frequent garbage collection, slowing down the algorithm.
**Action:** Precalculate and store static mapping structures for O(1) read-only access globally, avoiding dynamic allocations in deep nested loops or recursion.

## 2024-06-11 - DLX Needs the Minimum Size (S) Heuristic
**Learning:** When using the Dancing Links (DLX) algorithm, naively picking the first available column (e.g. `let c = h.R;`) can result in pathological backtracking performance, leading to multi-second or timeout execution for complex boards. The Minimum Size / S Heuristic drastically prunes the search space by choosing the column with the fewest available nodes.
**Action:** Always ensure the Minimum Size heuristic (`for (let j = c.R; j !== h; j = j.R) if (j.size < c.size) c = j;`) is applied in any Algorithm X / DLX implementation.
