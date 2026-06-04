## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-05-18 - Roving Tabindex for Custom Grid Widgets

**Learning:** Dynamically generated grid widgets (like custom `div`-based Sudoku cells) often contain dead `:focus-visible` CSS rules because the elements natively lack `tabindex`. Implementing a roving tabindex pattern not only makes the grid keyboard accessible for screen readers but unexpectedly revives these existing visual focus cues perfectly.
**Action:** Always implement a roving tabindex (managing `tabIndex` between `-1` and `0` dynamically with `.focus()`) when building custom keyboard-navigable widgets to ensure native focus pseudo-classes apply correctly.
