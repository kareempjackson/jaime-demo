# Menu Item Card

Displays a menu item in the product grid. Tap to add to order.

## Dimensions

- **Min Width**: 160px
- **Recommended**: 180-220px in responsive grid
- **Padding**: 16px
- **Border Radius**: 12px

## Anatomy

```
┌─────────────────────────┐
│                         │
│      [Item Image]       │  Optional, 80px height
│                         │
├─────────────────────────┤
│  Item Name              │  16px, font-medium, text-primary
│  Category               │  14px, text-muted
│                         │
│  $X.XX                  │  24px, font-semibold, accent
└─────────────────────────┘
```

## Props

```typescript
interface MenuItemCardProps {
  id: string;
  name: string;
  price_cents: number;
  category: string;
  image_url?: string;
  available?: boolean;
  onTap: (id: string) => void;
}
```

## States

- **Default**: `bg-secondary`, `border-subtle`
- **Hover/Focus**: `bg-tertiary`, `border-default`, subtle scale 1.02
- **Active**: Scale 0.98, `shadow-glow`
- **Unavailable**: 50% opacity, strikethrough price, disabled

## Price Formatting

Always display with 2 decimal places: `$4.50` not `$4.5`

## Accessibility

- Full card is tappable (not just a button inside)
- Focus ring on keyboard navigation
- `aria-disabled` when unavailable