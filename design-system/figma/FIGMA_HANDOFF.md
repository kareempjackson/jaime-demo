# Figma Design Handoff Guide

## Setting Up the Figma File

### 1. Color Styles

Create the following color styles in Figma:

**Primary (Green)**
- `Primary/50` → #f0fdf4
- `Primary/100` → #dcfce7
- `Primary/200` → #bbf7d0
- `Primary/300` → #86efac
- `Primary/400` → #4ade80
- `Primary/500` → #22c55e (Main)
- `Primary/600` → #16a34a
- `Primary/700` → #15803d
- `Primary/800` → #166534
- `Primary/900` → #14532d

**Secondary (Orange)**
- `Secondary/50` → #fff7ed
- `Secondary/100` → #ffedd5
- `Secondary/200` → #fed7aa
- `Secondary/300` → #fdba74
- `Secondary/400` → #fb923c
- `Secondary/500` → #f97316 (Main)
- `Secondary/600` → #ea580c
- `Secondary/700` → #c2410c
- `Secondary/800` → #9a3412
- `Secondary/900` → #7c2d12

**Accent (Purple)**
- `Accent/50` → #faf5ff
- `Accent/100` → #f3e8ff
- `Accent/200` → #e9d5ff
- `Accent/300` → #d8b4fe
- `Accent/400` → #c084fc
- `Accent/500` → #a855f7 (Main)
- `Accent/600` → #9333ea
- `Accent/700` → #7c3aed
- `Accent/800` → #6b21a8
- `Accent/900` → #581c87

### 2. Text Styles

**Display (Poppins)**
- `Display/Large` → Poppins Bold 60px / Line 1.0
- `Display/Medium` → Poppins Bold 48px / Line 1.0
- `Display/Small` → Poppins Semibold 36px / Line 1.1

**Headings (Poppins)**
- `Heading/H1` → Poppins Semibold 30px / Line 1.2
- `Heading/H2` → Poppins Semibold 24px / Line 1.3
- `Heading/H3` → Poppins Medium 20px / Line 1.4
- `Heading/H4` → Poppins Medium 18px / Line 1.4

**Body (Inter)**
- `Body/Large` → Inter Regular 18px / Line 1.5
- `Body/Base` → Inter Regular 16px / Line 1.5
- `Body/Small` → Inter Regular 14px / Line 1.43
- `Body/XSmall` → Inter Regular 12px / Line 1.33

**Labels (Inter)**
- `Label/Large` → Inter Medium 16px / Line 1.5
- `Label/Base` → Inter Medium 14px / Line 1.43
- `Label/Small` → Inter Medium 12px / Line 1.33

### 3. Effect Styles

**Shadows**
- `Shadow/Soft` → 0 2px 15px rgba(0,0,0,0.07), 0 10px 20px rgba(0,0,0,0.04)
- `Shadow/Medium` → 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)
- `Shadow/Large` → 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1)
- `Shadow/Primary` → 0 4px 14px rgba(34,197,94,0.25)
- `Shadow/Secondary` → 0 4px 14px rgba(249,115,22,0.25)

### 4. Component Structure

#### Buttons
Create as components with variants:
- Variant: Primary / Secondary / Outline / Ghost
- Size: Small / Medium / Large
- State: Default / Hover / Pressed / Disabled / Loading

#### Cards
Create as components with variants:
- Variant: Default / Elevated / Outlined
- Size: Small / Medium / Large

#### Inputs
Create as components with:
- State: Default / Focus / Error / Disabled
- With/without: Label, Hint, Icon

### 5. Auto Layout Settings

**Spacing**
- Use 8px increments (8, 16, 24, 32, 48, 64)
- Card padding: 24px
- Button padding: 12px vertical, 24px horizontal
- Input padding: 12px vertical, 16px horizontal

**Border Radius**
- Small: 8px
- Medium: 12px
- Large: 16px
- XLarge: 24px
- Full: 9999px (for pills/circles)

### 6. Responsive Frames

Create frames for:
- Mobile: 375px width
- Tablet: 768px width
- Desktop: 1280px width
- Large Desktop: 1440px width

### 7. Asset Export Settings

**Images**
- Export @1x, @2x, @3x for mobile
- Use WebP format when possible
- Optimize file sizes

**Icons**
- Export as SVG
- Maintain 24x24 viewBox
- 2px stroke width default

---

## Design Tokens Plugin

Recommended Figma plugins:
1. **Tokens Studio for Figma** — Sync design tokens with code
2. **Figma Tokens** — Export tokens as JSON

Token JSON can be exported and used directly with the CSS custom properties in `tokens.css`.
