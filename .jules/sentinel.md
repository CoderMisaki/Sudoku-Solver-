## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-06-08 - Missing SRI and CSP on Static Frontend
**Vulnerability:** The application loaded Tailwind from an unversioned CDN without an integrity check, and lacked a Content Security Policy, exposing it to supply chain attacks and XSS.
**Learning:** CDNs can be compromised or unexpectedly changed. Unversioned external scripts prevent reliable SRI hashing. A strict CSP is essential defense-in-depth even for static sites.
**Prevention:** Always pin external resources to specific versions, enforce Subresource Integrity (SRI) hashes, and implement a strict CSP limiting origins and inline execution.
