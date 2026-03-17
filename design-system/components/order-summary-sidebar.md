# Order Summary Sidebar

Right-side panel showing current order items and total.

## Specs

| Property | Value |
|----------|-------|
| Width | 30% of screen (min 320px) |
| Background | bg-secondary |
| Border Left | 1px solid border |
| Padding | 24px |

## Layout

```
┌─────────────────────────┐
│  Current Order      #003│  ← Header
├─────────────────────────┤
│  Green Smoothie    x2   │
│                   $12.00│  ← Order items (scrollable)
│  Orange Juice      x1   │
│                    $5.50│
├─────────────────────────┤
│  Subtotal        $17.50 │  ← Totals section
│  Tax              $1.40 │
│  ─────────────────────  │
│  Total           $18.90 │  ← Large, accent color
├─────────────────────────┤
│  ┌─────────────────────┐│
│  │   Complete Order    ││  ← Primary button, full width
│  └─────────────────────┘│
│  ┌─────────────────────┐│
│  │    Clear Order      ││  ← Ghost button
│  └─────────────────────┘│
└─────────────────────────┘
```

## Order Item Row

| Element | Style |
|---------|-------|
| Name | text-primary, 16px |
| Quantity | text-secondary, badge style |
| Price | text-primary, 16px, right-aligned |
| Remove | Ghost icon button, appears on hover/focus |

## Props

```typescript
interface OrderSummaryProps {
  orderNumber: string;
  items: OrderItem[];
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
  onComplete: () => void;
  onClear: () => void;
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
}
```