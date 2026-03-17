# Modal Dialog

Centered overlay for confirmations and alerts.

## Specs

| Property | Value |
|----------|-------|
| Max Width | 400px |
| Padding | 24px |
| Border Radius | 16px |
| Background | bg-elevated |
| Shadow | shadow-modal |
| Backdrop | rgba(0,0,0,0.7) with blur(4px) |

## Layout

```
┌──────────────────────────────┐
│  ✕                           │  ← Close button (optional)
│                              │
│     🎉                       │  ← Icon (optional)
│                              │
│     Confirm Action?          │  ← Title, 20px, semibold
│                              │
│  Are you sure you want to    │  ← Description, text-secondary
│  clear this order?           │
│                              │
│  ┌──────────┐ ┌──────────┐   │  ← Action buttons
│  │  Cancel  │ │  Confirm │   │
│  └──────────┘ └──────────┘   │
└──────────────────────────────┘
```

## Variants

| Variant | Icon Color | Confirm Button |
|---------|------------|----------------|
| default | accent | primary |
| danger | error | danger |
| success | accent | primary |

## Props

```typescript
interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  icon?: ReactNode;
  variant?: 'default' | 'danger' | 'success';
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}
```

## Animation

- Backdrop: fade in 150ms
- Modal: scale(0.95) → scale(1), fade in 150ms