# Menu Item Card

Displays a single menu item in the order screen grid. Optimized for quick tap-to-add.

## Anatomy

```
┌─────────────────────────┐
│                         │
│      [Item Name]        │  ← 18px semibold, text-primary
│                         │
│        $X.XX            │  ← 24px bold, accent color
│                         │
└─────────────────────────┘
```

## Specs

| Property | Value |
|----------|-------|
| Min size | 140px × 100px |
| Padding | 16px |
| Background | bg-secondary |
| Border | 1px border-DEFAULT |
| Radius | 12px |
| Touch target | Full card area |

## Props

```tsx
interface MenuItemCardProps {
  id: string;
  name: string;
  priceCents: number;
  available?: boolean;
  onTap: (id: string) => void;
}
```

## States

- **Default**: bg-secondary, border-DEFAULT
- **Hover/Focus**: bg-tertiary, border-hover
- **Active**: scale(0.97), accent border
- **Unavailable**: 50% opacity, strikethrough name
- **Just Added**: Brief green flash animation

## Interaction

Single tap adds 1 item to order. Visual feedback via scale + flash.