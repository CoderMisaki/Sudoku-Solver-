## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2026-06-10 - Roving Tabindex and Live Regions
**Learning:** For custom grid widgets, managing keyboard focus using a roving tabindex (dynamically toggling `tabIndex` between `-1` and `0`) and explicitly calling `.focus({ preventScroll: true })` ensures proper screen reader sync and visual focus without page jumps. Dynamically updated status containers must use `aria-live="polite"` to ensure screen readers announce updates without interrupting the user.
**Action:** Always implement roving tabindex for custom grids and ensure dynamic status messages have `aria-live="polite"`.
