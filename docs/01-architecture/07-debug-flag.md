---
title: 'デバッグフラグ'
description: 'Widgetのデバッグ効率化'
---

デバッグで有用な機能

```dart
void main() async {
  // デバッグ用
  if (kDebugMode) {
    debugPaintSizeEnabled = true; // ウィジェットのサイズと境界線を可視化
    debugRepaintRainbowEnabled = true; // 再描画部分をレインボー色で表示
    debugRepaintTextRainbowEnabled = true; // Text描画範囲をレインボー色で表示
    debugPaintLayerBordersEnabled = true; // Widgetの境界をオレンジ色で表示
    debugPaintPointersEnabled = true; // タップした箇所をティール色で表示
    debugPaintBaselinesEnabled = true; // ベースライン(Text等の軸)を表示
    debugHighlightDeprecatedWidgets = true; // 非推奨(@Deprecated)ウィジェット設定を可視化
    timeDilation = 5.0; // アニメーション速度を1/5に減速
  }
  
  // 以下略
}
```
