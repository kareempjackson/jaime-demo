# Numeric Keypad

Touch-optimized keypad for PIN entry.

## Layout

```
┌─────┬─────┬─────┐
│  1  │  2  │  3  │
├─────┼─────┼─────┤
│  4  │  5  │  6  │
├─────┼─────┼─────┤
│  7  │  8  │  9  │
├─────┼─────┼─────┤
│     │  0  │  ⌫  │
└─────┴─────┴─────┘
```

## Specs

| Property | Value |
|----------|-------|
| Grid | 3 columns, 4 rows |
| Gap | 12px |
| Button size | 72px × 72px |
| Button radius | 12px |
| Font | 24px semibold |
| Background | bg-tertiary |

## Key States

- **Default**: bg-tertiary, text-primary
- **Hover**: bg-hover
- **Active**: bg-elevated, scale(0.95)
- **Backspace**: text-secondary, danger on long-press

## Props

```tsx
interface NumericKeypadProps {
  onDigit: (digit: string) => void;
  onBackspace: () => void;
  onClear?: () => void;
  disabled?: boolean;
}
```

## Accessibility

- ARIA role="group" with label
- Each key is a button with aria-label
- Visible focus ring on keyboard nav