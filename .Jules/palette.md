## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.

## 2024-05-14 - Screen Reader Support for Live Status Texts
**Learning:** In vanilla JS SPA interfaces like this project, dynamic status updates and error messages lack screen reader accessibility if visual focus doesn't change.
**Action:** Always add `aria-live` (e.g., `aria-live="polite"` with `role="status"` or `aria-live="assertive"` with `role="alert"`) attributes to elements whose content changes dynamically without requiring a page reload or focus shift.
