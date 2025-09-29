# はじめ方ガイド

## 📦 インストール

cc-sddは、npxコマンドで簡単にインストールできます。待機リストや事前登録は不要で、すぐに使い始められます。

### 基本インストール

```bash
# デフォルト（英語、Claude Code用）
npx cc-sdd@latest

# 日本語版のインストール（推奨）
npx cc-sdd@latest --lang ja
```

### AIツール別のインストール

#### Claude Code
```bash
npx cc-sdd@latest --lang ja
```

#### Cursor IDE
```bash
npx cc-sdd@latest --cursor --lang ja
```

#### Gemini CLI
```bash
npx cc-sdd@latest --gemini-cli --lang ja
```

#### Qwen Code
```bash
npx cc-sdd@latest --qwen --lang ja
```

## 🔧 初期設定

### ステップ1: プロジェクトディレクトリの準備

```bash
# 新規プロジェクトの場合
mkdir my-project
cd my-project

# 既存プロジェクトの場合
cd existing-project
```

### ステップ2: cc-sddの初期化

```bash
# cc-sddをインストールして初期化
npx cc-sdd@latest --lang ja
```

インストール時に以下のファイルが生成されます：
- `.cursorrules` - AIへの指示ファイル
- `kiro/` - 仕様書を保存するディレクトリ
- `steering.md` - プロジェクトの方向性を記録

### ステップ3: AIツールの起動

#### Claude Codeの場合
```bash
# Claude Codeを起動
claude

# プロジェクトディレクトリで実行
cd my-project
```

#### Cursorの場合
```bash
# Cursorでプロジェクトを開く
cursor .
```

#### Gemini CLIの場合
```bash
# Gemini CLIを起動
gemini-cli

# プロジェクトディレクトリで実行
cd my-project
```

## 🎯 最初の機能開発

### 1. ステアリング（プロジェクト理解）

まず、AIにプロジェクトを理解させます：

```
/kiro:steering
```

このコマンドで以下が実行されます：
- 既存のコードベースの分析
- プロジェクト構造の理解
- 技術スタックの把握
- コーディング規約の認識

### 2. 機能仕様の初期化

開発したい機能を指定します：

```
/kiro:spec-init "ユーザー認証機能を追加"
```

最初は曖昧な要件でも構いません。次のステップで詳細化されます。

### 3. 要件定義

```
/kiro:spec-requirements
```

AIが以下を生成します：
- 詳細な要件定義書
- 受け入れ条件
- 非機能要件
- 制約事項

**⚠️ 重要**: 生成された要件を必ず確認し、必要に応じて修正してください。

### 4. 設計

```
/kiro:spec-design
```

AIが以下を生成します：
- システムアーキテクチャ
- データモデル
- APIインターフェース
- 実装方針

### 5. タスク分解

```
/kiro:spec-tasks
```

設計を実装可能なタスクに分解します：
- [ ] データベーススキーマの作成
- [ ] APIエンドポイントの実装
- [ ] フロントエンドの統合
- [ ] テストの作成

### 6. 実装

```
/kiro:spec-impl
```

TDD（テスト駆動開発）アプローチで実装が進みます：
1. テストの作成
2. 実装
3. リファクタリング

## 📁 プロジェクト構造

cc-sddを使用すると、以下の構造が作られます：

```
my-project/
├── .cursorrules       # AI用の指示ファイル
├── steering.md        # プロジェクトの方向性
├── kiro/             # 仕様書ディレクトリ
│   ├── features/     # 機能仕様
│   │   ├── auth/    # 認証機能の仕様
│   │   │   ├── spec.md
│   │   │   ├── requirements.md
│   │   │   ├── design.md
│   │   │   └── tasks.md
│   │   └── ...
│   └── steering/     # プロジェクト理解
└── src/              # ソースコード
```

## ⚡ クイックスタート例

### 例: ToDoアプリの作成

```bash
# 1. プロジェクト作成
mkdir todo-app
cd todo-app

# 2. cc-sddインストール
npx cc-sdd@latest --lang ja

# 3. Claude Code起動
claude

# 4. 機能開発
/kiro:spec-init "ToDoアプリを作成。タスクの追加、編集、削除、完了機能"
/kiro:spec-requirements
/kiro:spec-design
/kiro:spec-tasks
/kiro:spec-impl
```

## 🔍 トラブルシューティング

### インストールが失敗する場合

```bash
# Node.jsのバージョン確認（16以上が必要）
node --version

# npmキャッシュクリア
npm cache clean --force

# 再インストール
npx cc-sdd@latest --lang ja
```

### コマンドが認識されない場合

AIツールで`.cursorrules`ファイルが読み込まれているか確認：

```bash
# ファイルの存在確認
ls -la .cursorrules

# 内容確認
cat .cursorrules
```

### 日本語が文字化けする場合

ターミナルの文字エンコーディングをUTF-8に設定：

```bash
# Windowsの場合
chcp 65001

# macOS/Linuxの場合
export LANG=ja_JP.UTF-8
```

## 📚 次のステップ

- 🔄 [ワークフローの詳細](/docs/cc-sdd/workflow) - 開発プロセスを深く理解
- 📝 [コマンドリファレンス](/docs/cc-sdd/commands) - 全コマンドの詳細
- 🎯 [ベストプラクティス](/docs/cc-sdd/best-practices) - 効率的な使い方

---

*準備ができたら、実際のプロジェクトでcc-sddを試してみましょう！*