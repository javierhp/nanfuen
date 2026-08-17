# Specification: Internal Product Editor UI

## Overview
As a sales person, I want to edit products using a lightweight and non-fancy user interface, avoiding manual edits to the `public/data/prodcuts.json` file. This UI must **not** be included in the final production bundle deployed to GitHub Pages.

## Architecture & Approach

Since this application is statically exported (`next export`) and published to GitHub Pages, any internal backend or editor UI needs to remain strictly local.

### Recommended Approach: Local Development Tool
Create a standalone local Node.js application or a separate hidden Next.js page that is explicitly excluded from the production build. A separate local Express + React/HTML tool is usually safest to guarantee it doesn't leak into the Next.js bundle.

### Option A: Local Express + Simple React/HTML app (Preferred for strict separation)
- Create a directory `tools/product-editor`.
- Implement a lightweight Node.js Express server that runs locally on a different port (e.g., 3001).
- The server provides a basic REST API to `GET` and `POST` to `public/data/prodcuts.json`.
- Serve a simple HTML/JS (or lightweight React) frontend from this Express server.
- **UI Requirements**:
  - List all products in a simple table.
  - Form to edit basic fields (`name`, `priceARS`, `available`, `type`).
  - Form to edit the new discount fields (`discountPercentage`, `discountStartDate`, `discountEndDate`).
  - "Save" button that writes back to the JSON file.

### Option B: Next.js API Route + Admin Page (Alternative)
- Create an API route in `pages/api/products.js` to read/write the JSON.
- Create a page `pages/admin/editor.js`.
- **CRITICAL**: Configure `next.config.js` or `exportAndPublish.cmd` to strictly ignore/exclude the `pages/admin` and `pages/api` directories during the static export process to ensure they never reach GitHub Pages.

## Agent Tasks
1. Choose the approach (Option A is highly recommended for complete decoupling from the static export).
2. Build the lightweight backend server/script to read and write to `public/data/prodcuts.json`.
3. Build the non-fancy frontend UI (HTML/CSS/JS or simple React) with a data grid or list to edit the JSON values.
4. Add a command to `package.json` (e.g., `"editor": "node tools/product-editor/server.js"`) to easily launch the tool locally.
5. Ensure the tool is documented in the README so the salesperson knows how to run it.
