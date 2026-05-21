## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-21 - Add Content Security Policy
**Vulnerability:** Missing Content Security Policy (CSP) headers or meta tags allowed all external scripts, styles, and inline code to run, creating a significant Cross-Site Scripting (XSS) risk.
**Learning:** Static HTML applications without a backend cannot send HTTP response headers, but they can still implement a CSP using a `<meta http-equiv="Content-Security-Policy">` tag in the `<head>`.
**Prevention:** Always add a baseline CSP to static single-page applications. When using external resources like the Tailwind CDN, explicitly whitelist their domains (`https://cdn.tailwindcss.com`) while restricting `default-src` to `'self'` to enforce a defense-in-depth posture against unauthorized resource injection.
