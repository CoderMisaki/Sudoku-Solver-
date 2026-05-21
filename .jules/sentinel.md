## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2026-05-21 - Subresource Integrity (SRI) Implementation for CDNs
**Vulnerability:** Missing Subresource Integrity (SRI) for external scripts loaded from CDNs. Unversioned CDN links are vulnerable to silent compromise or upstream changes.
**Learning:** When adding SRI (`integrity` and `crossorigin`) to a CDN script tag like Tailwind, the URL must be pinned to a specific version (e.g., `/3.4.17`). If the version is not pinned, future updates by the CDN provider will break the SRI check and block the resource. Furthermore, testing SRI via localhost might fail due to strict CORS policies on the CDN, requiring local caching for functional verification.
**Prevention:** Always use version-pinned URLs when applying SRI to external dependencies.
