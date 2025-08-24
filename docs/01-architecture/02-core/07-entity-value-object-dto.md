---
title: 'Entity ・ Value Object ・ DTO'
description: 'Extention TypeとFreezed'
---

```mermaid
flowchart LR
    P[Presentation]
    V[ViewModel]
    U[UseCase]
    R2[Repository2層]
    R3[Repository3層]

    P -->|DTO| V
    V -->|Entity| U
    U -->|Entity| V
    V -->|DTO| P
    U -->|Entity| R2
    R2 -->|DTO| R3
    R3 -->|DTO| R2
    R2 -->|Entity| U
```

## Entity

- 複数のValue Objectで構成
- 複数のValue Objectに関する簡単なロジックを定義
  - 50行以上の場合は、Domain Serviceとして外だししてよい

## Value Object

- Stringやint等のprimitive型を使用せず、独自に定義したクラス型
  - バリデーション定義
  - 自身のValue Objectのみに関係するロジック
    - 他のValue Objectを含む配列のValue Object等は例外
      - RotationMembersは、RotationMemberを含む配列のValue Objectのため、RotationMemberに関係するロジックも定義してOK


## DTO

- Stringやint等のprimitive型で構成
- Method等のロジックは持たず、値のみ保持

:::caution
EntityはInfrastructureやPresentationで利用しないべきです<br/>
理由としては、独自の技術などの利益となるロジックがEntityに定義されているため、それがUIで利用されることは、誰でも知ることができビジネスロジックの流出となるからです<br/>
DTOにロジックの結果だけを含めてUIに渡すことが大切です
:::

:::info
本アプリにはBackendが存在しなくFrontendにビジネスロジックを記載しているため、実際はビジネスロジックが流出していることになります...
:::

## Extention Type と Freezed の使い分け

| 機能               | Extention Type         | Freezed                          |
| ------------------ | ---------------------- | -------------------------------- |
| 実装方法           | 単一フィールドをラップ | 任意個数フィールドの新クラス生成 |
| 値比較             | Stringやint等のみ      | ListやMapも比較可能              |
| JSONシリアライズ   | 手動実装               | 自動生成                         |
| 不変オブジェクト化 | Stringやint等のみ      | ListやMapも不変                  |
| パフォーマンス     | 〇                     | ✕                                |


| 用途                            | どちらを使用すべきか | 理由                               |
| ------------------------------- | -------------------- | ---------------------------------- |
| Entity                          | Freezed              | 複数のValue Objectで構成されるため |
| Value Object<br/> (Stringやint) | Extention Type       | 単一値で不変のため                 |
| Value Object<br/> (ListやMap)   | Freezed              | 単一値だが不変でないため           |
| DTO                             | Freezed              | 複数のprimitive型で構成されるため  |

## Mapper (Entity と DTO の変換処理)

現在は、以下のようにViewModelやDTOのみで簡潔していますが、EntityとDTOの変換を担当するMapperクラスを定義したいところです

- ViewModelとRepository2層での処理 (以下はViewModelでの例)
  - DTOからEntityへの変換
    - EntityでValue ObjectをもとにEntityを作成するFactory Methodを定義
    - DTOにtoEntity Methodを定義
      - primitive型をValue Objectに変換
      - Factory Methodを呼び出して変換
    - toEntityをViewModelで呼び出す
  - EntityからDTOへの変換
    - DTOに表示用のフィールドを定義
    - EntityまたはValue Objectで表示用(primitive型)に変換するMethodを定義
    - ViewModelでEntityやValue ObjectのMethodを実行し、primitive型を取得してDTOに格納