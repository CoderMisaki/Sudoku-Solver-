## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.

## 2026-06-01 - Accessible Dynamic Status Updates
**Learning:** In vanilla JS SPA interfaces where visual focus doesn't change, dynamic status updates and error messages are not automatically announced by screen readers.
**Action:** Always apply `aria-live="polite"` with `role="status"` for general updates, or `aria-live="assertive"` with `role="alert"` for critical errors to ensure proper accessibility.
