## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-24 - Content Security Policy added
**Vulnerability:** Missing Content Security Policy (CSP) leaving the application vulnerable to basic Cross-Site Scripting (XSS) and code injection attacks.
**Learning:** Static frontend apps often forget to restrict resource origins. Even with inline scripts/styles required for single-file apps, CSP can block external malicious assets.
**Prevention:** Always implement a baseline CSP in the `<head>` of HTML files, restricting `default-src` to 'self' and specifically whitelisting necessary CDNs.
