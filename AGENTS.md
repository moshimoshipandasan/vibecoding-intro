# Repository Guidelines

This repository hosts the VitePress site "はじめてのVibe Coding". Follow the guidance below to keep documentation consistent, buildable, and ready for GitHub Pages deployment.

## Project Structure & Module Organization
- `.vitepress/config.js`: single source for site title, navigation, sidebar, search, and footer. Preserve the existing 2-space indentation and keep navigation labels in Japanese when updating.
- `index.md`: landing page. Use it for the top-level overview and cross-links into the guides.
- `docs/cc-sdd/`, `docs/environment/`, `docs/github-codespaces-codex/`: topic-specific guides. Create new pages in kebab-case (e.g., `ai-overview.md`) and register them in the sidebar.
- `.github/workflows/deploy.yml`: GitHub Pages pipeline. Adjust its branch or secret references whenever deployment settings change.

## Build, Test, and Development Commands
- `npm install`: install VitePress and supporting tooling.
- `npm run dev`: launch the hot-reload dev server at `http://localhost:5175/`. Review both light and dark themes after UI edits.
- `npm run build`: generate static assets in `.vitepress/dist/` and surface broken links or config errors.
- `npm run preview`: serve the production build locally for a final smoke test.

## Coding Style & Naming Conventions
- Markdown: start pages with a single `#` title, use descending `##`/`###` hierarchy, and keep sections concise.
- File names: kebab-case in English for consistency (e.g., `agent-workflow.md`).
- JavaScript config: respect existing 2-space indentation, trailing commas, and comment style. Keep emoji-prefixed labels aligned with the current tone.

## Testing Guidelines
- No automated test suite exists. Run `npm run build` before each PR to catch structural regressions.
- After layout or theme changes, verify the dev server manually on desktop and mobile viewports, toggling dark mode. Capture any issues for the PR description.

## Commit & Pull Request Guidelines
- Use Conventional Commits (`feat:`, `fix:`, `docs:`, etc.). Limit each commit to one logical change and explain the intent in the message body when needed.
- PRs should summarize the scope, list manual verification steps (build, preview, screenshots for navigation or layout tweaks), and link relevant issues.

## Security & Configuration Tips
- When modifying deployment, confirm the `base` path in `.vitepress/config.js` and GitHub Pages settings stay in sync.
- Never commit secrets; store credentials as GitHub Actions secrets referenced in `.github/workflows/deploy.yml`.
