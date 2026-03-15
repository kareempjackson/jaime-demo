# Top Navigation Bar

Persistent header showing staff info and primary actions.

## Dimensions

- **Height**: 64px
- **Background**: `bg-secondary`
- **Border**: `border-b border-subtle`

## Anatomy

```
┌─────────────────────────────────────────────────────────────────┐
│  🥤 Jaime's Juice Bar     │    Sarah M.    │   [Logout]        │
│     Store name            │    Staff name  │   Ghost button    │
└─────────────────────────────────────────────────────────────────┘
     Left section                Center              Right section
```

## Props

```typescript
interface TopNavProps {
  storeName: string;
  staffName: string;
  staffRole?: 'staff' | 'owner';
  onLogout: () => void;
  actions?: NavAction[];  // Additional action buttons
}

interface NavAction {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
}
```

## Sections

### Left - Brand
- Logo/emoji: 24px
- Store name: 18px, font-semibold
- Clickable to go home (optional)

### Center - Staff Info
- Name: 16px, text-primary
- Role badge (if owner): Small pill, `accent-muted` bg

### Right - Actions
- Logout button: Ghost variant, 48px touch target
- Optional: Settings, Reports (owner only)

## Responsive

On 10" tablet (1280×800 typical), all sections visible. No hamburger menu needed.