## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-15 - Subresource Integrity (SRI) for Third-Party CDN
**Vulnerability:** The application was loading Tailwind CSS from an unpinned CDN URL without Subresource Integrity (SRI), making it vulnerable to XSS if the CDN is compromised.
**Learning:** Including third-party scripts via `<script src="...">` without integrity checks allows the provider to execute arbitrary code within the context of the application. Dynamic CDNs (like unpinned versions) can also introduce breaking changes or change the content, making integrity validation impossible unless pinned.
**Prevention:** Always pin third-party CDN scripts to a specific version and include the `integrity` and `crossorigin` attributes to ensure the downloaded script matches the expected cryptographic hash.
