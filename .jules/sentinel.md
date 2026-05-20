## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-20 - Ensure Tailwind CDN Compatibility in CSP
**Vulnerability:** Missing Content Security Policy (CSP) allowed potentially untrusted scripts to run.
**Learning:** When adding a CSP to an application that relies on Tailwind CSS via CDN, the `script-src` directive must explicitly allow `https://cdn.tailwindcss.com` alongside `'unsafe-inline'` to prevent breaking the application's styles. Without this allowance, the browser will block the Tailwind runtime script, causing the application to render unstyled.
**Prevention:** Always verify external script dependencies (like CDNs) before implementing or modifying a CSP, and include them in the allowed sources for the `script-src` directive. Verify CSP functionality visually (e.g., with Playwright) and through console logs to catch blocked resources early.
