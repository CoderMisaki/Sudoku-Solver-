## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-06-07 - Screen Reader Support in Custom Matrix Grids
**Learning:** Dynamically setting `.focus()` alongside `tabIndex = 0` on custom `div` cells is essential because arrow-key navigation does not naturally trigger browser focus events, leaving screen readers unaware of the new selection.
**Action:** In custom grids, explicitly call `.focus()` when updating the active coordinate to sync visual selection with assistive technology focus.
