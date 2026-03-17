# Jaime Demo - Juice Bar Design System

> A fresh, vibrant design system for a modern juice bar application.

---

## 📋 Table of Contents

1. [Brand Overview](#brand-overview)
2. [Colors](#colors)
3. [Typography](#typography)
4. [Spacing](#spacing)
5. [Components](#components)
6. [Icons](#icons)
7. [Figma Guidelines](#figma-guidelines)

---

## 🎨 Brand Overview

### Brand Personality
- **Fresh** - Clean, natural, wholesome
- **Energetic** - Vibrant, lively, dynamic
- **Friendly** - Approachable, welcoming, warm
- **Modern** - Contemporary, sleek, innovative

### Design Principles
1. **Clarity First** - Every element serves a purpose
2. **Natural Feel** - Colors and shapes inspired by nature
3. **Delightful Details** - Subtle animations and micro-interactions
4. **Accessible Always** - WCAG 2.1 AA compliant minimum

---

## 🎨 Colors

### Primary Palette - Fresh Green
Used for primary actions, key UI elements, and brand identity.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | #f0fdf4 | Subtle backgrounds |
| `primary-100` | #dcfce7 | Hover states, light fills |
| `primary-200` | #bbf7d0 | Borders, dividers |
| `primary-300` | #86efac | Inactive states |
| `primary-400` | #4ade80 | Hover states |
| `primary-500` | #22c55e | **Primary brand color** |
| `primary-600` | #16a34a | Primary buttons, links |
| `primary-700` | #15803d | Hover on primary buttons |
| `primary-800` | #166534 | Active states |
| `primary-900` | #14532d | Dark accents |

### Secondary Palette - Citrus Orange
Used for secondary actions, highlights, and energy.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-50` | #fff7ed | Subtle backgrounds |
| `secondary-500` | #f97316 | **Secondary brand color** |
| `secondary-600` | #ea580c | Secondary buttons |
| `secondary-700` | #c2410c | Hover states |

### Accent Palette - Berry Purple
Used for special highlights, rewards, and premium features.

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-50` | #faf5ff | Subtle backgrounds |
| `accent-500` | #a855f7 | **Accent color** |
| `accent-600` | #9333ea | Interactive accent |

### Semantic Colors

| Purpose | Color | Hex | Usage |
|---------|-------|-----|-------|
| Success | Green | #22c55e | Confirmations, complete states |
| Warning | Yellow | #eab308 | Alerts, caution states |
| Error | Red | #ef4444 | Errors, destructive actions |
| Info | Blue | #3b82f6 | Information, tips |

### Neutral Colors
Used for text, backgrounds, borders, and UI chrome.

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | #fafaf9 | Page background |
| `neutral-100` | #f5f5f4 | Card backgrounds |
| `neutral-200` | #e7e5e4 | Borders, dividers |
| `neutral-500` | #78716c | Secondary text |
| `neutral-700` | #44403c | Body text |
| `neutral-900` | #1c1917 | Headlines, primary text |

---

## 📝 Typography

### Font Families

```css
--font-display: 'Poppins', sans-serif;  /* Headlines, titles */
--font-body: 'Inter', sans-serif;        /* Body text, UI */
--font-mono: 'JetBrains Mono', monospace; /* Code, numbers */
```

### Font Loading
Include these Google Fonts in your HTML:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet">
```

### Type Scale

| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| Display XL | 60px | 800 | 1 | Hero headlines |
| Display LG | 48px | 700 | 1.1 | Page titles |
| Heading 1 | 36px | 700 | 1.2 | Section headers |
| Heading 2 | 30px | 600 | 1.25 | Card titles |
| Heading 3 | 24px | 600 | 1.3 | Sub-sections |
| Heading 4 | 20px | 600 | 1.4 | Small headers |
| Body Large | 18px | 400 | 1.6 | Lead paragraphs |
| Body | 16px | 400 | 1.5 | Default text |
| Body Small | 14px | 400 | 1.5 | Secondary text |
| Caption | 12px | 500 | 1.4 | Labels, captions |

---

## 📐 Spacing

### Base Unit: 4px

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `space-1` | 0.25rem | 4px | Tight spacing |
| `space-2` | 0.5rem | 8px | Icon gaps |
| `space-3` | 0.75rem | 12px | Small padding |
| `space-4` | 1rem | 16px | Default padding |
| `space-6` | 1.5rem | 24px | Card padding |
| `space-8` | 2rem | 32px | Section gaps |
| `space-12` | 3rem | 48px | Large sections |
| `space-16` | 4rem | 64px | Page sections |
| `space-24` | 6rem | 96px | Hero spacing |

---

## 🧩 Components

### Button Variants

#### Primary Button
```css
background: var(--color-primary-600);
color: white;
border-radius: var(--radius-lg);
padding: var(--space-3) var(--space-6);
font-weight: 600;
```
- Hover: `background: var(--color-primary-700)`
- Active: `background: var(--color-primary-800)`
- Disabled: `opacity: 0.5`

#### Secondary Button
```css
background: white;
color: var(--color-primary-600);
border: 2px solid var(--color-primary-600);
border-radius: var(--radius-lg);
```

#### Ghost Button
```css
background: transparent;
color: var(--color-primary-600);
border: none;
```

### Cards

#### Default Card
```css
background: white;
border-radius: var(--radius-xl);
padding: var(--space-6);
box-shadow: var(--shadow-sm);
border: 1px solid var(--color-border-default);
```

#### Product Card (Menu Item)
```css
background: white;
border-radius: var(--radius-2xl);
padding: var(--space-4);
box-shadow: var(--shadow-md);
transition: transform 0.2s ease, box-shadow 0.2s ease;
```
- Hover: `transform: translateY(-4px); box-shadow: var(--shadow-lg)`

### Inputs

#### Text Input
```css
background: var(--color-bg-secondary);
border: 2px solid var(--color-border-default);
border-radius: var(--radius-lg);
padding: var(--space-3) var(--space-4);
font-size: var(--font-size-base);
```
- Focus: `border-color: var(--color-primary-500); outline: none; box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1)`
- Error: `border-color: var(--color-error)`

### Navigation

#### Header Height: 64px (desktop) / 56px (mobile)
#### Bottom Nav Height: 72px (mobile only)

### Badges & Tags

#### Category Badge
```css
background: var(--color-primary-100);
color: var(--color-primary-700);
border-radius: var(--radius-full);
padding: var(--space-1) var(--space-3);
font-size: var(--font-size-sm);
font-weight: 500;
```

#### Price Tag
```css
font-family: var(--font-family-display);
font-size: var(--font-size-xl);
font-weight: 700;
color: var(--color-primary-600);
```

---

## 🎯 Icons

### Recommended: Lucide Icons
- Style: Outlined, 2px stroke
- Default size: 24px
- Touch target minimum: 44px × 44px

### Key Icons for Juice Bar
- `Leaf` - Natural/organic indicator
- `Droplet` - Hydration/water content
- `Apple` - Fruits
- `Carrot` - Vegetables
- `Star` - Favorites/ratings
- `Heart` - Wishlist
- `ShoppingBag` - Cart
- `Search` - Search
- `User` - Account
- `Plus/Minus` - Quantity controls

---

## 🎨 Figma Guidelines

### Setting Up Figma

1. **Create a New Team Library**
   - File → New Design File
   - Name: "Jaime Demo - Design System"

2. **Set Up Pages**
   ```
   📄 Cover
   📄 Colors
   📄 Typography
   📄 Icons
   📄 Components
   📄 Templates
   ```

3. **Define Color Styles**
   - Create color styles for each token
   - Use naming: `primary/500`, `secondary/500`, etc.
   - Include light and dark mode variants

4. **Define Text Styles**
   - Create text styles matching the type scale
   - Name: `display/xl`, `heading/1`, `body/default`, etc.

5. **Create Components**
   - Build atomic components first (buttons, inputs)
   - Use variants for different states
   - Create component documentation

### Component Structure

```
🧩 Button
  ├─ Variant: Primary / Secondary / Ghost
  ├─ Size: Large / Medium / Small
  └─ State: Default / Hover / Active / Disabled

🧩 Input
  ├─ Type: Text / Password / Search
  └─ State: Default / Focus / Error / Disabled

🧩 Card
  ├─ Product Card
  ├─ Category Card
  └─ Info Card
```

### Auto Layout Settings
- Use Auto Layout for all components
- Consistent padding: 16px (small), 24px (medium), 32px (large)
- Gap between elements: 8px (tight), 16px (default), 24px (loose)

### Responsive Breakpoints
| Name | Width | Grid |
|------|-------|------|
| Mobile | 375px | 4 columns, 16px gutter |
| Tablet | 768px | 8 columns, 24px gutter |
| Desktop | 1280px | 12 columns, 24px gutter |

---

## 📱 Mobile-First Approach

This design system follows a mobile-first philosophy:

1. Design for mobile (375px) first
2. Scale up to tablet (768px)
3. Enhance for desktop (1280px+)
4. Touch targets minimum 44px × 44px
5. Thumb-friendly navigation zones

---

## ✅ Accessibility Checklist

- [ ] Color contrast ratio ≥ 4.5:1 for normal text
- [ ] Color contrast ratio ≥ 3:1 for large text
- [ ] Focus states visible on all interactive elements
- [ ] Touch targets ≥ 44px × 44px
- [ ] Alt text for all images
- [ ] Semantic HTML structure
- [ ] Keyboard navigation support
- [ ] Screen reader testing

---

## 🚀 Implementation

### CSS Variables
Import `tokens.css` for CSS custom properties.

### Tailwind CSS
Extend your `tailwind.config.js` with the provided configuration.

### React Components
Coming in Sprint 2: Pre-built React component library.

---

*Last updated: Sprint 1*
*Maintained by: Jaime Demo Design Team*