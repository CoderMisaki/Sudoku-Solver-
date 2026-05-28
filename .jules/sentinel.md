## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## $(date +%Y-%m-%d) - Fix Missing Subresource Integrity (SRI) on Tailwind CSS CDN
**Vulnerability:** Loading external scripts without Subresource Integrity (SRI) allows an attacker who compromises the CDN to inject malicious code into the application.
**Learning:** Adding SRI hashes requires pinning the script to a specific version (e.g., `3.4.17`). Dynamic version endpoints cannot have consistent SRI hashes. Verifying SRI on local files via Playwright requires routing CDN requests to local copies to avoid CORS `Access-Control-Allow-Origin` errors.
**Prevention:** Always pin external dependency versions and generate SRI hashes before adding them to HTML.
