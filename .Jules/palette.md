## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.

## 2025-06-21 - Modal Keyboard Accessibility
**Learning:** Hardcoding CSS selectors to restore focus after closing a modal is brittle. Native focus visible rules may fail or jump scroll.
**Action:** Store `document.activeElement` before opening the modal, focus the first interactive element inside, and use `.focus({ preventScroll: true })` on the stored element when closing.
