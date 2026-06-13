## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-24 - Unversioned CDNs and SRI
**Vulnerability:** Unversioned CDN scripts (e.g., tailwindcss.com without version) lack Subresource Integrity (SRI) hashes, leaving the application vulnerable to supply-chain attacks if the CDN is compromised.
**Learning:** Never apply Subresource Integrity (SRI) hashes to unversioned CDN URLs, as valid updates to the underlying file will cause hash mismatches and break the site.
**Prevention:** Always pin the CDN URL to a specific version before computing and applying the SRI hash.
