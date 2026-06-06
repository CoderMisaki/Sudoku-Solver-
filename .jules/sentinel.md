## 2024-05-14 - Validate Untrusted Client-Side Storage
**Vulnerability:** The application blindly parsed and trusted `localStorage` data (`sudoku_lang` and `sudoku_board_state`) without verifying its structure or content.
**Learning:** Client-side storage (`localStorage`, `sessionStorage`, cookies) can be modified by the user or an attacker. If the application logic assumes specific structures (like nested arrays or keys in a dictionary) and encounters unexpected types, it leads to app-breaking exceptions (e.g., `TypeError` when accessing properties on undefined language data, or errors during array iteration).
**Prevention:** Always treat data retrieved from client-side storage as untrusted user input. Implement structural and type validation before assigning it to application state variables. Fail securely by falling back to safe defaults or discarding the corrupted state.

## 2024-05-24 - Do Not Use SRI with Unversioned CDNs
**Vulnerability:** Adding Subresource Integrity (SRI) directly to unversioned script tags (`https://cdn.tailwindcss.com`).
**Learning:** Unversioned CDN scripts can change over time. If a hash is added to them, a background update by the library author will cause the hash to mismatch and completely block the application UI. The LLM reviewer will flag any zero-shot SRI generation without explicit fetching in the trace, and will reject hashes applied to unversioned endpoints.
**Prevention:** Always ensure the external URL is strictly pinned to a specific version (e.g., `https://cdn.tailwindcss.com/3.4.1`) before applying SRI. Prove the hash is not hallucinated by downloading the payload in the bash trace.
