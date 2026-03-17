# Jaime Demo - Juice Bar Design System

## Overview

This design system is crafted specifically for a juice bar application, emphasizing freshness, health, vitality, and natural ingredients. The visual language evokes the vibrant colors of fresh fruits and vegetables while maintaining a clean, modern aesthetic.

---

## Brand Personality

- **Fresh & Natural** - Inspired by organic ingredients
- **Energetic & Vibrant** - Full of life and vitality
- **Friendly & Approachable** - Welcoming to all customers
- **Clean & Modern** - Professional yet fun
- **Health-Conscious** - Promoting wellness

---

## Color Palette

### Primary Colors - Fresh Green
Represents health, freshness, and natural ingredients.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#f0fdf4` | Backgrounds, hover states |
| `primary-100` | `#dcfce7` | Light backgrounds |
| `primary-200` | `#bbf7d0` | Borders, dividers |
| `primary-300` | `#86efac` | Icons, accents |
| `primary-400` | `#4ade80` | Interactive elements |
| `primary-500` | `#22c55e` | **Primary brand color** |
| `primary-600` | `#16a34a` | Hover states |
| `primary-700` | `#15803d` | Active states |
| `primary-800` | `#166534` | Dark accents |
| `primary-900` | `#14532d` | Text on light |

### Secondary Colors - Citrus Orange
Represents energy, vitality, and tropical flavors.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-50` | `#fff7ed` | Backgrounds |
| `secondary-100` | `#ffedd5` | Light backgrounds |
| `secondary-200` | `#fed7aa` | Borders |
| `secondary-300` | `#fdba74` | Icons |
| `secondary-400` | `#fb923c` | Interactive elements |
| `secondary-500` | `#f97316` | **Secondary brand color** |
| `secondary-600` | `#ea580c` | Hover states |
| `secondary-700` | `#c2410c` | Active states |

### Accent Colors - Berry Purple
Represents premium offerings and antioxidant-rich ingredients.

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-500` | `#a855f7` | Special highlights |
| `accent-600` | `#9333ea` | Premium badges |

### Tropical Yellow
Represents sunshine, happiness, and tropical fruits.

| Token | Hex | Usage |
|-------|-----|-------|
| `tropical-400` | `#facc15` | Highlights, promotions |
| `tropical-500` | `#eab308` | Badges, alerts |

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

#### Display Font: Poppins
- **Use for:** Headlines, titles, navigation, CTAs
- **Characteristics:** Geometric, friendly, modern
- **Weights:** 500 (Medium), 600 (Semibold), 700 (Bold)

```css
font-family: 'Poppins', sans-serif;
```

#### Body Font: Inter
- **Use for:** Body text, descriptions, form labels
- **Characteristics:** Highly readable, clean, professional
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold)

```css
font-family: 'Inter', sans-serif;
```

### Type Scale

| Name | Size | Line Height | Use Case |
|------|------|-------------|----------|
| `xs` | 12px / 0.75rem | 1rem | Captions, fine print |
| `sm` | 14px / 0.875rem | 1.25rem | Secondary text, labels |
| `base` | 16px / 1rem | 1.5rem | Body text |
| `lg` | 18px / 1.125rem | 1.75rem | Lead paragraphs |
| `xl` | 20px / 1.25rem | 1.75rem | Card titles |
| `2xl` | 24px / 1.5rem | 2rem | Section headers |
| `3xl` | 30px / 1.875rem | 2.25rem | Page titles |
| `4xl` | 36px / 2.25rem | 2.5rem | Hero headlines |
| `5xl` | 48px / 3rem | 1.15 | Large display |
| `6xl` | 60px / 3.75rem | 1.1 | Hero display |

### Typography Examples

```html
<!-- Hero Headline -->
<h1 class="font-display text-5xl font-bold text-primary-900">
  Fresh Juices, Made Daily
</h1>

<!-- Section Title -->
<h2 class="font-display text-3xl font-semibold text-neutral-800">
  Our Menu
</h2>

<!-- Body Text -->
<p class="font-body text-base text-neutral-600">
  Discover our selection of cold-pressed juices...
</p>
```

---

## Spacing System

Based on a 4px grid for consistent rhythm.

| Token | Value | Pixels |
|-------|-------|--------|
| `1` | 0.25rem | 4px |
| `2` | 0.5rem | 8px |
| `3` | 0.75rem | 12px |
| `4` | 1rem | 16px |
| `5` | 1.25rem | 20px |
| `6` | 1.5rem | 24px |
| `8` | 2rem | 32px |
| `10` | 2.5rem | 40px |
| `12` | 3rem | 48px |
| `16` | 4rem | 64px |
| `20` | 5rem | 80px |
| `24` | 6rem | 96px |

---

## Border Radius

| Token | Value | Use Case |
|-------|-------|----------|
| `sm` | 4px | Small elements, tags |
| `default` | 8px | Buttons, inputs |
| `md` | 12px | Cards |
| `lg` | 16px | Large cards, modals |
| `xl` | 24px | Hero sections |
| `2xl` | 32px | Feature cards |
| `full` | 9999px | Pills, avatars |

---

## Shadows

| Token | Use Case |
|-------|----------|
| `soft` | Subtle elevation |
| `medium` | Cards, dropdowns |
| `strong` | Modals, popovers |
| `glow-primary` | Primary CTA emphasis |
| `glow-secondary` | Secondary highlights |

---

## Component Guidelines

### Buttons

```html
<!-- Primary Button -->
<button class="bg-primary-500 hover:bg-primary-600 text-white font-display font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-soft hover:shadow-medium">
  Order Now
</button>

<!-- Secondary Button -->
<button class="bg-secondary-500 hover:bg-secondary-600 text-white font-display font-semibold px-6 py-3 rounded-lg transition-all duration-200">
  View Menu
</button>

<!-- Outline Button -->
<button class="border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-display font-semibold px-6 py-3 rounded-lg transition-all duration-200">
  Learn More
</button>
```

### Cards

```html
<div class="bg-white rounded-xl shadow-medium p-6 hover:shadow-strong transition-shadow duration-300">
  <img class="w-full h-48 object-cover rounded-lg mb-4" />
  <h3 class="font-display text-xl font-semibold text-neutral-800 mb-2">Green Goddess</h3>
  <p class="font-body text-neutral-600 mb-4">Kale, spinach, apple, ginger</p>
  <span class="font-display text-2xl font-bold text-primary-600">$8.99</span>
</div>
```

### Badges

```html
<!-- New Item Badge -->
<span class="bg-secondary-100 text-secondary-700 font-display text-sm font-semibold px-3 py-1 rounded-full">
  New
</span>

<!-- Popular Badge -->
<span class="bg-primary-100 text-primary-700 font-display text-sm font-semibold px-3 py-1 rounded-full">
  Popular
</span>

<!-- Premium Badge -->
<span class="bg-accent-100 text-accent-700 font-display text-sm font-semibold px-3 py-1 rounded-full">
  Premium
</span>
```

---

## Iconography

### Recommended Icon Sets
- **Lucide React** - Clean, consistent line icons
- **Heroicons** - Solid and outline options

### Icon Sizes
| Size | Pixels | Use Case |
|------|--------|----------|
| `sm` | 16px | Inline with text |
| `md` | 20px | Buttons, inputs |
| `lg` | 24px | Navigation, cards |
| `xl` | 32px | Feature highlights |

---

## Accessibility Guidelines

1. **Color Contrast** - Maintain WCAG AA minimum (4.5:1 for text)
2. **Focus States** - Visible focus rings on all interactive elements
3. **Touch Targets** - Minimum 44x44px for mobile
4. **Alt Text** - All images must have descriptive alt text
5. **Semantic HTML** - Use proper heading hierarchy

---

## Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet">
```

---

## CSS Import

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700;800&display=swap');
```

---

## File Structure

```
design-system/
├── tokens.css          # CSS custom properties
├── tailwind.config.js  # Tailwind configuration
└── DESIGN_SYSTEM.md    # This documentation
```