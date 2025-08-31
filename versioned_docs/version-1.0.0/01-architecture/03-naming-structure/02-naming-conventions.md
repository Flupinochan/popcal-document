---
title: '命名規則'
description: 'フォルダ・ファイル名のルール'
---

- フォルダ名は複数形で、ファイル名は単数形
- ファイル名とクラス名は合わせる
- 実装方式を含む場合は末尾に付ける（_firebase, _local, _impl）

## Domain

```yaml
domain/
├── entities/
│   └── {entity_name}.dart                    # rotation.dart
├── repositories/
│   └── {entity_name}_repository.dart         # rotation_repository.dart
├── services/
│   └── {service_name}_service.dart           # rotation_calculation_service.dart
│   └── {service_name}_service_impl.dart      # rotation_calculation_service_impl.dart
├── value_objects/
│   └── {value_object_name}.dart              # email.dart
├── enums/
│   └── {enum_name}.dart                      # weekday.dart
└── gateways/
    └── {gateway_name}_gateway.dart           # notification_gateway.dart
```

## Infrastructure

```yaml
infrastructure/
├── dto/
│   └── {entity_name}_{source}_response.dart         # rotation_firebase_response.dart
│   └── {entity_name}_{source}_request.dart          # notification_local_request.dart
├── repositories/
│   └── {entity_name}_repository_{impl_type}.dart    # rotation_repository_firebase.dart
│   └── {entity_name}_repository_impl.dart           # rotation_repository_impl.dart
└── gateways/
    └── {gateway_name}_gateway_{impl_type}.dart      # notification_gateway_local.dart
    └── {gateway_name}_gateway_impl.dart             # notification_gateway_impl.dart
```

## Presentation

```yaml
presentation/
├── dto/
│   └── {action}_{entity_name}_request.dart      # create_rotation_request.dart
│   └── {entity_name}_response.dart              # rotation_response.dart
├── screens/
│   └── {feature_name}_screen.dart               # rotation_screen.dart
├── widgets/
│   └── glass_{widget_purpose}.dart              # glass_button.dart
│   └── {feature}_{widget_purpose}.dart          # rotation_form_weekday.dart
└── enums/
    └── {enum_name}.dart                         # auth_mode.dart
```

## Use Cases

```yaml
use_cases/
└── {action}_{entity_name}_use_case.dart    # create_rotation_use_case.dart
└── {process_name}_use_case.dart            # sync_notifications_use_case.dart
```

## Providers (RiverPod)

```yaml
providers/
├── {feature_name}_providers.dart      # rotation_providers.dart (DI依存関係定義)
├── {feature_name}_notifier.dart       # rotation_notifier.dart (状態管理、Class型)
└── {feature_name}_handlers.dart       # rotation_handlers.dart (Future/Stream戻り値のMethod型)
```
