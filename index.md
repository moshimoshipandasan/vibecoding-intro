---
layout: home

hero:
  name: "はじめてのVibe Coding"
  text: "AIと対話して作る次世代プログラミング"
  tagline: 「英語が新しいプログラミング言語になる」- Andrej Karpathy
  actions:
    - theme: brand
      text: 🚀 環境構築を始める
      link: /docs/environment/setup-guide
    - theme: alt
      text: 💡 cc-sddを学ぶ
      link: /docs/cc-sdd/introduction

features:
  - icon: 🤖
    title: AI開発環境
    details: Claude Code、Codex CLI、Gemini CLIを使った最新のAI支援開発環境。2025年9月最新版の完全ガイド。
    link: /docs/environment/setup-guide
    linkText: セットアップガイド →

  - icon: 🎯
    title: 仕様駆動開発 cc-sdd
    details: AWS Kiro互換の仕様駆動開発フレームワーク。4週間のスプリントを3時間のBoltサイクルに短縮。
    link: /docs/cc-sdd/introduction
    linkText: cc-sddを始める →

  - icon: 🌟
    title: Vibe Coding
    details: コード不要でアイデアを形に。自然言語でAIと対話しながら、複雑なアプリケーションを構築。
    link: #what-is-vibe-coding
    linkText: Vibe Codingとは →
---

<style>
.VPFeature {
  cursor: pointer;
  transition: all 0.3s ease;
}
.VPFeature:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}
.VPHero .tagline {
  font-style: italic;
  opacity: 0.9;
}
</style>

## 🌈 Vibe Codingとは？ {#what-is-vibe-coding}

**Vibe Coding（バイブコーディング）** は、2025年にOpenAIの共同創業者であるAndrej Karpathy氏が提唱した、**AIと自然言語で対話しながらソフトウェアを作る革新的な開発手法**です。

> 「最もホットな新しいプログラミング言語は英語だ」
> — Andrej Karpathy

### 💡 なぜVibe Codingなのか？

<div class="feature-grid">

| 従来のプログラミング | Vibe Coding |
|:---:|:---:|
| 🔤 構文を覚える必要がある | 💬 自然言語で指示 |
| 🐛 デバッグに時間がかかる | ⚡ AIが自動修正 |
| 📚 学習に数ヶ月〜数年 | 🚀 今日から始められる |
| 🔧 コードの詳細を理解必須 | 💡 アイデアに集中できる |

</div>

---

## 🛠️ 3つのAI開発ツール {#ai-tools}

<div class="tools-comparison">

### 🤖 Claude Code
**Anthropic / Opus 4.1搭載**
- 1Mトークンコンテキスト（近日実装）
- TDD・リファクタリング特化
- $20-200/月（Claude Max）

### 🔮 Codex CLI
**OpenAI / GPT-5-Codex**
- エンタープライズ対応
- IDE統合・セッション管理
- $1.25/$10 per Mトークン

### 💎 Gemini CLI
**Google / Gemini 2.5 Pro**
- 100万トークンコンテキスト
- 無料枠：1,000リクエスト/日
- Google検索統合

</div>

📌 **[詳しいセットアップ手順はこちら](/docs/environment/setup-guide)** - Node.js、Git、各AIツールの完全インストールガイド

---

## 🚀 はじめ方：2つのアプローチ {#getting-started}

<div class="approach-cards">

### 📝 仕様駆動開発（cc-sdd）
**体系的・品質重視のアプローチ**

1. **Steering** - プロジェクトの方向性を定義
2. **Init** - 基盤とアーキテクチャ設計
3. **Requirements** - 詳細な要件定義
4. **Design** - 技術設計とモックアップ
5. **Tasks** - タスク分解と計画
6. **Implementation** - 段階的な実装

👉 [cc-sddワークフローを学ぶ](/docs/cc-sdd/workflow)

### 💬 対話型開発（Vibe Coding）
**アジャイル・探索的アプローチ**

1. **AIツールを起動**
   ```bash
   claude  # または codex, gemini
   ```

2. **自然言語で指示**
   ```
   「ToDoアプリを作って。タスクの追加・削除・
   完了チェック機能付きで、パステルカラーのデザインで」
   ```

3. **対話で改善**
   ```
   「ボタンをもっと大きく」
   「ダークモードを追加」
   ```

</div>

---

## 📊 開発スタイル比較 {#comparison}

<table class="comparison-table">
<thead>
<tr>
<th>項目</th>
<th>🎯 Vibe Coding</th>
<th>📝 cc-sdd</th>
<th>🔨 従来の開発</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>開発速度</strong></td>
<td>⚡ 超高速</td>
<td>🚀 高速</td>
<td>🐢 通常</td>
</tr>
<tr>
<td><strong>品質保証</strong></td>
<td>🔄 対話的</td>
<td>✅ 体系的</td>
<td>📋 手動</td>
</tr>
<tr>
<td><strong>学習曲線</strong></td>
<td>📈 緩やか</td>
<td>📊 中程度</td>
<td>📉 急</td>
</tr>
<tr>
<td><strong>適用規模</strong></td>
<td>個人・小規模</td>
<td>チーム・大規模</td>
<td>全規模</td>
</tr>
<tr>
<td><strong>コスト</strong></td>
<td>💰 低〜中</td>
<td>💵 中〜高</td>
<td>💸 高</td>
</tr>
</tbody>
</table>

---

## 🎯 プロジェクトタイプ別推奨 {#recommendations}

<div class="recommendation-cards">

### 🎨 個人プロジェクト
**Vibe Coding + Gemini CLI**
- 無料枠で十分
- 高速プロトタイピング
- 創造的な自由度

### 🏢 スタートアップ
**cc-sdd + Claude Code**
- 品質とスピードのバランス
- Claude Maxプラン
- TDD対応

### 🏭 エンタープライズ
**cc-sdd + 全ツール導入**
- 完全な品質管理
- API統合
- チーム開発対応

</div>

---

## 📚 学習リソース {#resources}

<div class="resource-links">

### 🔧 環境構築
- [AI開発環境セットアップガイド](/docs/environment/setup-guide)
- Node.js、Git、AI CLIツールの完全ガイド

### 🚀 cc-sdd ドキュメント
- [cc-sddとは](/docs/cc-sdd/introduction)
- [はじめ方ガイド](/docs/cc-sdd/getting-started)
- [ワークフロー詳細](/docs/cc-sdd/workflow)
- [コマンドリファレンス](/docs/cc-sdd/commands)
- [ベストプラクティス](/docs/cc-sdd/best-practices)

### 🌐 外部リソース
- [Claude Code Docs](https://docs.claude.com/en/docs/claude-code/)
- [OpenAI Codex](https://github.com/openai/codex)
- [Google Gemini CLI](https://github.com/google-gemini/gemini-cli)

</div>

---

## 🌟 次のステップ {#next-steps}

<div class="cta-section">

### 今すぐ始める準備はできましたか？

1. **[環境構築ガイド](/docs/environment/setup-guide)** でAIツールをインストール
2. **[cc-sdd入門](/docs/cc-sdd/introduction)** で体系的な開発手法を学ぶ
3. **実際にプロジェクトを作成** して、AIと協働開発を体験

<div class="cta-buttons">
  <a href="/docs/environment/setup-guide" class="cta-primary">🚀 環境構築を始める</a>
  <a href="/docs/cc-sdd/introduction" class="cta-secondary">📚 cc-sddを学ぶ</a>
</div>

</div>

---

<style>
.feature-grid {
  margin: 2rem 0;
}

.feature-grid table {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.tools-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.tools-comparison h3 {
  margin-top: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-brand);
}

.approach-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.approach-cards > div {
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
}

.comparison-table {
  width: 100%;
  margin: 3rem 0;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.comparison-table th {
  background: var(--vp-c-brand);
  color: white;
  padding: 1rem;
  text-align: center;
}

.comparison-table td {
  padding: 1rem;
  text-align: center;
  border: 1px solid var(--vp-c-border);
}

.comparison-table tbody tr:nth-child(even) {
  background: var(--vp-c-bg-soft);
}

.recommendation-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.recommendation-cards > div {
  padding: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--vp-c-bg-soft), var(--vp-c-bg));
  border: 1px solid var(--vp-c-brand);
  transition: transform 0.3s ease;
}

.recommendation-cards > div:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.resource-links {
  margin: 3rem 0;
}

.resource-links h3 {
  color: var(--vp-c-brand);
  margin-top: 2rem;
}

.resource-links ul {
  list-style: none;
  padding-left: 1rem;
}

.resource-links li {
  margin: 0.5rem 0;
}

.resource-links a {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.3s ease;
}

.resource-links a:hover {
  color: var(--vp-c-brand-dark);
  text-decoration: underline;
}

.cta-section {
  background: linear-gradient(135deg, var(--vp-c-brand-soft), var(--vp-c-bg-soft));
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
  margin: 4rem 0;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.cta-primary, .cta-secondary {
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.cta-primary {
  background: var(--vp-c-brand);
  color: white;
}

.cta-primary:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.cta-secondary {
  background: white;
  color: var(--vp-c-brand);
  border: 2px solid var(--vp-c-brand);
}

.cta-secondary:hover {
  background: var(--vp-c-brand-soft);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .tools-comparison,
  .approach-cards,
  .recommendation-cards {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .comparison-table {
    font-size: 0.9rem;
  }
}
</style>