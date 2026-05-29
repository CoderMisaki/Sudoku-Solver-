## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.


## 2023-10-27 - Implement Subresource Integrity (SRI) for CDNs
**Vulnerability:** Unpinned and unverified CDN scripts (like Tailwind) are susceptible to supply chain attacks, where an attacker compromising the CDN can inject malicious code directly into the application.
**Learning:** When applying Subresource Integrity (SRI) hashes to external CDNs, it is critical to pin the script to a specific immutable version (e.g., `cdn.tailwindcss.com/3.4.17`). Dynamic or latest-version endpoints will frequently update their content, causing their hash to change and breaking the application when the SRI validation fails.
**Prevention:** Always use version-pinned URLs for external scripts when implementing SRI, compute the hash from that exact version, and regularly audit external dependencies for updates.
