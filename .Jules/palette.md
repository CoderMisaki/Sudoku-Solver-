## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-05-24 - Roving Tabindex in Grid UI
**Learning:** Custom `div`-based grids require a roving tabindex pattern to properly trigger native `:focus-visible` styles and sync with screen reader focus.
**Action:** Explicitly set `tabIndex=0` on the active cell and call `.focus({ preventScroll: true })`.
