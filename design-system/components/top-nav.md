# Top Navigation Bar

Persistent header showing staff info and logout.

## Specs

| Property | Value |
|----------|-------|
| Height | 64px |
| Background | bg-secondary |
| Border Bottom | 1px solid border |
| Padding | 0 24px |

## Layout

```
┌─────────────────────────────────────────────────────┐
│  🥤 Jaime Juice Bar          Staff: Maria  [Logout]│
└─────────────────────────────────────────────────────┘
     ↑                              ↑           ↑
   Logo/Name                   Staff name   Ghost button
```

## Elements

| Element | Style |
|---------|-------|
| Logo | 32px icon + brand name |
| Brand Name | text-xl, semibold, text-primary |
| Staff Label | text-secondary, 14px |
| Staff Name | text-primary, 16px, semibold |
| Logout Button | ghost variant, with icon |

## Props

```typescript
interface TopNavProps {
  storeName: string;
  staffName: string;
  onLogout: () => void;
  showBackButton?: boolean;
  onBack?: () => void;
}
```

## Responsive

On smaller tablets, hide store name, show only logo icon.