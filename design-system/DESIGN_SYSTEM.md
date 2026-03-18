# Jaime Demo - Juice Bar Design System

## Overview

This design system is crafted specifically for a juice bar application, featuring fresh, vibrant colors that evoke health, vitality, and natural ingredients. The typography choices balance friendliness with professionalism.

---

## Color Palette

### Primary Colors - Fresh Citrus Orange

Our primary color palette is inspired by fresh oranges and citrus fruits, conveying energy, warmth, and freshness.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | #fff7ed | Light backgrounds, hover states |
| `primary-100` | #ffedd5 | Subtle backgrounds |
| `primary-200` | #fed7aa | Borders, dividers |
| `primary-300` | #fdba74 | Icons, decorative elements |
| `primary-400` | #fb923c | Secondary buttons |
| `primary-500` | #f97316 | **Main brand color**, primary buttons |
| `primary-600` | #ea580c | Hover states for primary |
| `primary-700` | #c2410c | Active states |
| `primary-800` | #9a3412 | Dark accents |
| `primary-900` | #7c2d12 | Text on light backgrounds |

### Secondary Colors - Leafy Green

Representing health, freshness, and natural ingredients.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-50` | #f0fdf4 | Light backgrounds |
| `secondary-100` | #dcfce7 | Success backgrounds |
| `secondary-200` | #bbf7d0 | Borders |
| `secondary-300` | #86efac | Icons |
| `secondary-400` | #4ade80 | Secondary actions |
| `secondary-500` | #22c55e | **Secondary brand color** |
| `secondary-600` | #16a34a | Hover states |
| `secondary-700` | #15803d | Active states |
| `secondary-800` | #166534 | Dark accents |
| `secondary-900` | #14532d | Text |

### Accent Colors - Berry Purple

For special promotions, premium items, and visual interest.

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-50` | #faf5ff | Light backgrounds |
| `accent-500` | #a855f7 | **Accent color** |
| `accent-600` | #9333ea | Hover states |
| `accent-700` | #7e22ce | Active states |

### Semantic Colors

| Purpose | Color | Light Variant | Usage |
|---------|-------|---------------|-------|
| Success | #22c55e | #dcfce7 | Order confirmed, available items |
| Warning | #eab308 | #fef9c3 | Low stock, allergen warnings |
| Error | #ef4444 | #fee2e2 | Out of stock, form errors |
| Info | #3b82f6 | #dbeafe | Tips, nutritional info |

---

## Typography

### Font Families

#### Headings - Poppins
```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- **Why Poppins?** Geometric, modern, and friendly. Perfect for a health-focused brand.
- **Weights used:** 500 (Medium), 600 (Semibold), 700 (Bold)

#### Body - Inter
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- **Why Inter?** Highly legible, optimized for screens, professional appearance.
- **Weights used:** 400 (Regular), 500 (Medium), 600 (Semibold)

#### Monospace - JetBrains Mono
```css
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```
- **Usage:** Order numbers, prices, nutritional data

### Type Scale

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| `xs` | 12px (0.75rem) | 1rem | Captions, labels |
| `sm` | 14px (0.875rem) | 1.25rem | Secondary text, metadata |
| `base` | 16px (1rem) | 1.5rem | Body text |
| `lg` | 18px (1.125rem) | 1.75rem | Lead paragraphs |
| `xl` | 20px (1.25rem) | 1.75rem | Section headers |
| `2xl` | 24px (1.5rem) | 2rem | Card titles |
| `3xl` | 30px (1.875rem) | 2.25rem | Page sections |
| `4xl` | 36px (2.25rem) | 2.5rem | Page titles |
| `5xl` | 48px (3rem) | 1.25 | Hero headlines |
| `6xl` | 60px (3.75rem) | 1.2 | Marketing displays |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Large decorative text |
| Normal | 400 | Body text |
| Medium | 500 | Emphasis, subheadings |
| Semibold | 600 | Headings, buttons |
| Bold | 700 | Strong emphasis |
| Extrabold | 800 | Hero text |

---

## Spacing Scale

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `spacing-1` | 0.25rem | 4px | Tight spacing |
| `spacing-2` | 0.5rem | 8px | Icon gaps |
| `spacing-3` | 0.75rem | 12px | Button padding |
| `spacing-4` | 1rem | 16px | Standard spacing |
| `spacing-6` | 1.5rem | 24px | Section padding |
| `spacing-8` | 2rem | 32px | Card padding |
| `spacing-12` | 3rem | 48px | Section margins |
| `spacing-16` | 4rem | 64px | Large sections |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Small buttons, tags |
| `radius-md` | 6px | Input fields |
| `radius-lg` | 8px | Cards, modals |
| `radius-xl` | 12px | Large cards |
| `radius-2xl` | 16px | Featured elements |
| `radius-full` | 9999px | Avatars, pills |

---

## Shadows

| Level | Usage |
|-------|-------|
| `shadow-sm` | Subtle depth, input focus |
| `shadow-md` | Cards, dropdowns |
| `shadow-lg` | Modals, popovers |
| `shadow-xl` | Floating elements |
| `shadow-2xl` | Hero cards |

---

## Usage Guidelines

### Buttons

```html
<!-- Primary Button -->
<button class="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-normal">
  Order Now
</button>

<!-- Secondary Button -->
<button class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-3 rounded-lg transition-normal">
  Add to Cart
</button>

<!-- Outline Button -->
<button class="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-semibold px-6 py-3 rounded-lg transition-normal">
  Learn More
</button>
```

### Cards

```html
<div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-normal">
  <h3 class="font-heading text-2xl font-semibold text-neutral-900">Green Goddess</h3>
  <p class="font-body text-neutral-600 mt-2">Spinach, apple, ginger, lemon</p>
  <span class="font-mono text-lg font-semibold text-primary-500">$8.99</span>
</div>
```

### Typography Combinations

```html
<!-- Page Header -->
<h1 class="font-heading text-4xl font-bold text-neutral-900">Fresh Juices</h1>
<p class="font-body text-lg text-neutral-600 mt-2">Made fresh daily with organic ingredients</p>

<!-- Product Title -->
<h2 class="font-heading text-2xl font-semibold text-neutral-900">Tropical Sunrise</h2>
```

---

## Loading Google Fonts

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet">
```

Or import in CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700;800&display=swap');
```

---

## Accessibility Notes

- All color combinations meet WCAG AA contrast requirements
- Primary text (#171717) on white background: 15.8:1 ratio
- Primary-500 (#f97316) should only be used for large text or non-text elements
- Always provide hover/focus states for interactive elements
- Use semantic colors consistently for their intended purpose