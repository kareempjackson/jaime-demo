# Jaime Demo Design System

## Juice Bar Design Language

A fresh, vibrant, and energetic design system built for a modern juice bar application. The design language emphasizes health, freshness, and natural ingredients through its color palette, typography, and visual elements.

---

## 🎨 Color Palette

### Primary Colors

**Primary Green** - Represents freshness, health, and natural ingredients
- Use for: Primary buttons, success states, health-focused elements
- Main: `#22c55e` (primary-500)
- Light backgrounds: `#f0fdf4` (primary-50)
- Dark accents: `#15803d` (primary-700)

**Secondary Orange** - Represents energy, citrus, and vitality
- Use for: Secondary actions, highlights, energetic elements
- Main: `#f97316` (secondary-500)
- Light backgrounds: `#fff7ed` (secondary-50)
- Dark accents: `#c2410c` (secondary-700)

**Accent Yellow** - Represents sunshine, tropical fruits, and happiness
- Use for: Accent elements, promotions, call-to-actions
- Main: `#facc15` (accent-400)
- Light backgrounds: `#fefce8` (accent-50)

### Fruit Category Colors

Used for categorizing menu items and creating visual variety:

| Category | Color | Light | Use Case |
|----------|-------|-------|----------|
| Berry | `#dc2626` | `#fecaca` | Berry-based juices |
| Tropical | `#0891b2` | `#cffafe` | Tropical fruit blends |
| Citrus | `#f59e0b` | `#fef3c7` | Citrus juices |
| Leafy | `#16a34a` | `#dcfce7` | Green smoothies |

### Semantic Colors

| Purpose | Color | Light Variant |
|---------|-------|---------------|
| Success | `#22c55e` | `#dcfce7` |
| Warning | `#f59e0b` | `#fef3c7` |
| Error | `#ef4444` | `#fee2e2` |
| Info | `#3b82f6` | `#dbeafe` |

---

## 🔤 Typography

### Font Families

```css
/* Display - Fun & Friendly headlines */
font-family: 'Fredoka', 'Comic Sans MS', cursive, sans-serif;

/* Headings - Clean & Modern */
font-family: 'Nunito', 'Segoe UI', system-ui, sans-serif;

/* Body - Highly readable */
font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;

/* Monospace - Prices & codes */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

### Font Loading

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Type Scale

| Name | Size | Line Height | Weight | Use Case |
|------|------|-------------|--------|----------|
| display-lg | 60px | 1 | 700 | Hero headlines |
| display-md | 48px | 1 | 700 | Page titles |
| display-sm | 36px | 1.1 | 700 | Section headers |
| heading-lg | 30px | 1.25 | 600 | Major headings |
| heading-md | 24px | 1.3 | 600 | Subheadings |
| heading-sm | 20px | 1.4 | 600 | Card titles |
| body-lg | 18px | 1.6 | 400 | Lead paragraphs |
| body-md | 16px | 1.5 | 400 | Body text |
| body-sm | 14px | 1.5 | 400 | Secondary text |
| caption | 12px | 1.4 | 400 | Labels, hints |

---

## 📐 Spacing

Using a 4px base unit:

| Token | Value | Pixels |
|-------|-------|--------|
| space-1 | 0.25rem | 4px |
| space-2 | 0.5rem | 8px |
| space-3 | 0.75rem | 12px |
| space-4 | 1rem | 16px |
| space-5 | 1.25rem | 20px |
| space-6 | 1.5rem | 24px |
| space-8 | 2rem | 32px |
| space-10 | 2.5rem | 40px |
| space-12 | 3rem | 48px |
| space-16 | 4rem | 64px |
| space-20 | 5rem | 80px |
| space-24 | 6rem | 96px |

---

## 🔲 Border Radius

Rounded, friendly corners that match the organic, natural theme:

| Token | Value | Use Case |
|-------|-------|----------|
| radius-sm | 4px | Small elements, tags |
| radius-md | 8px | Inputs, small cards |
| radius-lg | 12px | Cards, buttons |
| radius-xl | 16px | Large cards |
| radius-2xl | 24px | Modal, featured cards |
| radius-3xl | 32px | Hero elements |
| radius-full | 9999px | Avatars, pills |

---

## 🌑 Shadows

```css
/* Standard shadows */
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);

/* Glow shadows for emphasis */
shadow-glow-green: 0 0 20px rgb(34 197 94 / 0.3);
shadow-glow-orange: 0 0 20px rgb(249 115 22 / 0.3);
```

---

## 🎬 Animations

### Transitions

| Name | Duration | Use Case |
|------|----------|----------|
| transition-fast | 150ms | Micro-interactions |
| transition-normal | 250ms | Standard transitions |
| transition-slow | 350ms | Complex animations |
| transition-bounce | 500ms | Playful interactions |

### Keyframe Animations

- `animate-wiggle` - Playful attention grabber
- `animate-slide-up` - Content entering from below
- `animate-slide-down` - Dropdowns, menus
- `animate-fade-in` - Subtle appearance
- `animate-scale-in` - Modal/popup entrance
- `animate-bounce-slow` - Gentle bounce
- `animate-pulse-slow` - Subtle pulsing

---

## 🧩 Component Guidelines

### Buttons

```jsx
// Primary - Main actions
<button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-glow-green transition-all">
  Order Now
</button>

// Secondary - Alternative actions
<button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-glow-orange transition-all">
  View Menu
</button>

// Outline - Subtle actions
<button className="border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-semibold px-6 py-3 rounded-xl transition-all">
  Learn More
</button>
```

### Cards

```jsx
<div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover p-6 transition-all">
  <h3 className="font-heading text-heading-sm text-neutral-900">Green Goddess</h3>
  <p className="font-body text-body-sm text-neutral-600 mt-2">Spinach, kale, apple, ginger</p>
  <span className="font-mono text-lg text-primary-600 font-semibold mt-4 block">$8.99</span>
</div>
```

### Form Inputs

```jsx
<input 
  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all font-body text-body-md"
  placeholder="Enter your email"
/>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Use Case |
|------------|-------|----------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablets |
| lg | 1024px | Small desktops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

---

## 🍎 Brand Voice

- **Fresh** - Clean, crisp, and natural
- **Friendly** - Approachable and welcoming
- **Energetic** - Vibrant and lively
- **Healthy** - Promoting wellness and good choices
- **Modern** - Contemporary and tech-forward

---

## 📁 File Structure

```
design-system/
├── tokens.css          # CSS custom properties
├── tailwind.config.js  # Tailwind configuration
└── DESIGN_SYSTEM.md    # This documentation
```

---

## Usage

1. Import `tokens.css` in your main stylesheet
2. Configure Tailwind with the provided config
3. Load Google Fonts in your HTML
4. Reference this guide for component patterns

```css
/* In your global CSS */
@import './design-system/tokens.css';
```