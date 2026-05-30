## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.

## 2024-05-15 - Dynamic Text Accessibility
**Learning:** In vanilla JS SPA interfaces like this project, dynamic status updates and error messages must use aria-live to ensure screen reader accessibility when visual focus does not change.
**Action:** Always add aria-live="polite" with role="status" or aria-live="assertive" with role="alert" to dynamic status/error containers.
