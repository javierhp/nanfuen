---
description: Run the Nanfuen Product Editor tool locally
---

// turbo-all

## /run-editor

Starts the Nanfuen internal Product Editor web application locally.

### Steps

1. Make sure you are in the project root directory (`c:\dev\nanfuen_dev`).

// turbo
2. Run the product editor server:

```powershell
cd c:\dev\nanfuen_dev && npm run editor
```

3. Open your browser and navigate to **http://localhost:3001**.

4. Use the interface to:
   - Search and filter products across categories (Pots, Tools, Trees).
   - Toggle availability (`YES` / `NO`) in one click.
   - Configure promotional percentage discounts with start and end dates.
   - Add new products or duplicate existing items.
   - Save changes directly to `public/data/prodcuts.json` (automatic backups are created before every save).

### Notes
- The editor is completely decoupled from the Next.js production build and static export (`next export`).
- Backups are stored in `tools/product-editor/backups/` and can be restored at any time via the UI.
- Port 3001 is used by default to prevent conflicts with the Next.js dev server running on port 3000.
