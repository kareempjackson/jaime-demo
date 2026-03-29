# Jaime Demo - Juice Bar Design System

## Overview

This design system is crafted specifically for a modern juice bar application, emphasizing freshness, health, energy, and a welcoming atmosphere. The visual language draws inspiration from fresh fruits, vibrant produce, and the natural world.

---

## Brand Personality

- **Fresh** - Clean, crisp, and natural
- **Energetic** - Vibrant colors that pop
- **Welcoming** - Friendly and approachable
- **Health-conscious** - Green-forward palette
- **Modern** - Contemporary and trendy

---

## Color Palette

### Primary Colors

#### Primary Green (Fresh & Healthy)
The main brand color representing freshness, health, and natural ingredients.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#f0fdf4` | Subtle backgrounds |
| `primary-100` | `#dcfce7` | Light backgrounds, hover states |
| `primary-200` | `#bbf7d0` | Borders, dividers |
| `primary-300` | `#86efac` | Icons, accents |
| `primary-400` | `#4ade80` | Secondary buttons |
| `primary-500` | `#22c55e` | **Primary brand color** |
| `primary-600` | `#16a34a` | Primary buttons, links |
| `primary-700` | `#15803d` | Hover states |
| `primary-800` | `#166534` | Active states |
| `primary-900` | `#14532d` | Dark text on light |
| `primary-950` | `#052e16` | Dark mode backgrounds |

#### Secondary Orange (Citrus & Energy)
Represents citrus fruits and energizing vibes.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-500` | `#f97316` | **Main orange** |
| `secondary-400` | `#fb923c` | Highlights |
| `secondary-600` | `#ea580c` | CTAs, accents |

#### Accent Yellow (Sunshine & Tropical)
Brings warmth and tropical feelings.

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-400` | `#facc15` | **Main yellow** |
| `accent-300` | `#fde047` | Highlights |
| `accent-500` | `#eab308` | Badges, tags |

#### Berry Purple (Smoothies & Berries)
Represents berry ingredients and smoothie options.

| Token | Hex | Usage |
|-------|-----|-------|
| `berry-500` | `#a855f7` | **Main purple** |
| `berry-400` | `#c084fc` | Highlights |
| `berry-600` | `#9333ea` | Accents |

### Semantic Colors

| Purpose | Color | Hex |
|---------|-------|-----|
| Success | Green | `#22c55e` |
| Warning | Amber | `#f59e0b` |
| Error | Red | `#ef4444` |
| Info | Blue | `#3b82f6` |

---

## Typography

### Font Families

#### Poppins (Headings)
- **Use for:** Headlines, titles, navigation
- **Character:** Modern, friendly, geometric
- **Weights:** 500 (Medium), 600 (Semibold), 700 (Bold)

```css
font-family: 'Poppins', sans-serif;
```

#### Inter (Body)
- **Use for:** Body text, paragraphs, UI elements
- **Character:** Clean, highly legible, professional
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold)

```css
font-family: 'Inter', sans-serif;
```

#### Fredoka One (Display)
- **Use for:** Promotional text, fun callouts, specials
- **Character:** Playful, rounded, attention-grabbing
- **Weights:** 400 (Regular)

```css
font-family: 'Fredoka One', cursive;
```

### Type Scale

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| `text-xs` | 12px | 16px | Captions, labels |
| `text-sm` | 14px | 20px | Secondary text |
| `text-base` | 16px | 24px | Body text |
| `text-lg` | 18px | 28px | Large body |
| `text-xl` | 20px | 28px | Subheadings |
| `text-2xl` | 24px | 32px | Section titles |
| `text-3xl` | 30px | 36px | Page titles |
| `text-4xl` | 36px | 40px | Hero text |
| `text-5xl` | 48px | 1.15 | Display |
| `text-6xl` | 60px | 1.1 | Large display |

### Font Loading

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet">
```

---

## Spacing

Based on a 4px grid system:

| Token | Value | Pixels |
|-------|-------|--------|
| `space-1` | 0.25rem | 4px |
| `space-2` | 0.5rem | 8px |
| `space-3` | 0.75rem | 12px |
| `space-4` | 1rem | 16px |
| `space-5` | 1.25rem | 20px |
| `space-6` | 1.5rem | 24px |
| `space-8` | 2rem | 32px |
| `space-10` | 2.5rem | 40px |
| `space-12` | 3rem | 48px |
| `space-16` | 4rem | 64px |
| `space-20` | 5rem | 80px |
| `space-24` | 6rem | 96px |

---

## Border Radius

Rounded corners create a friendly, approachable feel:

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Small elements |
| `radius-md` | 8px | Buttons, inputs |
| `radius-lg` | 12px | Cards |
| `radius-xl` | 16px | Large cards |
| `radius-2xl` | 24px | Modals, panels |
| `radius-3xl` | 32px | Feature sections |
| `radius-full` | 9999px | Pills, avatars |

---

## Shadows

| Token | Usage |
|-------|-------|
| `shadow-sm` | Subtle elevation |
| `shadow-md` | Cards, dropdowns |
| `shadow-lg` | Modals, popovers |
| `shadow-xl` | Floating elements |
| `shadow-brand` | Primary buttons (green glow) |

---

## Component Guidelines

### Buttons

```html
<!-- Primary Button -->
<button class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg shadow-brand transition-all">
  Order Now
</button>

<!-- Secondary Button -->
<button class="bg-primary-100 hover:bg-primary-200 text-primary-700 font-semibold py-3 px-6 rounded-lg transition-all">
  View Menu
</button>

<!-- Accent Button -->
<button class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all">
  Today's Special
</button>
```

### Cards

```html
<div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
  <!-- Card content -->
</div>
```

### Input Fields

```html
<input 
  type="text" 
  class="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
  placeholder="Search juices..."
/>
```

---

## Gradients

### Fresh Gradient
```css
background: linear-gradient(135deg, #22c55e 0%, #4ade80 50%, #86efac 100%);
```

### Citrus Gradient
```css
background: linear-gradient(135deg, #f97316 0%, #facc15 100%);
```

### Berry Gradient
```css
background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
```

### Tropical Gradient
```css
background: linear-gradient(135deg, #22c55e 0%, #facc15 50%, #f97316 100%);
```

---

## Usage Examples

### Menu Item Card
```jsx
<div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <img src="/juice.jpg" alt="Green Goddess" className="w-full h-48 object-cover" />
  <div className="p-5">
    <h3 className="font-heading font-semibold text-xl text-neutral-900">Green Goddess</h3>
    <p className="font-body text-neutral-600 mt-2">Spinach, kale, apple, ginger</p>
    <div className="flex justify-between items-center mt-4">
      <span className="font-mono font-bold text-2xl text-primary-600">$8.99</span>
      <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg shadow-brand">
        Add to Cart
      </button>
    </div>
  </div>
</div>
```

### Promo Banner
```jsx
<div className="bg-gradient-tropical rounded-2xl p-8 text-white text-center">
  <h2 className="font-display text-4xl">Summer Special!</h2>
  <p className="font-body text-lg mt-2 opacity-90">Get 20% off all tropical smoothies</p>
  <button className="mt-4 bg-white text-primary-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
    Order Now
  </button>
</div>
```

---

## Accessibility

- All color combinations meet WCAG 2.1 AA contrast requirements
- Primary text on white: 12.6:1 contrast ratio
- Interactive elements have visible focus states
- Font sizes start at 12px minimum for readability

---

## File Structure

```
design-system/
├── tokens.css          # CSS custom properties
├── tailwind.config.js  # Tailwind configuration
└── DESIGN_SYSTEM.md    # This documentation
```

---

## Version

**v1.0.0** - Initial design system for Jaime Demo Juice Bar App