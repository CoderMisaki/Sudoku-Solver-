## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.

## 2024-05-24 - [Dynamic Status Announcements]
**Learning:** Dynamic status updates and error messages in vanilla JS SPAs must use `aria-live` attributes to ensure screen reader accessibility when visual focus doesn't change.
**Action:** Always add `aria-live="polite"` and `role="status"` to elements that receive dynamic text updates (like `#status` or feedback bars).
