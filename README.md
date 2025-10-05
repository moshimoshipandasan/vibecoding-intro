# Vibe Coding Intro ドキュメントサイト

VitePress で構築した「はじめての Vibe Coding」用ドキュメントです。環境構築から仕様駆動開発 (SDD) まで、Codex CLI を活用したワークフローをまとめています。

## 🗂 主要ドキュメント

- [ホーム (`index.md`)](/)
- [AI開発環境セットアップガイド](/docs/environment/setup-guide)
- [cc-sdd 仕様駆動開発ガイド](/docs/cc-sdd/introduction)
- [GitHub Codespaces × Codex 手順](/docs/github-codespaces-codex/setup-guide)
- [Spec Driven Codex 概要](/docs/spec-driven-codex/)
- [Spec Driven Codex 実践ガイド](/docs/spec-driven-codex/practical-guide)

詳細なコントリビューション手順は `AGENTS.md` を参照してください。

## ⚙️ セットアップ

```bash
npm install
```

開発サーバーを起動する場合は次を実行し、`http://localhost:5175/` で確認します。

```bash
npm run dev
```

## 🔁 開発フロー

1. ドキュメントや設定を編集したら `npm run build` でリンク切れやビルドエラーを確認
2. 必要に応じて `npm run preview` で本番ビルドをローカル配信
3. レイアウト変更時は `npm run dev` 上でライト／ダークテーマを確認し、必要ならスクリーンショットを取得
4. Spec Driven Codex の成果物は `docs/spec-driven-codex/` 以下にまとめ、`.vitepress/config.js` のサイドバーへ追記します

## 🚀 デプロイ

GitHub Actions (`.github/workflows/deploy.yml`) が `main` ブランチの変更を検知して GitHub Pages に自動デプロイします。リポジトリ名に合わせて `base: '/vibecoding-intro/'` を設定済みです。リポジトリ名を変更した場合は `config.js` の `base` と Pages 設定を同期してください。

## 📁 ディレクトリ構成

```
vibecoding-intro/
├── .github/workflows/deploy.yml    # GitHub Pages 用ワークフロー
├── .vitepress/config.js            # サイト設定（ナビ・サイドバーなど）
├── docs/
│   ├── cc-sdd/                     # cc-sdd 関連ガイド
│   ├── environment/                # 環境構築ガイド
│   ├── github-codespaces-codex/    # Codespaces × Codex 手順
│   └── spec-driven-codex/          # Spec Driven Codex の概要・実践資料
├── index.md                        # トップページ
├── AGENTS.md                       # コントリビューションガイド
├── package.json / package-lock.json
└── README.md
```

## 📝 開発ルール（抜粋）

- Markdown ファイル名はケバブケースで作成し、見出しは `#` → `##` → `###` の順に使用
- `.vitepress/config.js` は 2 スペースインデントを維持し、ナビゲーション文言は日本語で統一
- 変更前後で `npm run build` を実行し、PR には手動検証内容を記載

この README と `AGENTS.md` を起点に、Vibe Coding のドキュメントを継続的に充実させてください。
