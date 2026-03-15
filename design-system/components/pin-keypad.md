# PIN Keypad

Numeric keypad for staff PIN entry. Large touch targets for fast input.

## Dimensions

- **Button Size**: 72px × 72px (exceeds 48px minimum)
- **Gap**: 12px between buttons
- **Total Width**: ~240px (3 columns)

## Layout

```
     ●●●●           PIN display (4 dots)
     
┌────┐ ┌────┐ ┌────┐
│  1 │ │  2 │ │  3 │
└────┘ └────┘ └────┘
┌────┐ ┌────┐ ┌────┐
│  4 │ │  5 │ │  6 │
└────┘ └────┘ └────┘
┌────┐ ┌────┐ ┌────┐
│  7 │ │  8 │ │  9 │
└────┘ └────┘ └────┘
┌────┐ ┌────┐ ┌────┐
│  ⌫ │ │  0 │ │  ✓ │
└────┘ └────┘ └────┘
```

## Props

```typescript
interface PinKeypadProps {
  pinLength?: number;  // Default: 4
  onComplete: (pin: string) => void;
  onCancel?: () => void;
  error?: string;
  loading?: boolean;
}
```

## PIN Display

- Empty dot: `border-2 border-border bg-transparent`
- Filled dot: `bg-accent`
- Error state: Dots turn `error` color, shake animation
- Size: 16px diameter, 12px gap

## Button Styles

- **Number buttons**: `bg-tertiary`, `text-primary`, 32px font
- **Backspace**: `bg-tertiary`, icon 24px
- **Submit**: `bg-accent`, `text-inverse`
- **Hover/Active**: Same as Button component

## Feedback

- Haptic feedback on tap (if supported)
- Brief scale animation on press
- Error shake: 3 horizontal oscillations, 300ms