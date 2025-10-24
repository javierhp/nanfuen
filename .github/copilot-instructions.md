# Copilot / Contributor Instructions

This file gives a concise overview of the `nanfuen` project, the installed packages, common dev commands, coding conventions, and suggested modernization/refactor goals.

## Project summary

- Purpose: personal bonsai profile page.
- Framework: Next.js (React) using plain JavaScript and Bootstrap for styling.
- Repo layout highlights: pages, components, public, data, styles and a small scripts set in `package.json`.

Status update (local)

- ESLint + Prettier were added to the repository and devDependencies were installed.
- Prettier was run and formatted the codebase. ESLint was run as a sanity check: final run reported ~101 problems (8 errors, 93 warnings) before ignoring generated files; most remaining issues are accessibility (missing image alts and unescaped apostrophes) and missing PropTypes. A `.eslintignore` was added to avoid linting build/output files.

This file below includes recommended next steps and an incremental plan to address remaining items.

## Installed dependencies

The project uses the following direct dependencies (from `package.json`):

- next: latest (Next.js framework)
- react: 18.2.0
- react-dom: 18.2.0
- bootstrap: ^5.2.3
- react-bootstrap: ^2.7.1

Note: `next` is pinned to `latest` in `package.json`. During modernization we should pin to a specific supported version (for reproducible builds) or use a lockfile.

## Useful npm scripts

- `npm run dev` — Start Next.js in development mode (hot reload).
- `npm run build` — Build the Next.js app for production.
- `npm run start` — Start the built app (requires `build`).
- `npm run export` — Build and export a static site (runs `next build && next export`).

There is also an `exportAndPublish.cmd` script in the repo root referenced in the README; inspect it before using.

## Quick Dev steps

1. Install deps: `npm install`
2. Run dev server: `npm run dev`
3. Build for production: `npm run build`
4. Export static site for publishing: `npm run export` or run `exportAndPublish.cmd` if that encapsulates your publishing steps.

## Coding & style notes

- The codebase currently uses plain JavaScript and Next.js pages-based routing.
- CSS lives in `styles/` and component-level CSS modules (e.g., `layout.module.css`).
- Keep components small and focused; prefer presentational components in `components/` and data-driven pages in `pages/` or `pages/catalog` and `pages/products`.
- When adding new code, follow existing naming and folder conventions.

## Suggested modernization and refactor goals (incremental)

Start small and establish quality tooling before large rewrites.

2. Add type safety (optional, iterative)
   - Consider migrating to TypeScript gradually. Start by adding TS config and enabling `allowJs` + `checkJs` for a transitional period.
   - Convert small components/pages to `.tsx` one at a time.

4. Improve folder structure (if needed)
   - Group related components into subfolders with index files
   - Extract utility functions into a `lib/` or `utils/` folder and add unit tests.

5. Accessibility & performance
   - Run Lighthouse audits, fix common issues (images, meta tags, semantic HTML).

7. Revamp page design (modernize UI)
   - Approach this incrementally: pick one page (for example `pages/index.js`) and propose a modern redesign as a single PR.
   - Suggestions Copilot can provide: updated layout with CSS Grid/Flexbox, simplified header/navigation, accessible color palette, new typography scale (use system fonts or add Google Fonts), consistent card/grid components for products, and improved spacing.
   - Keep a feature-flagged approach if you want to deploy incrementally (e.g., a CSS module switch or a `revamp` query param). This reduces risk and lets you A/B test.
   - When accepting UI changes from Copilot, request small diffs with preview instructions (what to look for visually and accessibility checks).

## Low-risk first PRs (good starter tasks)
- Add Husky + lint-staged to enforce formatting/linting on commit.
- Pin `next` to a specific version and run the app to confirm nothing breaks.
- Add a lockfile by running `npm install` and committing `package-lock.json`.
- Move duplicated utility code into a `utils/` file and add a unit test.

## Maintainer notes for Copilot

- When suggesting changes, prefer small, incremental edits and mention tests/linters that will catch regressions.
- Keep PRs focused: one change type per PR (tooling, refactor, feature, or dependency upgrade).
- When proposing to migrate to TypeScript, present a migration plan and an initial sample conversion (1-2 small components) rather than converting everything at once.

## Commands (Windows PowerShell)

```powershell
npm install
npm run dev
npm run build
npm run export
;# to run publish helper if present
; & .\exportAndPublish.cmd
```

## Next steps I can take for you

- Set up Husky + lint-staged to run Prettier/ESLint on pre-commit.
- Create a `package-lock.json` by running `npm install` and commit it.
- Pin `next` to a specific version and run the dev server to validate.

If you'd like, tell me which of the next steps to start and I'll implement it.

---

Generated on demand to help contributors and Copilot get started modernizing and refactoring this repo.
