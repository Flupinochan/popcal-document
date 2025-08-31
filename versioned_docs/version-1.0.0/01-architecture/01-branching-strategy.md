---
title: 'ブランチ戦略・開発手順'
description: 'コミット、プルリクエストルール'
# 利用可能なFront Matter
# https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter
# Mermaid記法
# https://mermaid.js.org/intro/
---

```mermaid
---
config:
  logLevel: 'debug'
  theme: 'base'
  gitGraph:
    showBranches: true
    showCommitLabel: true
    mainBranchName: 'master'
    parallelCommits: false
    rotateCommitLabel: true
---
gitGraph LR:
    checkout master
    commit
    commit
    branch "1-update-readme"
    checkout "1-update-readme"
    commit
    commit
    checkout master
    merge "1-update-readme"
    branch "2-add-auth"
    checkout "2-add-auth"
    commit
    checkout master
    merge "2-add-auth"
    branch "v1.0.0" order: 1
    checkout "v1.0.0" 
    commit tag: "v1.0.0"
    checkout master
    branch "3-fix-validation"
    checkout "3-fix-validation"
    commit
    commit
    checkout master
    merge "3-fix-validation"
    branch "v2.0.0" order: 1
    checkout "v2.0.0" 
    commit tag: "v2.0.0"
```

## 3種類のブランチ

| ブランチ名 (例) | 説明                                 |
| --------------- | ------------------------------------ |
| 1-update-readme | 各issue番号に対応する開発用ブランチ  |
| master          | 各issueブランチをマージするブランチ  |
| v1.0.0          | masterから派生するリリース用ブランチ |

## 開発手順

1. issueを作成し、開発内容を記載する
2. masterブランチから、issueに紐づいたissueブランチを作成する
3. issueブランチで開発を行う
4. 開発完了後、masterブランチに対してプルリクエストを作成する
5. リリースするタイミングでreleaseブランチを切る

## コミットルール

以下のようにイシュー番号をつけておくとよい

```
#10 update README.md
```

## プルリクエスト ルール

- タイトルに `closes #issue番号` を記載し、マージ時にissueを自動クローズさせる
- スカッシュマージを使用する
- issueブランチはマージ後に削除する
- releaseブランチは削除しない

## リリース手順

1. masterブランチからreleaseブランチを作成する
2. releaseブランチの作成をトリガーにGitHub Actions・CodemagicでGoogle Playにデプロイする
