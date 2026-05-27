## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2023-10-27 - Screen Reader Support for Dynamic Text Statuses
**Learning:** In vanilla JS SPA interfaces like this Sudoku project, dynamic status updates and error messages lack screen reader accessibility when visual focus doesn't change, causing visually impaired users to miss critical feedback (like "Board error").
**Action:** Always verify that elements containing dynamically updated text (like status bars or error messages) use `aria-live` attributes (e.g., `aria-live="polite"` with `role="status"` or `aria-live="assertive"` with `role="alert"`).
