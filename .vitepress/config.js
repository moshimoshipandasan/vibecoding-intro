import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'はじめてのVibe Coding',
  description: 'AIと対話して作る新しいプログラミング - コードを書かずにアイデアを形に',
  lang: 'ja-JP',

  // GitHub Pagesの設定
  base: '/vibecoding-intro/',

  themeConfig: {
    // ナビゲーションバー
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '始める', link: '/docs/beginner/chapter01' },
      {
        text: '学習ガイド',
        items: [
          { text: '🔰 初心者向け', items: [
            { text: 'Chapter 1: 基本概念', link: '/docs/beginner/chapter01' },
            { text: 'Chapter 2: 環境構築', link: '/docs/beginner/chapter02' },
            { text: 'Chapter 3: 初めてのアプリ', link: '/docs/beginner/chapter03' }
          ]},
          { text: '📖 詳細ガイド', items: [
            { text: 'プロンプトエンジニアリング', link: '/docs/intermediate/prompt-engineering' },
            { text: '対話テクニック', link: '/docs/intermediate/dialogue-techniques' },
            { text: 'トラブルシューティング', link: '/docs/intermediate/troubleshooting' }
          ]},
          { text: '🎓 上級編', items: [
            { text: '複雑なアプリ構築', link: '/docs/advanced/complex-apps' },
            { text: 'AIデバッグ術', link: '/docs/advanced/ai-debugging' },
            { text: 'パフォーマンス最適化', link: '/docs/advanced/performance' },
            { text: '本番デプロイ', link: '/docs/advanced/deployment' }
          ]}
        ]
      },
      { text: 'cc-sdd 仕様駆動開発', link: '/docs/cc-sdd/introduction' },
      { text: 'GitHub', link: 'https://github.com' }
    ],

    // サイドバー
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: '🏠 ホーム', link: '/' },
          { text: '🌈 Vibe Codingとは', link: '/#what-is-vibe-coding' }
        ]
      },
      {
        text: '🔰 初心者ガイド',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Chapter 1: 基本概念を理解する', link: '/docs/beginner/chapter01' },
          { text: 'Chapter 2: AIツールのセットアップ', link: '/docs/beginner/chapter02' },
          { text: 'Chapter 3: 最初のアプリを作る', link: '/docs/beginner/chapter03' }
        ]
      },
      {
        text: '📖 実践ガイド',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'プロンプトエンジニアリング入門', link: '/docs/intermediate/prompt-engineering' },
          { text: '効果的な対話テクニック', link: '/docs/intermediate/dialogue-techniques' },
          { text: 'よくあるトラブルと対処法', link: '/docs/intermediate/troubleshooting' }
        ]
      },
      {
        text: '🎓 上級テクニック',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '複雑なアプリケーション構築', link: '/docs/advanced/complex-apps' },
          { text: 'AIとの協調デバッグ', link: '/docs/advanced/ai-debugging' },
          { text: 'パフォーマンス最適化', link: '/docs/advanced/performance' },
          { text: '本番環境へのデプロイ', link: '/docs/advanced/deployment' }
        ]
      },
      {
        text: '🚀 cc-sdd 仕様駆動開発',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'cc-sddとは', link: '/docs/cc-sdd/introduction' },
          { text: 'はじめ方ガイド', link: '/docs/cc-sdd/getting-started' },
          { text: 'ワークフローの詳細', link: '/docs/cc-sdd/workflow' },
          { text: 'コマンドリファレンス', link: '/docs/cc-sdd/commands' },
          { text: 'ベストプラクティス', link: '/docs/cc-sdd/best-practices' }
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