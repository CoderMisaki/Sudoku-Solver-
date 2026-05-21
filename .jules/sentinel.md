## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-21 - Insecure Viewport Configuration
**Vulnerability:** Disabling user scaling via viewport meta tag restricts zoom functionality.
**Learning:** Preventing user zooming is an accessibility and potential security risk, preventing users from safely viewing content or verifying details.
**Prevention:** Always allow user scaling by ensuring `maximum-scale` and `user-scalable=no` are excluded from viewport meta tags.
