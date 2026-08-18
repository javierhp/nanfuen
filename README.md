# nanfuen

This is a personal repository used to keep my bonsai profile page.

Technologies used:

- Next.js
- Plain javaScript
- Bootstrap

The web is pre build and only distributable files gets into release branch using the command exportAndPublish

## Development

### Run Website Locally
```powershell
npm run dev
# Opens at http://localhost:3000
```

### Run Product Editor (Catalog & Discount Management)
To edit products, prices, stock availability, and promotional discounts without manually modifying `public/data/prodcuts.json`:

```powershell
npm run editor
# Opens at http://localhost:3001
```

**Features**:
- Search, filter by category (`Pot`, `Tools`, `tree`), availability, and discount status.
- Instant stock status toggle (`YES` / `NO`).
- Promotional discount campaign configuration with start and end dates.
- Add, edit, duplicate, and delete products.
- Automated versioned backups before every save in `tools/product-editor/backups/`.
- Safe separation from the static export bundle.

