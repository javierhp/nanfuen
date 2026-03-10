---
description: Run the Nanfuen Next.js app in development mode
---

// turbo-all

## /run-app

Starts the Nanfuen website locally in development mode with hot reloading.

### Steps

1. Make sure you are in the project root directory (`c:\dev\nanfuen_dev`).

// turbo
2. Run the development server:

```powershell
cd c:\dev\nanfuen_dev && npm run dev
```

3. The app will be available at **http://localhost:3000**.

4. Hot reloading is active — any file changes will automatically reflect in the browser.

### Notes
- The dev server uses **Next.js 14** Pages Router.
- Default locale is **Spanish** (`es`). Switch with `?locale=en` in the URL.
- Static export (`next build`) is only for production — do **not** use `npm run export` for local dev.
- If port 3000 is busy, Next.js will automatically try port 3001, 3002, etc.
