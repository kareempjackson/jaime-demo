# Figma Design Handoff Guide

## Quick Start for Designers

This document provides specifications for recreating the Jaime Demo design system in Figma.

---

## 1. Color Styles to Create

### Primary (Green)
```
primary/50   → #f0fdf4
primary/100  → #dcfce7
primary/200  → #bbf7d0
primary/300  → #86efac
primary/400  → #4ade80
primary/500  → #22c55e  ⭐ Main
primary/600  → #16a34a  ⭐ Buttons
primary/700  → #15803d
primary/800  → #166534
primary/900  → #14532d
```

### Secondary (Orange)
```
secondary/50   → #fff7ed
secondary/100  → #ffedd5
secondary/200  → #fed7aa
secondary/300  → #fdba74
secondary/400  → #fb923c
secondary/500  → #f97316  ⭐ Main
secondary/600  → #ea580c
secondary/700  → #c2410c
secondary/800  → #9a3412
secondary/900  → #7c2d12
```

### Accent (Purple)
```
accent/50   → #faf5ff
accent/100  → #f3e8ff
accent/200  → #e9d5ff
accent/300  → #d8b4fe
accent/400  → #c084fc
accent/500  → #a855f7  ⭐ Main
accent/600  → #9333ea
accent/700  → #7e22ce
accent/800  → #6b21a8
accent/900  → #581c87
```

### Neutral (Stone)
```
neutral/50   → #fafaf9  ⭐ Background
neutral/100  → #f5f5f4
neutral/200  → #e7e5e4  ⭐ Borders
neutral/300  → #d6d3d1
neutral/400  → #a8a29e
neutral/500  → #78716c  ⭐ Secondary text
neutral/700  → #44403c
neutral/900  → #1c1917  ⭐ Primary text
```

### Semantic
```
success → #22c55e
warning → #eab308
error   → #ef4444
info    → #3b82f6
```

---

## 2. Text Styles to Create

### Display
| Name | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| display/xl | Poppins | ExtraBold (800) | 60px | 60px (100%) |
| display/lg | Poppins | Bold (700) | 48px | 52px (108%) |

### Headings
| Name | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| heading/1 | Poppins | Bold (700) | 36px | 44px (122%) |
| heading/2 | Poppins | SemiBold (600) | 30px | 38px (127%) |
| heading/3 | Poppins | SemiBold (600) | 24px | 32px (133%) |
| heading/4 | Poppins | SemiBold (600) | 20px | 28px (140%) |

### Body
| Name | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| body/lg | Inter | Regular (400) | 18px | 28px (156%) |
| body/default | Inter | Regular (400) | 16px | 24px (150%) |
| body/sm | Inter | Regular (400) | 14px | 20px (143%) |

### Labels & Captions
| Name | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| label/default | Inter | Medium (500) | 14px | 20px |
| label/sm | Inter | Medium (500) | 12px | 16px |
| caption | Inter | Regular (400) | 12px | 16px |

---

## 3. Effect Styles (Shadows)

### shadow/xs
```
Y: 1, Blur: 2
Color: #000000, Opacity: 5%
```

### shadow/sm
```
Effect 1: Y: 1, Blur: 3, Color: #000000 @ 10%
Effect 2: Y: 1, Blur: 2, Spread: -1, Color: #000000 @ 10%
```

### shadow/default
```
Effect 1: Y: 4, Blur: 6, Spread: -1, Color: #000000 @ 10%
Effect 2: Y: 2, Blur: 4, Spread: -2, Color: #000000 @ 10%
```

### shadow/md
```
Effect 1: Y: 10, Blur: 15, Spread: -3, Color: #000000 @ 10%
Effect 2: Y: 4, Blur: 6, Spread: -4, Color: #000000 @ 10%
```

### shadow/lg
```
Effect 1: Y: 20, Blur: 25, Spread: -5, Color: #000000 @ 10%
Effect 2: Y: 8, Blur: 10, Spread: -6, Color: #000000 @ 10%
```

---

## 4. Component Specifications

### Button / Primary / Medium
```
Width: Hug contents
Height: 44px
Padding: 12px 24px
Gap: 8px
Background: primary/600
Border Radius: 12px
Text: body/default, SemiBold, White
```

**States:**
- Hover: Background primary/700
- Active: Background primary/800
- Disabled: Opacity 50%

### Button / Secondary / Medium
```
Width: Hug contents
Height: 44px
Padding: 12px 24px
Gap: 8px
Background: White
Border: 2px solid primary/600
Border Radius: 12px
Text: body/default, SemiBold, primary/600
```

### Input / Text / Default
```
Width: Fill container (min 280px)
Height: 48px
Padding: 12px 16px
Background: neutral/50
Border: 2px solid neutral/200
Border Radius: 12px
Text: body/default, neutral/900
Placeholder: neutral/500
```

**States:**
- Focus: Border primary/500, Shadow ring (primary/500 @ 10%, 3px spread)
- Error: Border error
- Disabled: Opacity 50%

### Card / Product
```
Width: 280px (flexible)
Height: Auto
Padding: 16px
Background: White
Border Radius: 24px
Shadow: shadow/md
```

**Contents:**
1. Image container (aspect 1:1, radius 16px)
2. Title: heading/4
3. Description: body/sm, neutral/500
4. Price: heading/3, primary/600
5. Add button: Button/Primary/Small

### Badge / Category
```
Height: 28px
Padding: 4px 12px
Background: primary/100
Border Radius: Full (9999px)
Text: label/sm, primary/700
```

---

## 5. Spacing Tokens

Create these as reusable spacing values:

```
space/1  → 4px
space/2  → 8px
space/3  → 12px
space/4  → 16px
space/5  → 20px
space/6  → 24px
space/8  → 32px
space/10 → 40px
space/12 → 48px
space/16 → 64px
space/20 → 80px
space/24 → 96px
```

---

## 6. Border Radius Tokens

```
radius/sm   → 2px
radius/default → 6px
radius/md   → 8px
radius/lg   → 12px
radius/xl   → 16px
radius/2xl  → 24px
radius/3xl  → 32px
radius/full → 9999px
```

---

## 7. Frame Templates

### Mobile Frame
```
Width: 375px
Height: 812px (iPhone X)
Background: neutral/50
```

### Tablet Frame
```
Width: 768px
Height: 1024px
Background: neutral/50
```

### Desktop Frame
```
Width: 1440px
Height: 900px
Background: neutral/50
```

---

## 8. Grid Settings

### Mobile (375px)
```
Columns: 4
Margin: 16px
Gutter: 16px
```

### Tablet (768px)
```
Columns: 8
Margin: 32px
Gutter: 24px
```

### Desktop (1440px)
```
Columns: 12
Margin: 120px
Gutter: 24px
Max content width: 1200px
```

---

## 9. Icon Library

Recommended: Import Lucide Icons plugin

### Core Icons Needed:
- Navigation: `home`, `search`, `user`, `shopping-bag`, `menu`
- Actions: `plus`, `minus`, `x`, `check`, `arrow-left`, `arrow-right`
- Products: `leaf`, `apple`, `carrot`, `droplet`, `flame`
- Social: `heart`, `star`, `share-2`
- Utility: `filter`, `sliders`, `refresh-cw`, `info`

### Icon Specs:
- Size: 24px × 24px
- Stroke: 2px
- Color: Current color (inherit from parent)

---

## 10. Animation Specs (for Prototyping)

### Default Transition
```
Duration: 200ms
Easing: Ease out
```

### Hover Effect (Cards)
```
Property: Position Y
Value: -4px
Duration: 200ms
```

### Page Transition
```
Type: Slide in
Direction: Right
Duration: 300ms
Easing: Ease out
```

---

## Quick Reference Card

| Element | Size | Radius | Shadow |
|---------|------|--------|--------|
| Button SM | 36px | 8px | none |
| Button MD | 44px | 12px | none |
| Button LG | 52px | 12px | none |
| Input | 48px | 12px | none |
| Card | auto | 24px | md |
| Badge | 28px | full | none |
| Avatar SM | 32px | full | none |
| Avatar MD | 40px | full | none |
| Avatar LG | 64px | full | none |

---

*Sync this with tokens.css for consistency between design and development.*