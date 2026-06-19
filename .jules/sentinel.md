## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-30 - Missing Content Security Policy
**Vulnerability:** Missing Content Security Policy (CSP) headers in `index.html`.
**Learning:** The application lacked basic protection against XSS and unauthorized resource loading, likely because it is a simple client-side only HTML application.
**Prevention:** Always include a baseline `<meta http-equiv="Content-Security-Policy">` tag even in simple HTML files, restricting default sources to 'self' and explicitly allowing necessary inline scripts, styles, and CDNs (like Tailwind).
