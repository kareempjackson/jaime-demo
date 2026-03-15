# Modal Dialog

Confirmation and alert dialogs. Centered with backdrop overlay.

## Sizes

| Size | Max Width | Use Case |
|------|-----------|----------|
| `sm` | 320px | Simple confirmations |
| `md` | 420px | Standard dialogs |
| `lg` | 540px | Complex content |

## Anatomy

```
┌─────────────────────────────────┐
│  ✕                              │  Close button (optional)
│                                 │
│         [Icon]                  │  Optional icon (48px)
│                                 │
│     Dialog Title                │  24px, font-semibold
│                                 │
│  Description text goes here     │  16px, text-secondary
│  and can span multiple lines.   │
│                                 │
│  ┌───────────┐  ┌───────────┐   │  Action buttons
│  │  Cancel   │  │  Confirm  │   │  Min 48px height
│  └───────────┘  └───────────┘   │
└─────────────────────────────────┘
```

## Props

```typescript
interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  icon?: 'warning' | 'error' | 'success' | 'info' | ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showClose?: boolean;
  children?: ReactNode;  // Custom content
  actions?: ModalAction[];
}

interface ModalAction {
  label: string;
  variant: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
  loading?: boolean;
}
```

## Backdrop

- Color: `rgba(0, 0, 0, 0.7)`
- Click to close (optional, disable for critical confirmations)
- Blur: `backdrop-blur-sm`

## Animation

- Backdrop: Fade in 150ms
- Modal: Fade + scale from 95% to 100%, 150ms
- Exit: Reverse animations

## Presets

```tsx
// Confirmation
<Modal
  title="Complete Order?"
  description="This will finalize order #023 for $15.66"
  icon="success"
  actions={[
    { label: 'Cancel', variant: 'secondary', onClick: onClose },
    { label: 'Complete', variant: 'primary', onClick: onConfirm },
  ]}
/>

// Destructive
<Modal
  title="Void Order?"
  description="This action cannot be undone."
  icon="warning"
  actions={[
    { label: 'Keep Order', variant: 'secondary', onClick: onClose },
    { label: 'Void Order', variant: 'danger', onClick: onVoid },
  ]}
/>
```