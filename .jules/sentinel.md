## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-25 - Third-Party Script Security
**Vulnerability:** Loading external scripts (like Tailwind CSS CDN) without integrity checks or a Content Security Policy allows third parties to execute arbitrary code or introduce malicious modifications.
**Learning:** External CDNs can be compromised, and their scripts could be maliciously altered. Additionally, without CSP, any injected script or style can execute, posing significant XSS risks.
**Prevention:** Always pin third-party scripts to specific versions and apply Subresource Integrity (SRI) attributes. Enforce strict Content Security Policies (CSP) using `default-src 'self'` and specifically whitelist required external origins like `https://cdn.tailwindcss.com`.
