# Top Navigation Bar

Fixed header showing staff info and navigation.

## Layout

```
┌──────────────────────────────────────────────────────┐
│  [Logo]    Juice Bar          Staff Name    [Logout] │
└──────────────────────────────────────────────────────┘
```

## Specs

| Property | Value |
|----------|-------|
| Height | 64px |
| Background | bg-secondary |
| Border-bottom | 1px border-DEFAULT |
| Padding | 0 24px |
| Position | sticky top-0 z-50 |

## Elements

| Element | Style |
|---------|-------|
| Logo | 32px height |
| Store name | 18px semibold, text-primary |
| Staff name | 14px medium, text-secondary |
| Logout button | ghost variant, 48px touch |

## Props

```tsx
interface TopNavProps {
  storeName: string;
  staffName: string;
  isOwner?: boolean;
  onLogout: () => void;
  navItems?: { label: string; href: string; active?: boolean }[];
}
```

## Owner Badge

When `isOwner` is true, show small "Owner" badge next to staff name:
- Background: accent-muted
- Text: accent, 12px medium
- Padding: 4px 8px
- Radius: full