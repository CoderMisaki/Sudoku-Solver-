## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2023-10-27 - Screen Reader Announcements for Dynamic Content
**Learning:** In vanilla JS SPA interfaces, visual status and error texts update dynamically without changing focus. Screen readers miss these updates completely unless specific attributes are set.
**Action:** Always add `aria-live="polite"` with `role="status"` for non-critical updates and `aria-live="assertive"` with `role="alert"` for critical errors to ensure assistive technology announces them.
