## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.

## 2024-05-14 - Custom Modal Closing Behaviors
**Learning:** Users instinctively expect to close modals by clicking outside the modal content or by pressing the `Escape` key. Relying solely on a explicit 'Close' button frustrates users when these common patterns are missing, especially in a keyboard-heavy app like a Sudoku solver.
**Action:** When implementing custom modals, always ensure `Escape` key listeners and click-outside (overlay click) handlers are built-in from the start to match standard user expectations and improve accessibility.
