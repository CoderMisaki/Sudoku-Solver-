## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-18 - Missing Content Security Policy and Unpinned CDN
**Vulnerability:** The application was loading Tailwind CSS via an unversioned CDN URL (`https://cdn.tailwindcss.com`) without a Subresource Integrity (SRI) hash, and lacked a Content Security Policy (CSP).
**Learning:** This static app architecture is highly vulnerable if the single external CDN is compromised, allowing arbitrary script execution (XSS). Relying on floating tags for CDNs breaks SRI implementation.
**Prevention:** Always pin external dependencies to specific versions and include an SRI hash. Implement a restrictive `default-src 'self'` CSP, explicitly allowing only required external domains and explicitly necessary inline execution permissions (like `'unsafe-inline'` for dynamically generated CDN styles).
