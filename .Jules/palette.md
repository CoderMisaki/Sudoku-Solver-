## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.

## 2024-06-06 - Roving Tabindex for Grid Accessibility
**Learning:** Custom grid components (like Sudoku cells) need a roving `tabindex` (toggling `-1`/`0`) and explicit `.focus()` calls during arrow navigation so that `:focus-visible` styles apply correctly and screen readers can track the active element. Without this, standard browser keyboard accessibility is completely bypassed.
**Action:** Implement `tabIndex = -1` on inactive cells, update to `0` and call `focus()` on the active cell whenever selection changes, and assign appropriate ARIA roles (`role="grid"`, `role="gridcell"`).
