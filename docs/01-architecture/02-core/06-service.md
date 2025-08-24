---
title: 'Service'
description: 'Serviceの定義'
---

## Application Service と UseCase の違い

- Application Service と UseCase の意味は同一で起源が異なるだけです
  - Application Service
    - ドメイン駆動開発が起源
  - Use Case
    - Clean Architectureが起源
- Application Service と Domain Service が紛らわしいため、本アプリでは UseCase と呼びます
- UseCase (Application Service) については、[UseCase](UseCase) を参考にしてください

## Domain Service とは

以下が Domain Service にする場合の定義です

- 複数の Entity に依存する処理
- 単一の Entity に依存でも50行以上で長い処理

:::info
Domain Serviceは外部に依存しない処理です<br/>外部に依存する処理は、RepositoryかGatewayに記載します
:::
