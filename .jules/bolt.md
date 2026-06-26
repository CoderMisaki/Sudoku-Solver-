## 2024-05-24 - Missing MRV Heuristic in Sub-Solvers
**Learning:** In Algorithm X (Dancing Links) implementations, a missing Minimum Remaining Values (MRV) heuristic (`for(j=c.R;...;j=j.R) if(j.size<c.size) c=j`) in even a single helper function (`dlxSolveCheck`) can cause exponential performance degradation (O(2^N)) leading to massive timeouts when evaluating sparsely populated boards, even if the primary solver function implements it correctly.
**Action:** Always verify that all recursive backtracking functions within a solver engine consistently apply the same pruning heuristics.
