# Jaime Demo Design System

A dark-themed, touch-optimized design system for a tablet-based juice bar POS application.

## Design Principles

1. **Touch-First**: All interactive elements meet 48px minimum touch target
2. **High Contrast**: Dark backgrounds with bright text for readability in varied lighting
3. **Speed**: Large tap targets and clear visual hierarchy for fast order entry
4. **Clarity**: Prices and totals prominently displayed with consistent formatting

## Color System

### Backgrounds (Dark to Light)
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#0a0a0b` | App background |
| `bg-secondary` | `#141416` | Cards, sidebar |
| `bg-tertiary` | `#1c1c1f` | Elevated cards |
| `bg-elevated` | `#232326` | Modals, dropdowns |
| `bg-hover` | `#2a2a2e` | Hover states |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#fafafa` | Headings, prices |
| `text-secondary` | `#a1a1a6` | Body text |
| `text-muted` | `#6b6b70` | Captions, hints |

### Accent
| Token | Hex | Usage |
|-------|-----|-------|
| `accent` | `#22c55e` | CTAs, prices, success |
| `accent-hover` | `#16a34a` | Hover state |
| `accent-muted` | `rgba(34,197,94,0.15)` | Active tabs, badges |

## Typography

- **Font Family**: Inter (sans), JetBrains Mono (prices, order numbers)
- **Minimum Body**: 16px
- **Prices**: 24px, semibold, accent color
- **Headings**: 20-32px, semibold

## Spacing

Based on 4px grid: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px

## Touch Targets

| Size | Dimension | Usage |
|------|-----------|-------|
| Minimum | 48px | All tappable elements |
| Comfortable | 56px | Primary buttons |
| Large | 64px | PIN keypad, critical actions |

## Components

See individual component specs in `/components/`:
- `button.md` - Primary interactive element
- `menu-item-card.md` - Product display card
- `order-sidebar.md` - Current order summary
- `pin-keypad.md` - Staff authentication
- `modal.md` - Confirmation dialogs
- `top-nav.md` - Header with staff info
- `category-tabs.md` - Menu filtering

## Layout

### 10" Tablet (1280×800)
```
┌─────────────────────────────────────────────────────┐
│                    Top Nav (64px)                   │
├────────────────────────────────┬────────────────────┤
│                                │                    │
│      Menu Grid Area            │   Order Sidebar    │
│      (Category Tabs +          │   (320px fixed)    │
│       Product Cards)           │                    │
│                                │                    │
│                                │                    │
└────────────────────────────────┴────────────────────┘
```

## Animations

- **Transitions**: 150ms ease (default), 100ms (fast), 300ms (emphasis)
- **Button Press**: Scale to 0.98
- **Card Tap**: Scale to 1.02 on hover, 0.98 on active
- **Modal**: Fade + scale from 95%
- **Error Shake**: 3 oscillations, 300ms total