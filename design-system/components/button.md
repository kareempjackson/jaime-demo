# Button

Primary interactive element. All buttons meet 48px minimum touch target.

## Variants

| Variant | Use Case | Background | Text |
|---------|----------|------------|------|
| `primary` | Main actions (Add to Order, Complete) | `accent` | `text-inverse` |
| `secondary` | Secondary actions (Cancel, Back) | `bg-tertiary` | `text-primary` |
| `ghost` | Tertiary actions (Edit, Remove) | `transparent` | `text-secondary` |
| `danger` | Destructive actions (Void Order) | `error` | `text-primary` |

## Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|----------|
| `sm` | 40px | 12px 16px | 14px |
| `md` | 48px | 14px 20px | 16px |
| `lg` | 56px | 16px 24px | 18px |
| `xl` | 64px | 20px 32px | 20px |

## Props

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
  onClick?: () => void;
}
```

## States

- **Default**: Base colors
- **Hover**: `accent-hover` or `bg-hover`
- **Active**: Scale 0.98, slightly darker
- **Disabled**: 50% opacity, cursor not-allowed
- **Loading**: Show spinner, disable interaction

## Usage

```tsx
<Button variant="primary" size="lg">Add to Order</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost" icon={<TrashIcon />}>Remove</Button>
```