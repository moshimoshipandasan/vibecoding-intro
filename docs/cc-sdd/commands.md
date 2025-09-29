# コマンドリファレンス

## 📝 コマンド一覧

cc-sddは10個の強力なスラッシュコマンドを提供します。各コマンドは特定の開発フェーズに対応しています。

## 🎯 コアコマンド

### /kiro:steering

**プロジェクト理解コマンド**

#### 構文
```bash
/kiro:steering
```

#### 目的
既存プロジェクトの構造、技術スタック、コーディング規約を分析し、AIにプロジェクトの文脈を理解させます。

#### 実行タイミング
- プロジェクト開始時（必須）
- 大規模な変更後
- 新しいメンバー参加時

#### 生成物
- `steering.md` - プロジェクト概要ドキュメント
- `.cursorrules` - AI用の指示ファイル更新

#### 例
```bash
# 新規プロジェクトで実行
/kiro:steering

# 出力例
プロジェクト分析完了:
- 言語: TypeScript, React
- フレームワーク: Next.js 14
- スタイル: Tailwind CSS
- テスト: Jest, React Testing Library
```

---

### /kiro:spec-init

**機能仕様初期化コマンド**

#### 構文
```bash
/kiro:spec-init "機能の説明"
```

#### 目的
新しい機能開発を開始し、初期仕様を作成します。

#### パラメータ
- `機能の説明` - 開発したい機能の概要（日本語OK）

#### 実行タイミング
- 新機能開発開始時
- 既存機能の大幅改修時

#### 生成物
- `kiro/features/[機能名]/spec.md` - 初期仕様書

#### 例
```bash
# シンプルな機能
/kiro:spec-init "ダークモード切り替え機能"

# 複雑な機能
/kiro:spec-init "ユーザー認証システム（メール認証、2FA対応）"

# 既存機能の改修
/kiro:spec-init "検索機能のパフォーマンス改善"
```

---

### /kiro:spec-requirements

**要件定義生成コマンド**

#### 構文
```bash
/kiro:spec-requirements
```

#### 目的
初期仕様から詳細な要件定義書を生成します。

#### 前提条件
- `/kiro:spec-init`が実行済み

#### 生成内容
- ユーザーストーリー
- 機能要件・非機能要件
- 受け入れ条件
- 制約事項

#### 生成物
- `kiro/features/[機能名]/requirements.md` - 要件定義書

#### 例
```bash
/kiro:spec-requirements

# 生成される要件例
## ユーザーストーリー
- ユーザーとして、ダークモードに切り替えたい
- 設定を保存して、次回訪問時も維持したい

## 受け入れ条件
- [ ] ボタンクリックでモード切り替え可能
- [ ] LocalStorageに設定保存
- [ ] システム設定との連携
```

---

### /kiro:spec-design

**技術設計生成コマンド**

#### 構文
```bash
/kiro:spec-design
```

#### 目的
要件を満たす技術的な設計書を生成します。

#### 前提条件
- `/kiro:spec-requirements`が実行済み

#### 生成内容
- システムアーキテクチャ
- データモデル
- API設計
- UI/UX設計

#### 生成物
- `kiro/features/[機能名]/design.md` - 設計書

#### 例
```bash
/kiro:spec-design

# 生成される設計例
## アーキテクチャ
- Context APIでテーマ状態管理
- カスタムフックでロジック分離

## データモデル
{
  theme: 'light' | 'dark',
  preferSystem: boolean
}
```

---

### /kiro:spec-tasks

**タスク分解コマンド**

#### 構文
```bash
/kiro:spec-tasks
```

#### 目的
設計を実装可能な小さなタスクに分解します。

#### 前提条件
- `/kiro:spec-design`が実行済み

#### 生成内容
- タスクリスト
- 実装順序
- 依存関係
- 工数見積もり

#### 生成物
- `kiro/features/[機能名]/tasks.md` - タスクリスト

#### 例
```bash
/kiro:spec-tasks

# 生成されるタスク例
## タスクリスト
- [ ] ThemeContextの作成 (1h)
- [ ] useThemeカスタムフック (30m)
- [ ] 切り替えボタンコンポーネント (1h)
- [ ] LocalStorage連携 (30m)
- [ ] テスト作成 (1h)
```

---

### /kiro:spec-impl

**実装実行コマンド**

#### 構文
```bash
/kiro:spec-impl
```

#### 目的
TDD（テスト駆動開発）アプローチで実装を実行します。

#### 前提条件
- `/kiro:spec-tasks`が実行済み

#### 実行内容
1. テスト作成
2. 実装
3. リファクタリング
4. ドキュメント生成

#### 生成物
- `src/` - 実装コード
- `tests/` - テストコード
- 更新された`tasks.md` - 完了タスクにチェック

#### 例
```bash
/kiro:spec-impl

# 実行プロセス
1. theme.test.tsx 作成...
2. ThemeContext.tsx 実装...
3. useTheme.ts 実装...
4. ThemeToggle.tsx 実装...
✅ 全タスク完了
```

---

## 🔧 ユーティリティコマンド

### /kiro:status

**進捗確認コマンド**

#### 構文
```bash
/kiro:status
```

#### 目的
現在の開発状況と進捗を確認します。

#### 表示内容
- 現在のフェーズ
- 完了タスク数
- 残タスク数

---

### /kiro:rollback

**ロールバックコマンド**

#### 構文
```bash
/kiro:rollback [フェーズ]
```

#### 目的
指定したフェーズまで状態を戻します。

#### パラメータ
- `フェーズ` - `init`, `requirements`, `design`, `tasks`

#### 例
```bash
# 設計フェーズに戻る
/kiro:rollback design
```

---

### /kiro:review

**レビュー要求コマンド**

#### 構文
```bash
/kiro:review [フェーズ]
```

#### 目的
特定フェーズの成果物をレビュー用に整形して表示します。

#### 例
```bash
# 要件定義のレビュー
/kiro:review requirements

# 設計のレビュー
/kiro:review design
```

---

### /kiro:export

**エクスポートコマンド**

#### 構文
```bash
/kiro:export [形式]
```

#### 目的
仕様書を指定形式でエクスポートします。

#### パラメータ
- `形式` - `markdown`, `html`, `pdf`

#### 例
```bash
# Markdown形式でエクスポート
/kiro:export markdown

# PDF形式でエクスポート
/kiro:export pdf
```

---

## 💡 コマンド実行のベストプラクティス

### 推奨フロー

```bash
# 1. 必ずステアリングから開始
/kiro:steering

# 2. 小さな機能から始める
/kiro:spec-init "シンプルな機能"

# 3. 各フェーズで確認
/kiro:spec-requirements
# ✋ 確認・修正

/kiro:spec-design
# ✋ 確認・修正

/kiro:spec-tasks
# ✋ 確認・修正

/kiro:spec-impl
```

### 並列開発

複数の機能を並行開発する場合：

```bash
# ターミナル1
/kiro:spec-init "機能A"
/kiro:spec-requirements

# ターミナル2
/kiro:spec-init "機能B"
/kiro:spec-requirements
```

### トラブルシューティング

```bash
# 状態確認
/kiro:status

# 問題があれば前のフェーズに戻る
/kiro:rollback design

# レビューして問題を特定
/kiro:review requirements
```

## 🎯 コマンド早見表

| コマンド | 目的 | 前提条件 |
|---------|------|---------|
| `/kiro:steering` | プロジェクト理解 | なし |
| `/kiro:spec-init` | 機能初期化 | steering完了 |
| `/kiro:spec-requirements` | 要件定義 | init完了 |
| `/kiro:spec-design` | 設計 | requirements完了 |
| `/kiro:spec-tasks` | タスク分解 | design完了 |
| `/kiro:spec-impl` | 実装 | tasks完了 |
| `/kiro:status` | 状態確認 | なし |
| `/kiro:rollback` | ロールバック | なし |
| `/kiro:review` | レビュー | なし |
| `/kiro:export` | エクスポート | なし |

## 📚 次のステップ

- 🎯 [ベストプラクティス](/docs/cc-sdd/best-practices) - 効率的な活用方法
- 🔄 [ワークフローの詳細](/docs/cc-sdd/workflow) - 開発プロセスの理解

---

*コマンドを理解したら、実際のプロジェクトで使ってみましょう！*