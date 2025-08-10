---
title: 'Tips'
description: 'メモ'
---

メモページです。

## 依存関係図

presentation dto  entity (repository)  dto  datasource (repository)

## Widget関数とWidgetインスタンス

| 項目           | Widget関数                           | Widgetインスタンス |
| -------------- | ------------------------------------ | ------------------ |
| 状態保持       | ✕ 親Widgetに依存                     | 〇                 |
| テスト         | ✕ 状態に依存しないUIやロジックテスト | 〇                 |
| パフォーマンス | ✕ const非対応                        | 〇                 |

- Widget関数
  - 親contextを引数で受け取ることが基本
  - 状態を持ちたい場合は、refやuseStateを引数で受け取る
- Widgetインスタンス (@overrideしたWidget build)
  - contextが自動的に渡されるため、親contextは引数で受け取らない
- `複数のWidgetインスタンスに分割することが推奨される`
  - Widgetインスタンスごとにテストが可能なため、テストが分割しやすい
  - 可能な限り複数のWidgetインスタンスに分けて、const Widgetにすることでパフォーマンスがよくなる
    - 1つのWidgetインスタンスにすると全てが再レンダリングされる
  - Widget関数でref notifierを利用し状態変更して再レンダリングする場合はWidgetインスタンスに分割すべき
    - ref.watchで単に値を取得し表示するだけの場合はWidget関数でOK

## Widgetインスタンスの再レンダリング

※Widget関数は親Widgetの再レンダリングに含まれます。以下のWidgetは`Widgetインスタンス`を意味します

- setState、useState、ref.watch()など状態変更がトリガー
- 親Widgetが再レンダリングされると、子Widgetも再レンダリングされる
  - 子Widgetが再レンダリングされても、親Widgetは再レンダリングされない
  - const Widgetの場合は再レンダリングされない
    - 再レンダリングが不要、状態を持たない場合はconstで定義するとパフォーマンスが向上

## Widget関数の引数、BuildContext、Ref

※以下のWidgetは`Widget関数`を意味します

- 子Widgetの引数にはcontextから取得したthemeではなくcontextを渡すべき
  - 後でtheme以外をcontextから取得する場合に引数の追加が不要
  - キャッシュされていて、パフォーマンスは無視できる程度であり、柔軟性を優先すべき
- 子WidgetにはRefも渡せる
  - 子Widgetでしか利用しないRiverPod(ref.watch)は子WidgetにRefを渡して定義すべき
  - 親Widgetで定義すると利用場所が分かりづらくなり、可読性が低くなる

## BuildContext

- 非同期処理の後に showDialog や ScaffoldMessenger を使用する場合は、if (context.mounted) でチェックすると安全性が高い
- 再レンダリングされcontextが破棄されるとScaffoldMessengerの利用だけでなくHooksも利用できなくなる

## 名前付き変数
- 名前付き変数を利用し、変数の順番に依存せず、バグを防止する

## FutureBuilder、StreamBuilder
- FutureBuilderやStreamBuilderは利用せず、RiverPodのFutureProviderやStreamProviderでref.watchする方針とする