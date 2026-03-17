# Order Summary Sidebar

Right-side panel showing current order items and total.

## Layout

```
┌────────────────────────┐
│  Current Order         │  ← Header, 20px semibold
├────────────────────────┤
│  Item Name        ×2   │  ← Scrollable list
│  $X.XX                 │
│────────────────────────│
│  Another Item     ×1   │
│  $X.XX                 │
├────────────────────────┤
│  Subtotal    $XX.XX    │  ← Fixed footer
│  [Clear]  [Complete]   │
└────────────────────────┘
```

## Specs

| Property | Value |
|----------|-------|
| Width | 320px (fixed) |
| Background | bg-secondary |
| Border-left | 1px border-DEFAULT |
| Header height | 56px |
| Footer height | 120px |

## Order Item Row

| Property | Value |
|----------|-------|
| Height | min 56px |
| Padding | 12px 16px |
| Name | 16px medium, text-primary |
| Quantity | 16px medium, text-secondary |
| Price | 16px semibold, text-primary |
| Actions | +/- buttons, 36px touch |

## Props

```tsx
interface OrderSummaryProps {
  items: OrderItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClear: () => void;
  onComplete: () => void;
}
```