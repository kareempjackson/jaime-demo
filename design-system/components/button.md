# Button

Primary interactive element. All buttons have minimum 48px touch target.

## Variants

| Variant | Background | Text | Use Case |
|---------|------------|------|----------|
| `primary` | accent (#22c55e) | white | Main CTAs, submit actions |
| `secondary` | bg-tertiary | text-primary | Secondary actions |
| `ghost` | transparent | text-secondary | Tertiary actions, nav |
| `danger` | error (#ef4444) | white | Destructive actions |

## Sizes

| Size | Height | Padding | Font |
|------|--------|---------|------|
| `sm` | 40px | 12px 16px | 14px medium |
| `md` | 48px | 14px 20px | 16px medium |
| `lg` | 56px | 16px 24px | 18px semibold |

## Props

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}
```

## States

- **Default**: Base styles
- **Hover**: Slightly darker background, scale(1.02)
- **Active**: scale(0.98), darker background
- **Disabled**: 50% opacity, cursor-not-allowed
- **Loading**: Spinner replaces content, disabled interaction

## Usage

```tsx
<Button variant="primary" size="lg">Add to Order</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger" loading>Delete Item</Button>
```