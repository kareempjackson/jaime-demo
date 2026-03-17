# Jaime Demo Design System

A dark-themed, touch-optimized design system for tablet-based juice bar POS.

## Design Principles

1. **Touch-First**: Minimum 48px touch targets, generous spacing
2. **High Contrast**: Dark backgrounds with bright text for readability
3. **Fast Feedback**: Immediate visual response to all interactions
4. **Scannable**: Large prices, clear hierarchy, minimal clutter

## Color System

### Backgrounds (Dark to Light)
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | #0a0a0b | App background |
| `bg-secondary` | #141416 | Cards, sidebar |
| `bg-tertiary` | #1c1c1f | Elevated elements |
| `bg-elevated` | #232326 | Modals, dropdowns |
| `bg-hover` | #2a2a2e | Hover states |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | #fafafa | Headings, prices, important |
| `text-secondary` | #a1a1a6 | Body text, labels |
| `text-muted` | #6b6b70 | Captions, hints |

### Accent (Fresh Green)
| Token | Hex | Usage |
|-------|-----|-------|
| `accent` | #22c55e | Primary CTAs, prices, success |
| `accent-hover` | #16a34a | Hover state |
| `accent-muted` | rgba(34,197,94,0.15) | Backgrounds, badges |

### Semantic
| Token | Hex | Usage |
|-------|-----|-------|
| `error` | #ef4444 | Errors, destructive |
| `warning` | #f59e0b | Warnings |
| `success` | #22c55e | Success states |

## Typography

### Font Families
- **Sans**: Inter (primary UI)
- **Mono**: JetBrains Mono (prices, codes)

### Scale
| Name | Size | Weight | Usage |
|------|------|--------|-------|
| `xs` | 12px | 400 | Captions |
| `sm` | 14px | 400 | Secondary text |
| `base` | 16px | 400 | Body (minimum) |
| `lg` | 18px | 500 | Card titles |
| `xl` | 20px | 600 | Section headers |
| `2xl` | 24px | 600 | Prices |
| `3xl` | 30px | 700 | Large prices |
| `4xl` | 36px | 700 | Hero numbers |

## Spacing

Based on 4px grid:

| Token | Value | Common Use |
|-------|-------|------------|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Icon gaps |
| `space-3` | 12px | Inline padding |
| `space-4` | 16px | Card padding |
| `space-6` | 24px | Section gaps |
| `space-8` | 32px | Large gaps |
| `space-12` | 48px | Touch targets |

## Touch Targets

- **Minimum**: 48px × 48px
- **Comfortable**: 56px × 56px
- **Keypad keys**: 72px × 72px

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 6px | Small buttons, inputs |
| `md` | 8px | Default |
| `lg` | 12px | Cards, large buttons |
| `xl` | 16px | Modals |
| `full` | 9999px | Pills, avatars |

## Shadows

All shadows use high opacity for dark theme visibility:

| Token | Usage |
|-------|-------|
| `sm` | Subtle lift |
| `md` | Cards |
| `lg` | Dropdowns |
| `xl` | Modals |

## Components

See individual component specs in `/components/`:

- [Button](./components/button.md)
- [Menu Item Card](./components/menu-item-card.md)
- [Order Summary](./components/order-summary.md)
- [Numeric Keypad](./components/numeric-keypad.md)
- [Modal](./components/modal.md)
- [Top Nav](./components/top-nav.md)
- [PIN Display](./components/pin-display.md)

## Animations

| Name | Duration | Easing | Usage |
|------|----------|--------|-------|
| `fade-in` | 200ms | ease-out | Overlays |
| `slide-up` | 300ms | ease-out | Modals, toasts |
| `scale-in` | 200ms | ease-out | Popovers |
| `shake` | 500ms | ease-in-out | Error feedback |

## Accessibility

- All interactive elements have visible focus states
- Color contrast meets WCAG AA (4.5:1 for text)
- Touch targets exceed 44px minimum
- Error states use color + icon + text