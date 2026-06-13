## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-06-13 - Accessible Dynamic Status Updates
**Learning:** The application uses a single `#status` text element to convey critical game states (e.g., clashing numbers, solved states) via dynamic DOM text changes, which screen readers ignore by default.
**Action:** Added `aria-live="polite"` and `aria-atomic="true"` to the status container so that state changes are seamlessly announced to assistive technologies without interrupting the user.
