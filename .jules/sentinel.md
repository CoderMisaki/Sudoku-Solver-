## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-06-18 - Missing Subresource Integrity (SRI) and Content Security Policy (CSP)
**Vulnerability:** External CDNs (Tailwind) lacked integrity checks, and the app lacked a CSP, exposing it to supply chain attacks.
**Learning:** Using untrusted CDNs without SRI allows an attacker who compromises the CDN to inject malicious code into the application.
**Prevention:** Always use Subresource Integrity (SRI) for external scripts and enforce a Content Security Policy (CSP) to restrict script sources.
