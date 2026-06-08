## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.

## 2024-05-18 - Roving TabIndex for Div Grids
**Learning:** Custom div-based grids require explicit focus management using a roving tabindex pattern and `focus({ preventScroll: true })` to sync visual states and screen reader focus without page jumps.
**Action:** Always implement roving tabindex when creating custom interactive grid widgets.
