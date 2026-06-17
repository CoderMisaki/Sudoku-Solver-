## 2024-05-24 - Dynamic Status and Modal Focus
**Learning:** Adding `aria-live="polite"` to dynamically changing status and error divs allows screen readers to announce Sudoku state updates smoothly. Returning keyboard focus to the originating button after closing a modal is essential to prevent focus loss.
**Action:** Always add `aria-live="polite"` to UI feedback containers, and implement circular/restoring focus management on all custom dialogs to ensure proper keyboard navigation.
