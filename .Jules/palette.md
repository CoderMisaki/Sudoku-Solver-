## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2023-10-28 - Custom Modal Focus Lifecycle
**Learning:** Vanilla JS modals frequently overlook the need to store the element that triggered them (`document.activeElement` before opening). Without this, closing a modal forces screen readers to reset to the top of the document or lose their logical place in the DOM tree, causing a severely disjointed keyboard navigation experience.
**Action:** Always implement a `lastFocusedElement` pattern for custom modals, ensuring a slight delay (e.g., via `setTimeout`) when focusing *into* the modal to account for CSS `display` transitions.
