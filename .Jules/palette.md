## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.

## 2024-10-24 - ARIA Live Regions for Dynamic Text
**Learning:** In vanilla JS SPA interfaces, dynamic status updates and error messages must use `aria-live` (e.g., `aria-live="polite"` with `role="status"`) to ensure screen reader accessibility when visual focus does not change.
**Action:** Add `aria-live` and appropriate `role` attributes to status and error containers that are dynamically updated via JavaScript.
