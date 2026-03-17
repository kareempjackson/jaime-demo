# Menu Item Card

Displays a menu item with name and price. Tap to add to order.

## Specs

| Property | Value |
|----------|-------|
| Min Width | 160px |
| Height | 120px |
| Padding | 16px |
| Border Radius | 12px |
| Background | bg-secondary |
| Border | 1px solid border |

## Layout

```
┌────────────────────┐
│                    │
│  Item Name         │  ← text-primary, 16px, semibold
│                    │
│  $X.XX             │  ← accent, 24px, semibold
│                    │
└────────────────────┘
```

## States

- **Default**: bg-secondary
- **Hover**: bg-tertiary, border-accent/30
- **Active**: scale(0.97), bg-hover
- **Unavailable**: 50% opacity, strikethrough price

## Props

```typescript
interface MenuItemCardProps {
  id: string;
  name: string;
  priceCents: number;
  available?: boolean;
  onTap: (id: string) => void;
}
```

## Accessibility

- role="button"
- aria-label includes full item name and price
- aria-disabled when unavailable