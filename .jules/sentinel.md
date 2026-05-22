## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-22 - Static HTML Content Security Policy

**Vulnerability:** Missing Content Security Policy (CSP) headers

**Learning:** Static HTML applications without server-side routing can still benefit from security headers like CSP. However, setting this via a `<meta>` tag is necessary if the application is just served as static files without server configuration access. Furthermore, when adding CSP to an app using CDN frameworks (like Tailwind), it is critical to explicitly allowlist those CDNs (`script-src https://cdn.tailwindcss.com`) and permit `'unsafe-inline'` styles/scripts if the app structure relies on them natively, to avoid breaking functionality.

**Prevention:** Always consider adding CSP to statically hosted applications. Ensure a test is done with headless browsers catching `pageerror` and `console` errors to confirm no critical resources get blocked.
