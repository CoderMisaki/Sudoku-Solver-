## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.## 2024-05-24 - Screen Reader Support for Custom Div Grids
**Learning:** When building custom grid layouts using raw `div` elements instead of native interactive elements, screen readers completely ignore selection changes unless the roving tabindex pattern is combined with explicitly calling `.focus({ preventScroll: true })`.
**Action:** Always implement roving tabindex (`tabIndex = -1` vs `0`) and force native `.focus()` on the currently active internal element when users navigate custom widgets.

## 2024-05-24 - Dynamic Status Feedback
**Learning:** Text updates in static `div` containers (like game states or error messages) are visually apparent but totally invisible to screen reader users until `aria-live="polite"` is explicitly added to the container.
**Action:** Always append `aria-live="polite"` to any container that frequently updates with non-interruptive status text based on user actions.
