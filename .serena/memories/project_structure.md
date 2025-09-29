# VibeCoding Intro Project Structure

## Overview
This is a VitePress-based documentation site for "Vibe Coding" - a revolutionary programming approach where developers use natural language to create software with AI assistance.

## Directory Structure

```
vibecoding-intro/
├── index.md                       # Homepage with Vibe Coding introduction
├── docs/                          # Hierarchically organized content
│   ├── beginner/                 # 初心者向けガイド
│   │   ├── chapter01.md          # 基本概念を理解する
│   │   ├── chapter02.md          # AIツールのセットアップ
│   │   └── chapter03.md          # 最初のアプリを作る
│   ├── intermediate/             # 実践ガイド
│   │   ├── prompt-engineering.md # プロンプトエンジニアリング入門
│   │   ├── dialogue-techniques.md # 効果的な対話テクニック
│   │   └── troubleshooting.md    # よくあるトラブルと対処法
│   └── advanced/                 # 上級テクニック
│       ├── complex-apps.md       # 複雑なアプリケーション構築
│       ├── ai-debugging.md       # AIとの協調デバッグ
│       ├── performance.md        # パフォーマンス最適化
│       └── deployment.md         # 本番環境へのデプロイ
├── .vitepress/
│   └── config.js                 # VitePress configuration with navigation
└── .github/
    └── workflows/
        └── deploy.yml            # GitHub Actions deployment

```

## Key Features
- Japanese language site (ja-JP)
- Hierarchical content organization
- GitHub Pages deployment ready
- Three AI tools featured: Claude Code, Codex CLI, Gemini CLI
- Progressive learning path from beginner to advanced

## Navigation Structure
- Sidebar with collapsible sections
- Top navigation with dropdown menus
- Inter-page navigation links (previous/next)

## Deployment
- Base URL: `/vibecoding-intro/`
- GitHub Actions workflow configured
- Dev server: `npm run dev` (http://localhost:5173/vibecoding-intro/)