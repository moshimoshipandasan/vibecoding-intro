# 🚀 AI開発環境セットアップガイド 2025

このガイドでは、AI支援開発に必要な環境構築について、Windows と macOS の両環境で詳しく解説します。

---

## 📋 目次

1. [前提条件とシステム要件](#前提条件とシステム要件)
2. [Node.js と Git のセットアップ](#nodejs-と-git-のセットアップ)
3. [Claude Code のインストール](#claude-code-のインストール)
4. [Codex CLI のインストール](#codex-cli-のインストール)
5. [Gemini CLI のインストール](#gemini-cli-のインストール)
6. [トラブルシューティング](#トラブルシューティング)

---

## 🔧 前提条件とシステム要件

### オペレーティングシステム

| ツール | Windows | macOS | Linux |
|--------|---------|-------|--------|
| **Claude Code** | Windows 10+ (WSL 1/2 または Git Bash) | macOS 10.15+ | Ubuntu 20.04+/Debian 10+ |
| **Codex CLI** | Windows 11 (WSL2 経由) | macOS 12+ | Ubuntu 20.04+/Debian 10+ |
| **Gemini CLI** | Windows (ネイティブサポート) | macOS | Linux |

### ハードウェア要件

- **メモリ**: 最低 4GB RAM（8GB 以上推奨）
- **ストレージ**: 2GB 以上の空き容量
- **インターネット接続**: 必須（AI モデルへのアクセスのため）

### ソフトウェア要件

| ツール | Node.js バージョン | その他 |
|--------|--------------------|--------|
| **Claude Code** | 18+ | Git |
| **Codex CLI** | 18+ | Git、Rust（オプション） |
| **Gemini CLI** | 20+ | Git |

---

## 💻 Node.js と Git のセットアップ

### Windows

#### Node.js のインストール

**方法1: 公式インストーラー**
1. [Node.js 公式サイト](https://nodejs.org/) から LTS 版をダウンロード
2. MSI インストーラーを実行（管理者権限）
3. デフォルト設定でインストール

**方法2: Winget（推奨）**
```powershell
# PowerShell を管理者権限で実行
winget install OpenJS.NodeJS.LTS
```

**確認**
```powershell
node -v  # v20.x.x と表示されれば成功
npm -v   # 10.x.x と表示されれば成功
```

#### Git のインストール

**方法1: 公式インストーラー**
1. [Git for Windows](https://gitforwindows.org/) をダウンロード
2. インストーラーを実行
3. Git Bash を含めてインストール

**方法2: Winget**
```powershell
winget install Git.Git
```

### macOS

#### Homebrew のインストール（未インストールの場合）
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Node.js と Git のインストール
```bash
# Node.js をインストール
brew install node

# Git をインストール
brew install git

# バージョン確認
node -v  # v20.x.x
npm -v   # 10.x.x
git --version  # git version 2.x.x
```

---

## 🤖 Claude Code のインストール

### 最新情報（2025年9月）

- **Claude Opus 4.1** 搭載（SWE-bench スコア: 74.5%）
- **Claude 3.7 Sonnet** リリース（リアルタイム & 思考的レスポンス）
- **1M トークン** コンテキストウィンドウ対応（近日実装）
- **新プラン**: Claude Max ($100-200/月) で大規模プロジェクト対応

### Windows

#### WSL2 のセットアップ（推奨）

```powershell
# PowerShell を管理者権限で実行
wsl --install

# WSL2 を既定のバージョンに設定
wsl --set-default-version 2

# Ubuntu をインストール
wsl --install -d Ubuntu-22.04
```

#### Claude Code のインストール

**WSL/Git Bash 内で実行**
```bash
# npm でインストール（推奨）
npm install -g @anthropic-ai/claude-code

# または、ネイティブバイナリ版
curl -fsSL https://claude.ai/install.sh | bash
```

### macOS

```bash
# npm でインストール（推奨）
npm install -g @anthropic-ai/claude-code

# または、ネイティブバイナリ版
curl -fsSL https://claude.ai/install.sh | bash
```

### セットアップと認証

```bash
# インストール確認
claude doctor

# 初回起動
claude

# 認証オプション
# 1. Claude Console (OAuth) - 推奨
# 2. Claude Pro/Max サブスクリプション
# 3. API キー（開発者向け）
```

### 利用可能なモデル

```bash
# モデルを指定して起動
claude --model claude-sonnet-4-20250514  # 最新バランス型
claude --model claude-opus-4-20250514    # 高性能型
claude --model claude-3-5-haiku-20241022  # 高速型
```

---

## 🔮 Codex CLI のインストール

### 最新情報（2025年9月）

- **GPT-5-Codex** リリース（2025年9月15日）
- **料金**: $1.25/100万入力トークン、$10/100万出力トークン
- **新機能**: セッション管理、コンテキスト圧縮、IDE 統合
- **生産性向上**: 200-400% の作業効率改善報告

### Windows（WSL2 経由）

```bash
# WSL2 内で実行
npm install -g @openai/codex

# または最新版へアップグレード
codex --upgrade
```

### macOS

```bash
# Homebrew でインストール
brew install codex

# または npm でインストール
npm install -g @openai/codex
```

### セットアップと認証

```bash
# 初回起動
codex

# 認証方法
# 1. ChatGPT アカウントでサインイン（推奨）
# 2. API キー設定

# バージョン確認
codex --version
```

### 新機能の使用例

```bash
# セッションの再開
codex resume

# IDE 統合（VS Code、Cursor、Windsurf）
# 拡張機能をインストール後、IDE 内から利用可能
```

---

## 💎 Gemini CLI のインストール

### 最新情報（2025年9月）

- **Gemini 2.5 Pro** 搭載（100万トークンコンテキスト）
- **無料枠**: 60リクエスト/分、1,000リクエスト/日
- **新機能**: エクステンションシステム、Zed エディタ統合
- **バージョン 0.4.0**: カスタムスラッシュコマンド強化

### Windows

```powershell
# Node.js 20+ が必要
node -v  # v20 以上であることを確認

# npm でインストール
npm install -g @google/gemini-cli

# または npx で即時実行
npx https://github.com/google-gemini/gemini-cli
```

### macOS

```bash
# Homebrew でインストール
brew install gemini-cli

# または npm でインストール
npm install -g @google/gemini-cli
```

### セットアップと認証

```bash
# 初回起動
gemini

# 認証オプション
# 1. Google アカウントでログイン（無料枠利用）
# 2. Google AI Studio API キー
# 3. Vertex AI 認証（企業向け）

# バージョン確認
gemini --version
```

### エクステンションのインストール

```bash
# Cloud Run エクステンション
gemini extensions install cloud-run

# セキュリティエクステンション
gemini extensions install security
```

---

## 🔍 トラブルシューティング

### 共通の問題と解決策

#### Node.js のバージョン問題

```bash
# 現在のバージョン確認
node -v

# nvm を使用してバージョン管理（推奨）
# Windows: nvm-windows をインストール
# macOS/Linux: nvm をインストール

nvm install 20
nvm use 20
```

#### 権限エラー（npm install 時）

**Windows (PowerShell)**
```powershell
# 管理者権限で実行
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**macOS/Linux**
```bash
# npm のプレフィックスを設定
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

#### プロキシ設定

```bash
# 企業環境でのプロキシ設定
npm config set proxy http://proxy.example.com:8080
npm config set https-proxy http://proxy.example.com:8080
```

### 各ツール固有の問題

#### Claude Code

```bash
# インストールタイプの確認
claude doctor

# 手動アップデート
claude update

# キャッシュクリア
rm -rf ~/.claude/cache
```

#### Codex CLI

```bash
# 設定ファイルの場所
# ~/.codex/config.toml

# MCP サーバー設定の追加
cat >> ~/.codex/config.toml << EOF
[mcp_servers]
# MCP 設定を追加
EOF
```

#### Gemini CLI

```bash
# ログファイルの確認
gemini logs

# 認証のリセット
gemini auth logout
gemini auth login
```

---

## 📊 比較表：2025年9月時点

| 機能 | Claude Code | Codex CLI | Gemini CLI |
|------|------------|-----------|------------|
| **最新モデル** | Opus 4.1, Sonnet 3.7 | GPT-5-Codex | Gemini 2.5 Pro |
| **コンテキスト** | 1M トークン（近日） | 標準 | 1M トークン |
| **無料枠** | なし | なし（要サブスク） | 1,000リクエスト/日 |
| **IDE 統合** | VS Code 拡張 | VS Code, Cursor, Windsurf | Zed エディタ |
| **料金** | $20-200/月 | $1.25/$10 per M tokens | 無料（プレビュー） |
| **強み** | TDD、リファクタリング | エンタープライズ対応 | Google 検索統合 |

---

## 🎯 推奨構成

### 個人開発者
- **メイン**: Gemini CLI（無料枠が充実）
- **サブ**: Claude Code（Claude Pro プラン）

### プロフェッショナル開発者
- **メイン**: Claude Code（Claude Max プラン）
- **サブ**: Codex CLI（GPT-5-Codex）

### エンタープライズ
- **全ツール導入** で用途別に使い分け
- API キーによる管理とコスト制御

---

## 📚 参考リンク

### 公式ドキュメント
- [Claude Code Docs](https://docs.claude.com/en/docs/claude-code/)
- [OpenAI Codex](https://github.com/openai/codex)
- [Google Gemini CLI](https://github.com/google-gemini/gemini-cli)

### コミュニティ
- [Claude Code Discord](https://discord.gg/claude-code)
- [Codex Community](https://community.openai.com/codex)
- [Gemini CLI Discussions](https://github.com/google-gemini/gemini-cli/discussions)

---

*最終更新: 2025年9月29日*

[← ホームに戻る](/) | [次へ: cc-sdd仕様駆動開発 →](/docs/cc-sdd/introduction)