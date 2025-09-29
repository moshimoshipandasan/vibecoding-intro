# VibeCoding Intro - VitePress Site

VitePressを使用して構築されたGitHub Pages用のドキュメントサイトです。

## 🚀 機能

- ✅ サイドバーとナビバー付きのナビゲーション
- ✅ 10個のコンテンツページ（Page 01〜Page 10）
- ✅ レスポンシブデザイン
- ✅ ダークモード対応
- ✅ 検索機能
- ✅ GitHub Actions自動デプロイ

## 📦 セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開いてサイトを確認できます。

### 3. 本番用ビルド

```bash
npm run build
```

### 4. ビルド結果のプレビュー

```bash
npm run preview
```

## 🌐 GitHub Pagesへのデプロイ

### base URLの設定

base URLはリポジトリ名 `vibecoding-intro` に設定済みです：

```javascript
base: '/vibecoding-intro/',
```

**注意**: リポジトリ名を変更する場合は、`.vitepress/config.js`のbase設定も更新してください。

### デプロイ手順

1. GitHubで新しいリポジトリを作成
2. このプロジェクトをGitで初期化してプッシュ：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[username]/[repository-name].git
git push -u origin main
```

3. GitHubリポジトリの設定：
   - Settings → Pages へ移動
   - Source: "GitHub Actions" を選択

4. GitHub Actionsが自動的に実行され、サイトがデプロイされます
5. デプロイ完了後、`https://[username].github.io/[repository-name]/`でアクセス可能

## 📁 プロジェクト構造

```
vibecoding-intro/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions設定
├── .vitepress/
│   └── config.js            # VitePress設定
├── index.md                 # ホームページ
├── page01.md〜page10.md     # コンテンツページ
├── package.json             # プロジェクト設定
├── .gitignore              # Git除外設定
└── README.md               # このファイル
```

## 🎨 カスタマイズ

### ページの編集

各Markdownファイル（`.md`）を編集して、コンテンツを自由にカスタマイズできます。

### ナビゲーションの変更

`.vitepress/config.js`の`nav`と`sidebar`セクションを編集して、メニュー構造を変更できます。

### テーマのカスタマイズ

VitePressの[公式ドキュメント](https://vitepress.dev/)を参考に、さらなるカスタマイズが可能です。

## 📝 ライセンス

このプロジェクトはサンプルプロジェクトです。自由に使用・改変してください。