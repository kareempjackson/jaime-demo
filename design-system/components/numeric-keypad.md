# Numeric Keypad

Touch-optimized keypad for PIN entry.

## Specs

| Property | Value |
|----------|-------|
| Button Size | 72px × 72px |
| Gap | 16px |
| Border Radius | 12px |
| Background | bg-tertiary |

## Layout

```
┌────┐ ┌────┐ ┌────┐
│ 1  │ │ 2  │ │ 3  │
└────┘ └────┘ └────┘
┌────┐ ┌────┐ ┌────┐
│ 4  │ │ 5  │ │ 6  │
└────┘ └────┘ └────┘
┌────┐ ┌────┐ ┌────┐
│ 7  │ │ 8  │ │ 9  │
└────┘ └────┘ └────┘
┌────┐ ┌────┐ ┌────┐
│ ⌫  │ │ 0  │ │ ✓  │
└────┘ └────┘ └────┘
```

## Button States

| State | Style |
|-------|-------|
| Default | bg-tertiary, text-primary |
| Hover | bg-hover |
| Active | bg-elevated, scale(0.95) |
| Disabled | 30% opacity |

## Special Keys

| Key | Icon | Action |
|-----|------|--------|
| Backspace | ⌫ | Remove last digit |
| Submit | ✓ | Submit PIN (accent bg when enabled) |

## Props

```typescript
interface NumericKeypadProps {
  onDigit: (digit: string) => void;
  onBackspace: () => void;
  onSubmit: () => void;
  submitDisabled?: boolean;
  maxLength?: number;
}
```