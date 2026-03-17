# Jaime Demo - Juice Bar Design System

## Overview

This design system is crafted specifically for a juice bar application, emphasizing freshness, health, and vibrant energy. The visual language draws inspiration from fresh fruits, natural ingredients, and the joy of healthy living.

## Brand Personality

- **Fresh & Vibrant**: Colors that pop like ripe fruits
- **Friendly & Approachable**: Rounded shapes and playful typography
- **Health-Conscious**: Clean, natural aesthetic
- **Energetic**: Bright accents and smooth animations

---

## Colors

### Primary Palette - Orange (Energy & Freshness)

Our primary orange represents the energy and vitality of fresh-squeezed juice.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#fff7ed` | Backgrounds, hover states |
| `primary-100` | `#ffedd5` | Light backgrounds |
| `primary-200` | `#fed7aa` | Borders, dividers |
| `primary-300` | `#fdba74` | Icons, secondary elements |
| `primary-400` | `#fb923c` | Hover states |
| `primary-500` | `#f97316` | **Primary actions, CTAs** |
| `primary-600` | `#ea580c` | Active states, emphasis |
| `primary-700` | `#c2410c` | Dark accents |
| `primary-800` | `#9a3412` | Text on light backgrounds |
| `primary-900` | `#7c2d12` | Headings |

### Secondary Palette - Green (Health & Natural)

Green represents health, nature, and fresh ingredients.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-50` | `#f0fdf4` | Success backgrounds |
| `secondary-500` | `#22c55e` | **Health indicators, organic badges** |
| `secondary-700` | `#15803d` | Success text, emphasis |

### Accent Palette - Yellow (Sunshine & Citrus)

Yellow brings warmth and citrus vibes.

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-50` | `#fefce8` | Highlight backgrounds |
| `accent-500` | `#eab308` | **Promotions, highlights** |
| `accent-700` | `#a16207` | Warning states |

### Fruit Accent Colors

Special colors for fruit categories:

- **Berry** (`#dc2626`): Red fruits - strawberry, raspberry
- **Tropical** (`#06b6d4`): Blue/cyan fruits - blueberry, açaí
- **Grape** (`#7c3aed`): Purple fruits - grape, blackberry

### Semantic Colors

| Color | Token | Usage |
|-------|-------|-------|
| Success | `success` / `#22c55e` | Order complete, in stock |
| Warning | `warning` / `#f59e0b` | Low stock, wait times |
| Error | `error` / `#ef4444` | Out of stock, errors |
| Info | `info` / `#3b82f6` | Tips, information |

---

## Typography

### Font Families

```css
--font-family-display: 'Fredoka', cursive;  /* Headings, logos */
--font-family-body: 'Nunito', sans-serif;    /* Body text, UI */
--font-family-mono: 'JetBrains Mono';        /* Prices, codes */
```

### Font Scale

| Class | Size | Usage |
|-------|------|-------|
| `text-xs` | 12px | Labels, captions |
| `text-sm` | 14px | Secondary text, metadata |
| `text-base` | 16px | Body text |
| `text-lg` | 18px | Large body, intro text |
| `text-xl` | 20px | Card titles |
| `text-2xl` | 24px | Section headings |
| `text-3xl` | 30px | Page titles |
| `text-4xl` | 36px | Hero headings |
| `text-5xl` | 48px | Display text |

### Font Weights

- `font-normal` (400): Body text
- `font-medium` (500): Emphasis
- `font-semibold` (600): Subheadings, buttons
- `font-bold` (700): Headings
- `font-extrabold` (800): Hero text, prices

---

## Spacing

We use a consistent 4px base unit:

| Token | Value | Common Usage |
|-------|-------|-------------|
| `spacing-1` | 4px | Tight gaps |
| `spacing-2` | 8px | Icon gaps, small padding |
| `spacing-3` | 12px | Button padding |
| `spacing-4` | 16px | Card padding, standard gaps |
| `spacing-6` | 24px | Section gaps |
| `spacing-8` | 32px | Large section padding |
| `spacing-12` | 48px | Page sections |
| `spacing-16` | 64px | Major sections |

---

## Border Radius

Rounded corners create a friendly, approachable feel:

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Subtle rounding |
| `rounded` | 8px | Inputs, small cards |
| `rounded-md` | 12px | Buttons, tags |
| `rounded-lg` | 16px | Cards |
| `rounded-xl` | 20px | Modal headers |
| `rounded-2xl` | 24px | Product cards |
| `rounded-3xl` | 32px | Hero cards |
| `rounded-full` | 9999px | Pills, avatars |

---

## Shadows

### Standard Shadows

```css
shadow-sm    /* Subtle depth */
shadow       /* Cards, dropdowns */
shadow-md    /* Elevated cards */
shadow-lg    /* Modals, popovers */
shadow-xl    /* Hero elements */
```

### Colored Shadows (Juice Theme)

```css
shadow-orange  /* Primary buttons, CTAs */
shadow-green   /* Success states, health items */
shadow-yellow  /* Promotions, highlights */
shadow-juice   /* Featured products */
```

---

## Components

### Buttons

#### Primary Button (Juice)
```html
<button class="btn-juice">
  Add to Cart
</button>
```

#### Fresh Button (Secondary)
```html
<button class="btn-fresh">
  View Menu
</button>
```

#### Button States
- **Default**: Full color with subtle shadow
- **Hover**: Lifts up (-2px), stronger shadow
- **Active**: Returns to original position
- **Disabled**: 50% opacity, no shadow

### Cards

#### Product Card
```html
<div class="card-juice">
  <img src="..." alt="Juice" class="rounded-xl" />
  <h3 class="text-xl font-bold">Green Goddess</h3>
  <p class="text-secondary">Spinach, apple, ginger</p>
  <span class="text-2xl font-extrabold text-primary">$8.99</span>
</div>
```

### Inputs

```html
<input type="text" class="input-juice" placeholder="Search juices..." />
```

### Glass Effect

For overlays and floating elements:

```html
<div class="glass rounded-2xl p-6">
  <!-- Content with frosted glass background -->
</div>
```

---

## Animations

### Available Animations

| Class | Duration | Usage |
|-------|----------|-------|
| `animate-fade-in` | 300ms | Page transitions |
| `animate-slide-up` | 300ms | Modal entrance |
| `animate-scale-in` | 200ms | Dropdown menus |
| `animate-bounce-soft` | 1s loop | Attention indicators |
| `animate-wiggle` | 500ms | Error states |
| `animate-blend` | 1.5s loop | Blender/mixing animation |

### Transition Utilities

```css
transition-all duration-200  /* Standard interactions */
transition-transform duration-300 ease-bounce  /* Playful hover */
```

---

## Gradients

### Predefined Gradients

```css
bg-gradient-juice     /* Orange to Yellow - Main brand */
bg-gradient-fresh     /* Green to Yellow - Health focus */
bg-gradient-berry     /* Red to Purple - Berry products */
bg-gradient-tropical  /* Cyan to Green - Tropical items */
```

### Text Gradient

```html
<h1 class="text-gradient-juice text-5xl font-bold">
  Fresh & Delicious
</h1>
```

---

## Dark Mode

The design system supports automatic dark mode via `prefers-color-scheme` or manual toggle with the `.dark` class.

### Key Changes in Dark Mode
- Background shifts to warm stone tones
- Text inverts to light colors
- Primary orange maintains vibrancy
- Shadows become more subtle

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 for normal text)
- Interactive elements have visible focus states
- Don't rely on color alone for information

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
```

### Motion
- Respect `prefers-reduced-motion`
- Keep animations under 300ms for interactions
- Provide alternatives for animated content

---

## Usage Examples

### Menu Item Card

```html
<article class="card-juice group">
  <div class="relative overflow-hidden rounded-xl">
    <img 
      src="/juices/green-goddess.jpg" 
      alt="Green Goddess Juice"
      class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <span class="absolute top-3 right-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
      Popular
    </span>
  </div>
  
  <div class="mt-4">
    <h3 class="font-display text-xl font-bold text-neutral-900">
      Green Goddess
    </h3>
    <p class="mt-1 text-sm text-neutral-600">
      Spinach, kale, apple, ginger, lemon
    </p>
    
    <div class="mt-4 flex items-center justify-between">
      <span class="text-2xl font-extrabold text-primary-600">$8.99</span>
      <button class="btn-juice">
        Add to Cart
      </button>
    </div>
  </div>
</article>
```

### Order Summary

```html
<div class="glass rounded-2xl p-6">
  <h2 class="font-display text-2xl font-bold">Your Order</h2>
  
  <div class="mt-4 space-y-3">
    <div class="flex justify-between">
      <span>Green Goddess x2</span>
      <span class="font-mono font-semibold">$17.98</span>
    </div>
    <div class="flex justify-between">
      <span>Berry Blast x1</span>
      <span class="font-mono font-semibold">$9.99</span>
    </div>
  </div>
  
  <hr class="my-4 border-neutral-200" />
  
  <div class="flex justify-between text-lg font-bold">
    <span>Total</span>
    <span class="text-primary-600 font-mono">$27.97</span>
  </div>
  
  <button class="btn-juice w-full mt-6">
    Checkout
  </button>
</div>
```

---

## File Structure

```
design-system/
├── tokens.css           # CSS custom properties
├── tailwind.config.js   # Tailwind configuration
└── DESIGN_SYSTEM.md     # This documentation
```

## Getting Started

1. Import the tokens CSS file in your main stylesheet:
   ```css
   @import './design-system/tokens.css';
   ```

2. Use the Tailwind config or extend it:
   ```js
   // tailwind.config.js
   const juiceConfig = require('./design-system/tailwind.config.js');
   module.exports = juiceConfig;
   ```

3. Add Google Fonts to your HTML:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet">
   ```

---

*Design System v1.0 - Jaime Demo Juice Bar*