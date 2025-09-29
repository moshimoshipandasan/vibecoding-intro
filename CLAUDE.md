# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress-based documentation site configured for GitHub Pages deployment. The site is in Japanese and features a navigation menu with sidebar and navbar, containing 10 content pages.

## Essential Commands

```bash
# Development
npm run dev       # Start dev server on http://localhost:5173

# Build
npm run build     # Build static site to .vitepress/dist/

# Preview
npm run preview   # Preview built site locally

# Install dependencies
npm install       # Install VitePress and dependencies
```

## Key Configuration

### Base URL Configuration
The site is configured to deploy to `/vibecoding-intro/` on GitHub Pages. If the repository name changes, update:
- `.vitepress/config.js`: `base: '/new-repository-name/'`

### VitePress Configuration Structure
- **Main config**: `.vitepress/config.js` - Contains all navigation, theme, and site settings
- **Navigation**: Defined in `themeConfig.nav` and `themeConfig.sidebar`
- **Language**: Set to `ja-JP` (Japanese)
- **Search**: Local search provider enabled

### Content Structure
- **Homepage**: `index.md` - Uses VitePress home layout with hero section
- **Content pages**: Organized hierarchically in `docs/` directory:
  - `docs/beginner/` - Chapter 01-03 (基本概念、環境構築、初めてのアプリ)
  - `docs/intermediate/` - プロンプトエンジニアリング、対話テクニック、トラブルシューティング
  - `docs/advanced/` - 複雑なアプリ構築、デバッグ、最適化、デプロイ
- **Each page includes**: Section headers, code blocks, tables, and navigation links to previous/next pages

## Deployment Architecture

### GitHub Actions Workflow
- **Trigger**: Pushes to `main` branch or manual workflow dispatch
- **Build environment**: Ubuntu latest with Node.js 20
- **Output**: Static files deployed to GitHub Pages
- **Build path**: `.vitepress/dist/`

### GitHub Pages Setup Required
1. Repository Settings → Pages → Source: "GitHub Actions"
2. The workflow will automatically deploy on push to main branch

## Important Notes

- **ESM Module**: Project uses `"type": "module"` in package.json (required for VitePress)
- **Node version**: Requires Node.js 20+ for GitHub Actions build
- **Build output**: Generated files go to `.vitepress/dist/` (gitignored)
- **Cache files**: VitePress cache in `.vitepress/cache/` (gitignored)