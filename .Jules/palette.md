## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-05-29 - Dynamic Status Accessibility
**Learning:** In vanilla JS SPA interfaces, screen readers are unaware of dynamic text updates (like error messages or statuses) unless visual focus changes. Simply changing text content is invisible to assistive technologies.
**Action:** Always use `aria-live` (e.g., `aria-live="polite"` with `role="status"` or `aria-live="assertive"` with `role="alert"`) for status and error message containers that update dynamically without focus shifts.
