# Modal Dialog

Centered overlay for confirmations and alerts.

## Anatomy

```
┌─────────────────────────────┐
│  [Icon]                     │
│                             │
│  Title                      │  ← 24px semibold
│  Description text here      │  ← 16px, text-secondary
│                             │
│  [Secondary]    [Primary]   │  ← Action buttons
└─────────────────────────────┘
```

## Specs

| Property | Value |
|----------|-------|
| Width | 400px (max 90vw) |
| Padding | 24px |
| Background | bg-elevated |
| Border | 1px border-DEFAULT |
| Radius | 16px |
| Shadow | shadow-xl |
| Backdrop | rgba(0,0,0,0.7) |

## Variants

| Variant | Icon | Primary Button |
|---------|------|----------------|
| `confirm` | CheckCircle (accent) | primary |
| `danger` | AlertTriangle (error) | danger |
| `info` | Info (text-secondary) | primary |

## Props

```tsx
interface ModalProps {
  open: boolean;
  onClose: () => void;
  variant?: 'confirm' | 'danger' | 'info';
  title: string;
  description?: string;
  primaryAction: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
}
```

## Animation

- Backdrop: fadeIn 200ms
- Content: scaleIn + slideUp 300ms ease-out
- Close: reverse animations