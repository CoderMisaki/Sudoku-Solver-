## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-05-19 - Screen Reader Accessibility for Dynamic Status
**Learning:** In vanilla JS SPA interfaces where dynamic status updates and error messages appear without visual focus changes, screen readers may not announce them.
**Action:** Always utilize `aria-live="polite"` with `role="status"` for non-disruptive feedback, and `aria-live="assertive"` with `role="alert"` for critical errors.
