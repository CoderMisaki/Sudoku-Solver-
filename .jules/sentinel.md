## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-15 - Content Security Policy for CDN Tooling
**Vulnerability:** Missing Content Security Policy (CSP) headers, allowing arbitrary external scripts or styles to be loaded, increasing XSS risk.
**Learning:** When using external styling libraries via CDN like Tailwind CSS, a strict CSP must explicitly whitelist the CDN domain (`https://cdn.tailwindcss.com`) in `script-src` and allow `'unsafe-inline'` to ensure the framework functions correctly without breaking the application rendering.
**Prevention:** Always implement a CSP as a defense-in-depth measure. When relying on external CDNs for core application functionality without a build system, carefully construct `script-src` and `style-src` directives to balance security with operational requirements.
