## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-06-22 - Roving Tabindex for Custom Grid Widgets
**Learning:** Custom `div`-based grids (like the Sudoku board) are entirely inaccessible to screen readers and keyboard users without explicit `tabindex` manipulation and `role="button"`.
**Action:** Always implement a roving tabindex (dynamically setting `tabIndex` between `-1` and `0`) and manually call `.focus({ preventScroll: true })` on the active grid element to correctly sync screen readers and trigger native `:focus-visible` styles without unintended page scrolling.
