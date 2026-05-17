## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.

## 2024-05-17 - Keyboard Focus Management in Vanilla JS Modals
**Learning:** When building custom modals without a UI framework, accessibility is often overlooked, causing a disruptive experience for keyboard and screen reader users. Specifically, when a modal opens, focus remains outside the modal, and when closed, focus is lost (usually reset to the top of the body), breaking the user's flow.
**Action:** When implementing custom modals, always capture `document.activeElement` before opening the modal. On open, apply `role="dialog"`, `aria-modal="true"`, and immediately shift focus into the modal (e.g., first input or a close button). On close, explicitly restore focus to the previously captured active element. Additionally, ensure `Escape` key closes the modal.
