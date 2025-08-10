---
title: 'ブランチ戦略・開発手順'
description: 'issueベースの開発'
# 利用可能なFront Matter
# https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter
---

## 3種類のブランチ

| ブランチ名           | 説明                                            |
| -------------------- | ----------------------------------------------- |
| issue/issue番号-概要 | 各issueに対応する開発用ブランチ                 |
| main                 | 各issueブランチをマージするためのブランチ       |
| release/yyyymmdd     | Google Playにデプロイする際のリリース用ブランチ |

## 開発手順

1. issueを作成し、開発内容を記載する
2. mainブランチから、issueに紐づいたissueブランチを作成する
3. issueブランチで開発を行う
4. 開発完了後、mainブランチに対してプルリクエストを作成する

## プルリクエスト

- タイトルに `closes #issue番号` を記載し、マージ時にissueを自動クローズさせる
- スカッシュマージを使用する
- issueブランチはマージ後に削除する
- releaseブランチはマージ後も削除しない

## リリース手順

1. mainブランチからreleaseブランチを作成する
2. releaseブランチの作成をトリガーにCodemagicでGoogle Playにデプロイする