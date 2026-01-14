# PoHI Example Repository

**Proof of Human Intent** のデモ用リポジトリです。

このリポジトリをforkして、PoHIによる人間承認フローを体験できます。

## PoHIとは？

AIがコードを書く時代、「誰が承認したか」を暗号学的に証明するプロトコルです。

- **Who?** - World ID による人間証明
- **What?** - 特定のcommit/PRへの承認
- **When?** - 改ざん不可能なタイムスタンプ

詳細: [pohi-protocol/pohi](https://github.com/pohi-protocol/pohi)

## 試し方

### 1. このリポジトリをFork

右上の「Fork」ボタンをクリック

### 2. GitHub Actionsを有効化

Fork後、「Actions」タブで workflows を有効化

### 3. PRを作成

```bash
git checkout -b test-pohi
echo "// test" >> src/hello.ts
git add .
git commit -m "Test PoHI approval"
git push origin test-pohi
```

GitHub上でPRを作成

### 4. ラベルを付ける

PRに `ready-to-merge` ラベルを追加

### 5. World Appで承認

1. ワークフローが起動し、承認URLが表示される
2. [pohi-demo.vercel.app](https://pohi-demo.vercel.app/) でWorld ID QRコードをスキャン
3. World Appで承認

### 6. 承認完了

PRに承認結果がコメントされます:
- Attestation Hash
- Nullifier Hash
- Approved At

## 必要なもの

- [World App](https://world.org/world-app) (iOS/Android)
- GitHubアカウント

## ワークフロー設定

このリポジトリでは以下のワークフローが設定されています:

```yaml
# .github/workflows/pohi-approval.yml
name: PoHI Human Approval

on:
  pull_request:
    types: [labeled]

jobs:
  verify:
    if: github.event.label.name == 'ready-to-merge'
    uses: pohi-protocol/pohi/.github/workflows/pohi-approval.yml@main
    with:
      approval-url: https://pohi-demo.vercel.app
      world-id-app-id: app_staging_5cdaf82b6bf48a0829c74584eb3aa23b
      world-id-action: approve_commit
```

## 自分のリポジトリに導入する

1. `.github/workflows/pohi-approval.yml` をコピー
2. 必要に応じて設定をカスタマイズ
3. [World ID Developer Portal](https://developer.worldcoin.org/) でApp IDを取得

## 関連リンク

- [PoHI Protocol](https://github.com/pohi-protocol/pohi) - メインリポジトリ
- [PoHI Demo](https://pohi-demo.vercel.app/) - ライブデモ
- [World ID Docs](https://docs.world.org/world-id) - World ID ドキュメント

## License

[Apache License 2.0](LICENSE)
