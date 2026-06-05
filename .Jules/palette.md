## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.

## 2024-06-05 - Roving Tabindex for Grid Accessibility
**Learning:** Custom `div`-based grids completely fail keyboard navigation because they do not natively receive focus or trigger `:focus-visible` rules.
**Action:** Implement the roving tabindex pattern by dynamically toggling `tabIndex` between `-1` and `0` and explicitly calling `focus()` when the active item changes to restore native keyboard functionality and screen reader support.
