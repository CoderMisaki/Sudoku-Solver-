## 2023-10-27 - Restoring Keyboard Focus and Semantic Labels
**Learning:** In applications using utility-first frameworks or custom CSS resets, the default `outline` is often entirely removed (e.g., `outline: none;`), which completely breaks keyboard navigation visibility. Additionally, highly iconic UIs frequently neglect descriptive text for assistive tech.
**Action:** Always verify that interactive components (buttons, cells) have a `:focus-visible` state explicitly defined when `outline` is removed, and ensure all icon-only or abbreviation-only controls possess descriptive `aria-label`s.
## 2024-06-03 - Dynamic Status and Modal Focus Management
**Learning:** Custom modals that appear without routing often fail to direct the user's keyboard input properly, leaving them lost. Dynamic messages are also skipped completely by screen readers unless `aria-live` is specified.
**Action:** Always auto-focus primary inputs upon opening a custom modal, restore focus to the trigger button upon closing, and use `aria-live` for dynamically changing text like status bars or error nodes.
