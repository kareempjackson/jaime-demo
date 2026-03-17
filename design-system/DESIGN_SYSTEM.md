# Jaime Demo Design System

A dark-themed, touch-optimized design system for tablet-based juice bar POS.

## Design Principles

1. **Touch-First**: Minimum 48px touch targets, generous spacing
2. **High Contrast**: Light text on dark backgrounds for readability
3. **Speed**: Fast interactions, minimal cognitive load
4. **Consistency**: Single accent color, unified component patterns

## Color System

### Backgrounds (Dark to Light)
| Token | Hex | Usage |
|-------|-----|-------|
| bg-primary | #0a0a0b | App background |
| bg-secondary | #141416 | Cards, panels |
| bg-tertiary | #1c1c1f | Inputs, buttons |
| bg-elevated | #232326 | Modals, dropdowns |
| bg-hover | #2a2a2e | Hover states |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| text-primary | #fafafa | Headings, prices, primary content |
| text-secondary | #a1a1a6 | Body text, labels |
| text-muted | #6b6b70 | Captions, hints |

### Accent (Fresh Green)
| Token | Hex | Usage |
|-------|-----|-------|
| accent | #22c55e | CTAs, prices, success states |
| accent-hover | #16a34a | Button hover |
| accent-muted | rgba(34,197,94,0.15) | Backgrounds |

### Semantic
| Token | Hex | Usage |
|-------|-----|-------|
| error | #ef4444 | Errors, destructive actions |
| warning | #f59e0b | Warnings |
| success | #22c55e | Success (same as accent) |

## Typography

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 30px | 700 | 1.25 |
| H2 | 24px | 600 | 1.25 |
| H3 | 20px | 600 | 1.25 |
| Price | 24px | 600 | 1.25 |
| Body | 16px | 400 | 1.5 |
| Body Large | 18px | 400 | 1.5 |
| Caption | 14px | 400 | 1.5 |
| Small | 12px | 400 | 1.5 |

**Font Stack**: Inter, -apple-system, sans-serif
**Monospace**: JetBrains Mono (order numbers, prices)

## Spacing

4px base grid. Common values:

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Tight gaps |
| space-2 | 8px | Icon gaps |
| space-3 | 12px | Small padding |
| space-4 | 16px | Standard padding |
| space-6 | 24px | Section padding |
| space-8 | 32px | Large gaps |
| space-12 | 48px | Touch target height |

## Touch Targets

- **Minimum**: 48px × 48px
- **Comfortable**: 56px × 56px
- **Keypad buttons**: 72px × 72px

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| radius-sm | 6px | Small elements |
| radius-md | 8px | Buttons, inputs |
| radius-lg | 12px | Cards |
| radius-xl | 16px | Modals |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| shadow-sm | 0 1px 2px rgba(0,0,0,0.4) | Subtle lift |
| shadow-md | 0 4px 12px rgba(0,0,0,0.5) | Cards |
| shadow-lg | 0 8px 24px rgba(0,0,0,0.6) | Modals |

## Components

See individual component specs:
- [Button](./components/button.md)
- [Menu Item Card](./components/menu-item-card.md)
- [Order Summary Sidebar](./components/order-summary-sidebar.md)
- [Numeric Keypad](./components/numeric-keypad.md)
- [Modal](./components/modal.md)
- [Top Nav](./components/top-nav.md)

## Animations

| Type | Duration | Easing |
|------|----------|--------|
| Micro-interactions | 100ms | ease |
| UI transitions | 150ms | ease |
| Page transitions | 300ms | ease-out |

## Accessibility

- Contrast ratio: 4.5:1 minimum for text
- Focus visible: 2px accent outline with 2px offset
- Motion: Respect prefers-reduced-motion
- Touch: No hover-only interactions