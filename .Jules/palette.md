## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-05-18 - Roving Tabindex and Live Regions for Custom Grids
**Learning:** Custom div-based grids and status text lack native screen reader and keyboard compatibility. Simple focus management and dynamic text attributes fix this.
**Action:** Always implement a roving tabindex pattern with explicit `focus({ preventScroll: true })` and English ARIA labels for custom grid cells, and use `aria-live="polite"` on dynamically updated status containers.
