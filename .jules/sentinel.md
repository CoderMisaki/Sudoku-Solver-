## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-06-09 - Missing SRI and CSP Headers
**Vulnerability:** The application loaded unversioned third-party scripts from a CDN without Subresource Integrity (SRI) validation, and lacked a Content Security Policy (CSP), exposing the site to potential XSS and CDN-compromise attacks.
**Learning:** Unversioned CDNs (like `cdn.tailwindcss.com`) cannot have SRI applied directly as they update frequently, causing hash mismatches. They must be pinned to a specific version first. Additionally, the CSP must allow `'unsafe-inline'` for this specific app's inline styles/scripts.
**Prevention:** Always pin third-party CDN scripts to a specific version, generate an SRI hash, and apply a strict CSP that limits execution to known origins.
