# nino-ui

shadcn/ui Registryを活用したWebアプリ開発用スニペット配布プロダクト

## 概要

nino-uiは、shadcn/ui Registryをベースに、Webアプリケーション開発に役立つスニペットやコンポーネントを配布するプロジェクトです。

## コンテンツ管理方法

### 記事ドキュメントの追加

1. `basic-doc.ts`にメタ情報を追加
2. `/docs`ディレクトリに`doc.mdx`ファイルを作成

### 配布コードの追加

1. `registry.json`にメタ情報を追加
2. `registry/`ディレクトリに配布する実装を追加
3. `docs/`ディレクトリにガイドやデモを追加
4. `pnpm registry:build` で配布用にレジストリをビルド

[registry.json の詳細](https://ui.shadcn.com/docs/registry/registry-item-json)

## ライセンス

MIT
