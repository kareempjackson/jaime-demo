# Button

Primary interactive element. Minimum 48px touch target for tablet use.

## Variants

| Variant | Background | Text | Use Case |
|---------|------------|------|----------|
| primary | accent | white | Main CTAs, submit actions |
| secondary | bg-tertiary | text-primary | Secondary actions |
| ghost | transparent | text-secondary | Tertiary, cancel actions |
| danger | error | white | Destructive actions |

## Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|----------|
| sm | 40px | 12px 16px | 14px |
| md | 48px | 14px 20px | 16px |
| lg | 56px | 16px 24px | 18px |

## States

- **Default**: Base styling
- **Hover**: Darken 10%, scale(1.02)
- **Active**: scale(0.98)
- **Disabled**: 50% opacity, cursor-not-allowed
- **Loading**: Show spinner, disable interaction

## Props

```typescript
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

## Usage

```tsx
<Button variant="primary" size="lg">Add to Order</Button>
<Button variant="ghost" leftIcon={<LogoutIcon />}>Logout</Button>
```