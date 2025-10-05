# Codex CLI 仕様駆動開発マニュアル

Spec Driven Codex は Codex CLI を仕様駆動開発フロー（SDD）に最適化するテンプレートとプロンプトのセットです。2025-09-24 公開の Qiita 記事「〖Codex CLI対応〗仕様駆動開発ツール『Spec Driven Codex』を公開しました！」をベースに、本リポジトリ向けの手順を整理しました。

## 関連ドキュメント

- [Codex CLI 仕様駆動開発 実践ガイド](/docs/spec-driven-codex/practical-guide)
- [解説動画（YouTube）](https://youtu.be/1EQllS_3TJo?si=TtT7LlsuplMFP4UF)

## 準備と導入
1. プロジェクトルートで `npx spec-driven-codex init --locale ja` を実行し、`.sdd/` と Codex プロンプトを生成します。
2. 既存プロンプトや説明文を最新化したい場合は `npx spec-driven-codex upgrade --locale ja` を使用します（確認なしで上書きされるためコミット前に差分を確認）。
3. Codex CLI が処理前に承認を求めたら `ok` と入力して Enter を押し、作業計画を確認しながら進めます。

## Codex CLIで進める6ステップ
1. **Steering（舵取り）**: `codex` 起動後に `/sdd-steering` を実行し、プロダクト概要・技術スタック・構造を `.sdd/steering/` に収集。大規模変更時は再実行して最新状態を記録します。
2. **Description整理**: `.sdd/description.md` に実装したい機能の背景・達成基準・制約を追記。以降のコマンドが参照するため PR ごとに更新します。
3. **Requirements（要件定義）**: `/sdd-requirements` で受入基準付き要件書を生成。生成物（例: `.sdd/specs/feature-name/requirements.md`）はチームレビュー後にコミットし、ゴールを固定化します。
4. **Design（設計）または Highway**: 詳細設計が必要なら `/sdd-design`、設計〜実装を高速に回したい場合は `/sdd-highway` を利用。アーキテクチャ、主要コンポーネント、データモデルが `.sdd/specs/.../design.md` に出力されます。
5. **Tasks（タスク分解）**: `/sdd-tasks` がチェックリスト形式の実装計画を作成。担当者メモや優先順位を追記し、進捗可視化に活用します。
6. **Implement & Archive**: `/sdd-implement` でタスクを順次処理し、完了後に `/sdd-archive` で成果を日付付きフォルダに保存。アーカイブ内容はナレッジベースとして `docs/` へ転記可能です。

## `.sdd/` 構成と生成物
```
プロジェクト/
├── .sdd/
│   ├── description.md        # 実装予定の概要・背景・制約を記述
│   ├── target-spec.txt       # カレント spec 名を管理
│   ├── steering/             # /sdd-steering の成果（product/tech/structure）
│   └── specs/
│       ├── <spec-name>/      # requirements/design/tasks など各ステップ成果
│       └── archives/         # `/sdd-archive` で日付付き保存
└── ~/.codex/prompts/         # Codex CLI から呼び出す SDD プロンプト群
```

## 運用ベストプラクティス
- コマンド実行前に `git status` で作業ブランチを確認し、ステップごとの差分を記録します。
- `.sdd/description.md`、`requirements.md`、`design.md` に変更が入ったら PR 説明に使用コマンドと検証結果（`npm run build` など）を必ず記載します。
- ナビゲーションに新規ガイドを追加する際は `.vitepress/config.js` のサイドバーへ日本語ラベル・2スペースインデントで追記してください。
- タスク完了時は `/sdd-implement` に任せつつ、必要に応じて `tasks.md` に補足メモ（検証済みブラウザなど）を残し、品質基準を明確化します。

## トラブルシューティングとアップデート
- コマンドが途中で停止した場合は CLI のメッセージを確認し、必要なら `ok` や `skip` を入力して再開します。
- テンプレート更新後は `npx spec-driven-codex upgrade --locale ja` → `/sdd-steering` → `/sdd-archive` の順で再実行し、最新仕様と実装記録を整合させます。
- アーカイブ済み spec を再開する場合は `target-spec.txt` を編集し、再び `/sdd-requirements` からステップを進めてください。

## 参考リソース
- Qiita: [〖Codex CLI対応〗仕様駆動開発ツール「Spec Driven Codex」を公開しました！](https://qiita.com/tomada/items/781d6eb5b79e5873d9ab)
- GitHub: [tomada1114/spec-driven-codex](https://github.com/tomada1114/spec-driven-codex)
- 本リポジトリの既存 SDD ガイド: `docs/cc-sdd/` 配下の各ドキュメント
