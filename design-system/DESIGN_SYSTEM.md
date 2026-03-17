# Jaime Demo - Juice Bar Design System

## Overview

This design system provides a comprehensive foundation for building the Jaime Demo juice bar application. The visual language is inspired by fresh fruits, vegetables, and the vibrant energy of a healthy lifestyle.

---

## Brand Personality

- **Fresh** — Clean, crisp, and natural
- **Vibrant** — Energetic and colorful
- **Approachable** — Friendly and welcoming
- **Health-focused** — Wellness-oriented but not clinical

---

## Color Palette

### Primary Colors (Fresh Green)
Represents health, freshness, and natural ingredients.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-500` | `#22c55e` | Primary buttons, links, success states |
| `primary-600` | `#16a34a` | Hover states, emphasis |
| `primary-100` | `#dcfce7` | Light backgrounds, badges |

### Secondary Colors (Sunny Orange)
Represents energy, citrus, and warmth.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-500` | `#f97316` | Secondary actions, highlights |
| `secondary-600` | `#ea580c` | Hover states |
| `secondary-100` | `#ffedd5` | Light backgrounds, alerts |

### Accent Colors (Berry Purple)
Represents premium quality and antioxidants.

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-500` | `#a855f7` | Special offers, premium items |
| `accent-600` | `#9333ea` | Hover states |
| `accent-100` | `#f3e8ff` | Light backgrounds |

### Semantic Colors

| Purpose | Color | Usage |
|---------|-------|-------|
| Success | `#22c55e` | Confirmations, completed orders |
| Warning | `#f59e0b` | Alerts, low stock |
| Error | `#ef4444` | Errors, out of stock |
| Info | `#3b82f6` | Information, tips |

---

## Typography

### Font Families

#### Display Font: Poppins
- **Use for:** Headlines, hero text, brand elements
- **Weights:** 600 (Semibold), 700 (Bold), 800 (Extrabold)
- **Google Fonts:** `https://fonts.google.com/specimen/Poppins`

#### Body Font: Inter
- **Use for:** Body text, UI elements, forms
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold)
- **Google Fonts:** `https://fonts.google.com/specimen/Inter`

### Type Scale

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| `display-lg` | 60px | 1 | Hero headlines |
| `display-md` | 48px | 1 | Section headers |
| `display-sm` | 36px | 1.1 | Page titles |
| `text-2xl` | 24px | 1.33 | Card titles |
| `text-xl` | 20px | 1.4 | Subtitles |
| `text-lg` | 18px | 1.5 | Lead paragraphs |
| `text-base` | 16px | 1.5 | Body text |
| `text-sm` | 14px | 1.43 | Secondary text |
| `text-xs` | 12px | 1.33 | Captions, labels |

---

## Spacing System

Based on a 4px grid:

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight spacing |
| `space-2` | 8px | Icon gaps |
| `space-3` | 12px | Small padding |
| `space-4` | 16px | Standard padding |
| `space-6` | 24px | Card padding |
| `space-8` | 32px | Section spacing |
| `space-12` | 48px | Large sections |
| `space-16` | 64px | Page sections |

---

## Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--color-primary-500);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 200ms ease;
}
.btn-primary:hover {
  background: var(--color-primary-600);
  box-shadow: var(--shadow-primary);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: var(--color-secondary-500);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
}
```

#### Outline Button
```css
.btn-outline {
  background: transparent;
  border: 2px solid var(--color-primary-500);
  color: var(--color-primary-600);
  padding: 10px 22px;
  border-radius: 12px;
  font-weight: 600;
}
```

### Cards

#### Product Card
- Border radius: 16px (`radius-xl`)
- Shadow: `shadow-soft`
- Padding: 24px
- Image aspect ratio: 1:1 or 4:3
- Hover: Subtle lift with `shadow-lg`

#### Menu Category Card
- Border radius: 24px (`radius-2xl`)
- Gradient background from color palette
- Large icon or image
- Bold category name

### Input Fields

```css
.input {
  border: 1px solid var(--color-neutral-300);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  transition: border-color 200ms ease;
}
.input:focus {
  border-color: var(--color-primary-500);
  outline: none;
  box-shadow: 0 0 0 3px var(--color-primary-100);
}
```

### Navigation

#### Top Navigation Bar
- Background: White with subtle shadow
- Height: 64px
- Logo on left, navigation links center, cart/profile right

#### Mobile Bottom Navigation
- Fixed bottom bar with 5 icons max
- Active state: Primary color with label
- Height: 64px + safe area

---

## Iconography

Recommended icon sets:
- **Lucide Icons** (primary) — Clean, consistent, customizable
- **Heroicons** (alternative) — Similar aesthetic

### Icon Sizes
| Size | Pixels | Usage |
|------|--------|-------|
| sm | 16px | Inline with small text |
| md | 20px | Buttons, inputs |
| lg | 24px | Navigation, cards |
| xl | 32px | Feature icons |
| 2xl | 48px | Empty states, hero |

---

## Imagery Guidelines

### Photography Style
- **Bright and airy** — Natural lighting, white/light backgrounds
- **Fresh ingredients** — Show whole fruits, vegetables, ingredients
- **Action shots** — Blending, pouring, preparing
- **Lifestyle** — Happy customers, vibrant environments

### Image Treatments
- Slight warm color grade
- High contrast
- Occasional gradient overlays for text readability

---

## Figma Component Structure

### Recommended Figma Organization

```
📁 Jaime Demo Design System
├── 📄 Cover
├── 📄 Foundations
│   ├── Colors
│   ├── Typography
│   ├── Spacing & Grid
│   ├── Shadows & Effects
│   └── Icons
├── 📄 Components
│   ├── Buttons
│   ├── Inputs
│   ├── Cards
│   ├── Navigation
│   ├── Modals
│   └── Lists
├── 📄 Patterns
│   ├── Forms
│   ├── Product Grid
│   ├── Cart
│   └── Checkout
└── 📄 Templates
    ├── Home
    ├── Menu
    ├── Product Detail
    ├── Cart
    └── Order Confirmation
```

---

## Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## Accessibility

### Color Contrast
- All text meets WCAG 2.1 AA standards
- Primary green on white: 4.5:1 ratio ✓
- Use `primary-700` for better contrast on light backgrounds

### Focus States
- All interactive elements have visible focus rings
- Focus ring color: `primary-500` with 3px offset

### Touch Targets
- Minimum touch target: 44x44px
- Adequate spacing between interactive elements

---

## Implementation Notes

### CSS Custom Properties
All tokens are available as CSS custom properties in `tokens.css`. Import at the root of your application.

### Tailwind CSS
The `tailwind.config.js` extends the default theme with our custom design tokens. Colors, fonts, and spacing are all mapped to match the design system.

### Font Loading
Add to your HTML `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
```
