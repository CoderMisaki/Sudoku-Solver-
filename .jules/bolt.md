## 2024-05-24 - Missing Minimum Size Heuristic in DLX
**Learning:** The S-heuristic (Minimum Size) in Algorithm X/Dancing Links is critical. While it was implemented in `DLX_SearchAll` and `DLX_FindOne`, it was missed in `dlxSolveCheck`, leading to massive backtracking and timeouts on difficult Sudoku puzzles.
**Action:** Always ensure the S-heuristic is applied uniformly across all DLX solver variants in the codebase.
