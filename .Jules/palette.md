## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-05-18 - Communicating Dynamic Status and Errors to Screen Readers
**Learning:** Dynamic text changes inside elements like status bars or error messages are entirely invisible to screen readers without specific ARIA attributes, because visual focus isn't moved to them.
**Action:** Always add `aria-live` regions (e.g., `role="status" aria-live="polite"` or `role="alert" aria-live="assertive"`) to containers whose text changes dynamically to ensure the updates are announced properly.
