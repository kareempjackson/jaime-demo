# PIN Display

Visual indicator for entered PIN digits.

## Layout

```
   ●  ●  ○  ○
```

4 dots representing PIN digits. Filled = entered, empty = remaining.

## Specs

| Property | Value |
|----------|-------|
| Dot size | 16px |
| Gap | 16px |
| Filled color | accent (#22c55e) |
| Empty color | border (#2a2a2e) |
| Error color | error (#ef4444) |

## Props

```tsx
interface PinDisplayProps {
  length: number;       // Total digits (default 4)
  filled: number;       // Entered digits count
  error?: boolean;      // Show error state
  errorMessage?: string;
}
```

## States

- **Default**: Empty dots with border
- **Filling**: Dots fill left-to-right with scale animation
- **Complete**: All dots filled, ready to submit
- **Error**: All dots red, shake animation, message below

## Animation

- Dot fill: scale(1.2) then scale(1), 150ms
- Error shake: translateX ±8px, 500ms
- Reset: fade out dots, 200ms