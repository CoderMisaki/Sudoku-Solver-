## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2026-05-28 - Add ARIA Live Regions for Dynamic Updates
**Learning:** In vanilla JS SPA interfaces, dynamic status updates and error messages must use `aria-live` (e.g., `aria-live="polite"` with `role="status"` or `aria-live="assertive"` with `role="alert"`) to ensure screen reader accessibility when visual focus doesn't change.
**Action:** Add appropriate `aria-live` and `role` attributes to elements that frequently update text content dynamically without focus change.
