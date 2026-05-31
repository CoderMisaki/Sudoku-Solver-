## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-20 - Subresource Integrity (SRI) on External CDNs
**Vulnerability:** The Tailwind CSS CDN was loaded without version pinning or an SRI hash (`<script src="https://cdn.tailwindcss.com"></script>`). This creates a vulnerability where a compromised CDN could serve malicious JavaScript to all users of the application.
**Learning:** External dependencies loaded directly into the browser run with the same privileges as the application. Without SRI, the application implicitly trusts the CDN not to be compromised or to accidentally serve bad code.
**Prevention:** Always pin external resources to specific versions and apply Subresource Integrity (SRI) attributes (`integrity="sha384-..." crossorigin="anonymous"`) to ensure the browser only executes the exact expected file.
