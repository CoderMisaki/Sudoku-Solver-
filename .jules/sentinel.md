## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2026-06-12 - Unversioned CDN missing SRI
**Vulnerability:** The application was loading Tailwind CSS from an unversioned CDN (`https://cdn.tailwindcss.com`) without a Subresource Integrity (SRI) hash or a Content Security Policy (CSP).
**Learning:** This exposes the application to supply chain attacks if the CDN is compromised, and XSS risks due to the lack of CSP.
**Prevention:** Always pin CDN URLs to a specific version and include an SRI hash. Add a strict Content Security Policy to restrict resource loading.
