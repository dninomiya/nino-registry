# nino-ui

shadcn/ui Registryを活用したWebアプリ開発用スニペット配布プロダクト

## 概要

nino/uiは、[shadcn/ui Registry](https://ui.shadcn.com/docs/registry)を使い、Webアプリケーション開発に役立つコードを配布しています。

## コンテンツ管理方法

### 記事ドキュメントの追加

1. [basic-doc.ts](./basic-doc.ts)にメタ情報を追加
2. [`/docs`](/docs)ディレクトリに`doc.mdx`ファイルを作成

### 配布コードの追加

1. [`registry.json`](/registry.json)にメタ情報を追加
2. [`registry/`](/registry)ディレクトリに配布する実装を追加
3. [`docs/`](/docs)ディレクトリにガイドやデモを追加
4. `pnpm registry:build` で配布用にレジストリをビルド

[registry.json の詳細](https://ui.shadcn.com/docs/registry/registry-item-json)

## ライセンス

MIT
