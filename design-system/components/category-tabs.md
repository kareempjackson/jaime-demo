# Category Tabs

Horizontal tabs for filtering menu items by category.

## Dimensions

- **Tab Height**: 48px (touch target)
- **Tab Padding**: 16px 24px
- **Gap**: 8px
- **Container**: Horizontally scrollable if needed

## Props

```typescript
interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string | null;  // null = "All"
  onChange: (categoryId: string | null) => void;
}

interface Category {
  id: string;
  name: string;
  count?: number;  // Optional item count
}
```

## Tab States

| State | Background | Text | Border |
|-------|------------|------|--------|
| Default | `transparent` | `text-secondary` | none |
| Hover | `bg-hover` | `text-primary` | none |
| Active | `accent-muted` | `accent` | none |

## Layout

```
┌──────┐ ┌────────┐ ┌─────────┐ ┌───────┐ ┌────────┐
│ All  │ │ Juices │ │ Smoothies│ │ Shots │ │ Snacks │
└──────┘ └────────┘ └─────────┘ └───────┘ └────────┘
   ▲
 Active (accent bg, accent text)
```

## Behavior

- "All" tab always first
- Active tab has pill background
- Smooth scroll indicator for overflow
- Tap anywhere on tab (not just text)