## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-05-18 - Dynamic Content and Modal Focus Management
**Learning:** Vanilla JS applications frequently change visual state strings without alerting screen readers, and custom modal dialogs often neglect focus trapping/restoration, heavily impairing keyboard and screen reader experiences.
**Action:** Always inject `aria-live` regions for status containers (`polite` for updates, `assertive` for errors) and manually direct `focus()` when toggling custom modals to ensure focus moves sequentially.
