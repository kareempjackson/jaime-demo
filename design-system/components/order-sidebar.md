# Order Summary Sidebar

Persistent sidebar showing current order. Fixed on right side of tablet screen.

## Dimensions

- **Width**: 320px (fixed)
- **Height**: Full viewport
- **Background**: `bg-secondary`

## Anatomy

```
┌─────────────────────────────┐
│  Current Order    #023      │  Header: 20px title, mono order number
├─────────────────────────────┤
│                             │
│  ┌─────────────────────┐    │
│  │ Green Juice    x2   │    │  Order items list
│  │           $9.00     │    │  Scrollable area
│  └─────────────────────┘    │
│  ┌─────────────────────┐    │
│  │ Berry Blast   x1    │    │
│  │           $5.50     │    │
│  └─────────────────────┘    │
│                             │
├─────────────────────────────┤
│  Subtotal          $14.50   │  Totals section
│  Tax (8%)           $1.16   │  16px, text-secondary
│  ─────────────────────────  │
│  Total             $15.66   │  24px, font-bold, text-primary
├─────────────────────────────┤
│  ┌───────────────────────┐  │
│  │   Complete Order      │  │  Primary button, full width
│  └───────────────────────┘  │  56px height
│  ┌───────────────────────┐  │
│  │      Clear All        │  │  Ghost button
│  └───────────────────────┘  │
└─────────────────────────────┘
```

## Props

```typescript
interface OrderSidebarProps {
  orderNumber: string;
  items: OrderItem[];
  subtotal_cents: number;
  tax_cents: number;
  total_cents: number;
  onComplete: () => void;
  onClear: () => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  unit_price_cents: number;
  total_cents: number;
}
```

## Item Row Interactions

- Tap quantity to edit with number input
- Swipe left to reveal delete button (optional)
- Tap item name does nothing (avoid accidental edits)