## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-05-18 - Dynamic Status Updates Accessibility
**Learning:** In vanilla JS SPA-like interfaces without visual focus changes (like a Sudoku board where a status text changes or a modal shows an error), screen reader users are left completely unaware of errors or states without `aria-live` attributes.
**Action:** Always add `role="status" aria-live="polite"` to generic status update regions and `role="alert" aria-live="assertive"` to dynamic error text containers in vanilla JS projects.
