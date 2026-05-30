## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-30 - Pinning CDN Versions for SRI
**Vulnerability:** Loading external scripts via CDN without version pinning and Subresource Integrity (SRI) exposes the application to potential malicious code injection if the CDN is compromised or the script dynamically updates.
**Learning:** When applying Subresource Integrity (SRI) attributes to dynamic CDNs (like `https://cdn.tailwindcss.com`), you must pin the URL to a specific version (e.g., `/3.4.17`). Dynamic updates will break the integrity hash otherwise.
**Prevention:** Always pin external dependencies to specific versions and include `integrity` and `crossorigin` attributes on `<script>` tags fetching from CDNs.
