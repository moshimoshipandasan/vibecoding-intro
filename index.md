---
layout: home

hero:
  name: "はじめてのVibe Coding"
  text: "AIと協働する次世代ドキュメントポータル"
  tagline: AI支援開発の全工程を 1 つのナレッジベースでキャッチアップ
  actions:
    - theme: brand
      text: 🚀 環境構築から始める
      link: /docs/environment/setup-guide
    - theme: alt
      text: 🧠 CodexをCodespacesで起動
      link: /docs/github-codespaces-codex/setup-guide
    - theme: alt
      text: 📚 cc-sddワークフローを学ぶ
      link: /docs/cc-sdd/introduction

features:
  - icon: ⚙️
    title: AI開発環境テンプレート
    details: Node.js・AI CLI・GitHub Actionsを一括セットアップする手順。
    link: /docs/environment/setup-guide
    linkText: セットアップガイド →
  - icon: 🧠
    title: Codex × Codespaces
    details: OAuth 認証まで含めた Codex CLI の起動マニュアル。
    link: /docs/github-codespaces-codex/setup-guide
    linkText: 手順を見る →
  - icon: 📐
    title: 仕様駆動開発 cc-sdd
    details: 6 フェーズで品質とスピードを両立する開発プロセス。
    link: /docs/cc-sdd/workflow
    linkText: ワークフローを確認 →
  - icon: 🌈
    title: Vibe Coding の実践
    details: 自然言語での対話を活かしたクリエイティブ開発のベストプラクティス。
    link: #about-vibe-coding
    linkText: Vibe Codingとは →
---

<style>
:root {
  --home-grid-gap: clamp(1.5rem, 3vw, 2.5rem);
}

.section-intro {
  display: grid;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.section-intro p {
  max-width: 48rem;
  color: var(--vp-c-text-2);
}

.card-grid {
  display: grid;
  gap: var(--home-grid-gap);
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-bottom: 3.5rem;
}

.card-grid .card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 14px;
  padding: 1.5rem;
  display: grid;
  gap: 0.75rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-grid .card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.12);
}

.card-grid .card h3 {
  margin: 0;
  font-size: 1.1rem;
}

.card-grid .card p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.card-grid .card a {
  align-self: flex-start;
  font-weight: 600;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.card-grid .card a:hover {
  text-decoration: underline;
}

.timeline {
  display: grid;
  gap: 1.5rem;
  margin: 3rem 0;
}

.timeline-step {
  background: linear-gradient(135deg, var(--vp-c-bg), var(--vp-c-bg-soft));
  border: 1px solid var(--vp-c-border);
  border-left: 4px solid var(--vp-c-brand);
  border-radius: 12px;
  padding: 1.5rem;
  display: grid;
  gap: 0.75rem;
}

.timeline-step h3 {
  margin: 0;
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  margin: 3rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0,0,0,0.09);
}

.compare-table th,
.compare-table td {
  padding: 1rem;
  text-align: center;
}

.compare-table th {
  background: var(--vp-c-brand);
  color: #fff;
}

.compare-table tbody tr:nth-child(even) td {
  background: var(--vp-c-bg-soft);
}

.list-clean {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.list-clean li {
  display: flex;
  flex-direction: column;
}

.list-clean a {
  font-weight: 600;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.list-clean a:hover {
  text-decoration: underline;
}

.cta-panel {
  background: linear-gradient(135deg, var(--vp-c-brand-soft), var(--vp-c-bg));
  border-radius: 18px;
  padding: clamp(2rem, 4vw, 3rem);
  margin: 4rem 0 2rem;
  text-align: center;
  box-shadow: 0 20px 48px rgba(0,0,0,0.12);
}

.cta-panel h2 {
  margin-bottom: 0.75rem;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.cta-buttons a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-primary {
  background: var(--vp-c-brand);
  color: #fff;
}

.cta-primary:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-3px);
}

.cta-secondary {
  background: #fff;
  color: var(--vp-c-brand);
  border: 2px solid var(--vp-c-brand);
}

.cta-secondary:hover {
  background: var(--vp-c-brand-soft);
  transform: translateY(-3px);
}

@media (max-width: 720px) {
  .hero .actions {
    grid-template-columns: 1fr;
  }
}
</style>

## 📌 まずはここから

<div class="section-intro">
  <p>Vibe Coding のための環境構築から CLI 認証、仕様策定までを段階的にキャッチアップできるよう、優先度の高いドキュメントをまとめました。</p>
</div>

<div class="card-grid">
  <div class="card">
    <h3>AI開発環境セットアップ</h3>
    <p>Node.js、CLI ツール、GitHub Actions の初期設定を網羅。ローカルでも Codespaces でも使える標準構成。</p>
    <a href="/docs/environment/setup-guide">環境構築ガイドを読む →</a>
  </div>
  <div class="card">
    <h3>Codex CLI を Codespaces で起動</h3>
    <p>`npm install -g @openai/codex` から OAuth 認証 URL の変換まで、エラーを避けるチェックポイント付き。</p>
    <a href="/docs/github-codespaces-codex/setup-guide">Codex 手順を確認 →</a>
  </div>
  <div class="card">
    <h3>cc-sdd 仕様駆動開発</h3>
    <p>6 つのフェーズで進める開発フレームワーク。要求分析から実装までの判断基準を整理。</p>
    <a href="/docs/cc-sdd/introduction">cc-sddを学ぶ →</a>
  </div>
</div>

## 🚀 クイックスタート

<div class="timeline">
  <div class="timeline-step">
    <h3>Step 1: 環境を整える</h3>
    <p>`npm install` で依存関係を導入し、`npm run dev` で VitePress サイトを起動。Codespaces では標準で Node.js がインストール済みです。</p>
  </div>
  <div class="timeline-step">
    <h3>Step 2: Codex CLI を認証する</h3>
    <p>`codex --yolo` 実行後に生成される OAuth URL を <strong>Codex Redirect URL ジェネレーター</strong> で変換し、ターミナルへ貼り付けて認証を完了します。</p>
  </div>
  <div class="timeline-step">
    <h3>Step 3: ドキュメントを編集する</h3>
    <p>`/docs` または ルートの Markdown を更新。ナビゲーションは `.vitepress/config.js` の `nav` / `sidebar` で管理します。</p>
  </div>
</div>

## 🌈 Vibe Codingとは {#about-vibe-coding}

Vibe Coding は、自然言語の指示と AI アシスタントを組み合わせてアイデアを高速に形にする開発スタイルです。コードを書く代わりに、仕様や改善点を対話で伝え、AI が実装・検証・改善を繰り返します。

> 「最もホットな新しいプログラミング言語は英語だ」 — Andrej Karpathy

- 🧭 **フォーカス**: 要件と UX に集中し、細かな実装は AI に移譲
- 🔁 **サイクル**: 指示 → 生成 → レビュー → 微調整の短いループ
- 🤝 **コラボレーション**: CLI やエディタ統合を通じて AI と共同編集

## 🛠 ツールカタログ

<div class="card-grid">
  <div class="card">
    <h3>🤖 Claude Code</h3>
    <p>長文コンテキストと TDD 支援が強み。リファクタリングや仕様レビューに最適です。</p>
    <a href="https://docs.claude.com/en/docs/claude-code/" target="_blank" rel="noopener">公式ドキュメント →</a>
  </div>
  <div class="card">
    <h3>🧠 Codex CLI</h3>
    <p>OpenAI の GPT-5-Codex ベース。Codespaces と組み合わせることでブラウザだけで完結。</p>
    <a href="/docs/github-codespaces-codex/setup-guide">セットアップを見る →</a>
  </div>
  <div class="card">
    <h3>💎 Gemini CLI</h3>
    <p>Google のマルチモーダルモデル。検索連携でリサーチと実装を同時進行できます。</p>
    <a href="https://github.com/google-gemini/gemini-cli" target="_blank" rel="noopener">GitHub →</a>
  </div>
</div>

## 📚 ドキュメントディレクトリ

<ul class="list-clean">
  <li>
    <a href="/docs/environment/setup-guide">環境構築セットアップガイド</a>
    <span>ローカル・Codespaces 共通の初期設定とツール導入手順。</span>
  </li>
  <li>
    <a href="/docs/github-codespaces-codex/setup-guide">GitHub CodespacesでCodexを起動する手順</a>
    <span>Codex CLI のインストールから OAuth 認証 URL 変換までを図解。</span>
  </li>
  <li>
    <a href="/docs/cc-sdd/introduction">cc-sddとは</a>
    <span>仕様駆動開発の概要と導入メリット。</span>
  </li>
  <li>
    <a href="/docs/cc-sdd/getting-started">cc-sdd はじめ方ガイド</a>
    <span>実際のプロジェクトで使うためのステップバイステップ解説。</span>
  </li>
  <li>
    <a href="/docs/cc-sdd/workflow">cc-sdd ワークフローの詳細</a>
    <span>各フェーズの入力・アウトプットとチェックリスト。</span>
  </li>
  <li>
    <a href="/docs/cc-sdd/commands">cc-sdd コマンドリファレンス</a>
    <span>CLI 操作用コマンドやテンプレート集。</span>
  </li>
  <li>
    <a href="/docs/cc-sdd/best-practices">cc-sdd ベストプラクティス</a>
    <span>チーム導入時の失敗例と回避策。</span>
  </li>
</ul>

## 🎯 スタイル比較

<table class="compare-table">
  <thead>
    <tr>
      <th>項目</th>
      <th>Vibe Coding</th>
      <th>cc-sdd</th>
      <th>従来型</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>開発速度</td>
      <td>⚡ アイデア検証に最適</td>
      <td>🚀 リリースまで一貫</td>
      <td>🐢 ドキュメント依存</td>
    </tr>
    <tr>
      <td>品質管理</td>
      <td>🔄 対話的レビュー</td>
      <td>✅ チェックリスト駆動</td>
      <td>📋 手動テスト中心</td>
    </tr>
    <tr>
      <td>チーム規模</td>
      <td>1〜3名</td>
      <td>4〜20名</td>
      <td>全規模</td>
    </tr>
    <tr>
      <td>導入コスト</td>
      <td>💰 低</td>
      <td>💵 中</td>
      <td>💸 中〜高</td>
    </tr>
  </tbody>
</table>

## ✅ 次のアクション

<div class="cta-panel">
  <h2>今日から Vibe Coding を体験しましょう</h2>
  <p>環境を整え、Codex で AI セッションを開始し、cc-sdd で仕様管理を強化する 3 ステップで、アイデアをすぐに形にできます。</p>
  <div class="cta-buttons">
    <a class="cta-primary" href="/docs/environment/setup-guide">🚀 セットアップを完了する</a>
    <a class="cta-secondary" href="/docs/github-codespaces-codex/setup-guide">🧠 Codex 認証を実行する</a>
    <a class="cta-secondary" href="/docs/cc-sdd/workflow">📐 ワークフローを確認する</a>
  </div>
</div>
