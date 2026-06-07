## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2026-06-07 - Subresource Integrity for CDN
**Vulnerability:** Unversioned CDN URL without SRI could allow malicious script injection if compromised.
**Learning:** Never apply SRI hashes to unversioned CDN URLs (e.g., https://cdn.tailwindcss.com). Always pin to a specific version (e.g., 3.4.1) first to avoid hash mismatches on updates.
**Prevention:** Pin external scripts to a specific version and include an integrity attribute with the correct hash.
