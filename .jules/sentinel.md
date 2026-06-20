## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.
## 2024-05-24 - Content Security Policy Constraints
**Vulnerability:** Missing Content Security Policy (CSP) allows unrestricted external resource loading and inline script execution.
**Learning:** The application relies on dynamically generated styles from the Tailwind CSS CDN and inline script logic, which requires allowing 'unsafe-inline' in script-src and style-src directives.
**Prevention:** Implement a baseline CSP with 'unsafe-inline' to restrict other domains while maintaining current architectural functionality.
