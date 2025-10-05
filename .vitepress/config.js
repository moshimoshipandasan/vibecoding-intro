import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'はじめてのVibe Coding',
  description: 'AIと対話して作る新しいプログラミング - コードを書かずにアイデアを形に',
  lang: 'ja-JP',

  // GitHub Pagesの設定
  base: '/vibecoding-intro/',

  // ローカルホストリンクを無視
  ignoreDeadLinks: 'localhostLinks',

  themeConfig: {
    // ナビゲーションバー
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '環境構築', link: '/docs/environment/setup-guide' },
      { text: 'cc-sdd 仕様駆動開発', link: '/docs/cc-sdd/introduction' },
      { text: 'GitHub', link: 'https://github.com' }
    ],

    // サイドバー
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: '🏠 ホーム', link: '/' },
          { text: '🌈 Vibe Codingとは', link: '/#what-is-vibe-coding' },
          { text: '🛠️ AI開発ツール', link: '/#ai-tools' },
          { text: '🚀 はじめ方', link: '/#getting-started' }
        ]
      },
      {
        text: '⚙️ 環境構築',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'AI開発環境セットアップガイド 2025', link: '/docs/environment/setup-guide' }
        ]
      },
      {
        text: '🚀 cc-sdd 仕様駆動開発',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'cc-sddとは', link: '/docs/cc-sdd/introduction' },
          { text: 'はじめ方ガイド', link: '/docs/cc-sdd/getting-started' },
          { text: 'ワークフローの詳細', link: '/docs/cc-sdd/workflow' },
          { text: 'コマンドリファレンス', link: '/docs/cc-sdd/commands' },
          { text: 'ベストプラクティス', link: '/docs/cc-sdd/best-practices' }
        ]
      },
      {
        text: '🧠 Codex 開発環境',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'GitHub CodespacesでCodexを起動', link: '/docs/github-codespaces-codex/setup-guide' }
        ]
      }
    ],

    // ソーシャルリンク
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    // フッター
    footer: {
      message: 'VitePressで構築されたサイト',
      copyright: 'Copyright © 2024'
    },

    // 検索機能
    search: {
      provider: 'local'
    },

    // ローカライゼーション
    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    },

    // サイドバーメニューボタン
    sidebarMenuLabel: 'メニュー',

    // ダークモードトグル
    darkModeSwitchLabel: 'ダークモード'
  }
})
