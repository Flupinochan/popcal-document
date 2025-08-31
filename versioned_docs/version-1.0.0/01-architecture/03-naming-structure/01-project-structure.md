---
title: 'フォルダ構造'
description: '各フォルダについて'
---

Flutter (モバイルアプリケーション) はフロントエンドに相当し、画面が中心となるため、画面 (機能) ごとにフォルダを区切ります

```yaml
features/
├── auth/           # 認証画面
├── calendar/       # カレンダー画面
├── deadline/       # 最終営業日通知画面
├── drawer/         # サイドバー
├── home/           # ホーム画面 (ローテーションを一覧表示)
├── notifications/  # ローテーションに基づいた通知設定機能
└── rotation/       # ローテーションの作成・変更画面
```

```yaml
rotation/
├── domain/
│   ├── entities/       # ロジック
│   ├── gateways/       # DB等以外の外部API呼び出し (Interface)
│   ├── repositories/   # entityをDB等に保存し永続化 (Interface)
│   ├── services/       # 複数のentityにまたがるロジック
│   ├── value_objects/  # primitive型の代わり
├── infrastructure/
│   ├── dto/            # value objectとprimitive型の変換
│   ├── repositories/   # 実装
│   └── gateways/       # 実装
├── presentation/
│   ├── dto/
│   ├── screens/        # Scaffoldを返す親Widget
│   └── widgets/        # screensで利用される子Widget
├── providers/          # RiverPod
└── use_cases/          # repository、gateway、serviceを利用した複合処理
```