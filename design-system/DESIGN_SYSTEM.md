# Jaime Demo - Juice Bar Design System

> A fresh, vibrant design language for a modern juice bar application

---

## 🎨 Design Philosophy

Our design system embodies the **freshness**, **energy**, and **health-conscious** nature of a juice bar. Every element should feel:

- **Fresh** - Clean, bright, and invigorating
- **Natural** - Organic shapes, earthy tones balanced with vibrant fruits
- **Approachable** - Friendly, rounded, and welcoming
- **Energetic** - Dynamic colors that inspire vitality

---

## 🌈 Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Orange 500** | `#f97316` | Primary actions, CTAs, brand identity |
| **Orange 600** | `#ea580c` | Hover states, emphasis |
| **Orange 400** | `#fb923c` | Secondary elements, highlights |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Green 500** | `#22c55e` | Success states, health indicators, fresh items |
| **Green 600** | `#16a34a` | Hover states |
| **Green 400** | `#4ade80` | Accents, badges |

### Accent Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Yellow 400** | `#facc15` | Highlights, promotions, energy |
| **Yellow 300** | `#fde047` | Light accents |

### Fruit Palette

Special colors for menu items and categories:

| Fruit | Hex | Use Case |
|-------|-----|----------|
| 🍓 Strawberry | `#dc2626` | Berry category |
| 🍉 Watermelon | `#f43f5e` | Summer specials |
| 🥭 Mango | `#fbbf24` | Tropical category |
| 🍍 Pineapple | `#fde047` | Citrus highlights |
| 🥝 Kiwi | `#84cc16` | Green juices |
| 🍏 Apple | `#22c55e` | Classic greens |
| 🌿 Mint | `#2dd4bf` | Refreshing options |
| 🫐 Blueberry | `#6366f1` | Antioxidant category |
| 🍇 Grape | `#a855f7` | Premium items |
| Açaí | `#7c3aed` | Superfood category |

### Semantic Colors

- **Success**: Green 500 (`#22c55e`)
- **Warning**: Amber 500 (`#f59e0b`)
- **Error**: Red 500 (`#ef4444`)
- **Info**: Blue 500 (`#3b82f6`)

---

## 🔤 Typography

### Font Families

```css
--font-family-display: 'Fredoka', 'Nunito', system-ui, sans-serif;
--font-family-body: 'Nunito', 'Inter', system-ui, sans-serif;
--font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Font Stack Recommendations

1. **Fredoka** - Display headings, logo text (playful, rounded)
2. **Nunito** - Body text, UI elements (friendly, readable)
3. **Inter** - Fallback, data-heavy sections (clean, neutral)

### Type Scale

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| `text-xs` | 12px | 1rem | Captions, labels |
| `text-sm` | 14px | 1.25rem | Secondary text |
| `text-base` | 16px | 1.5rem | Body text |
| `text-lg` | 18px | 1.75rem | Large body |
| `text-xl` | 20px | 1.75rem | Small headings |
| `text-2xl` | 24px | 2rem | H4 |
| `text-3xl` | 30px | 2.25rem | H3 |
| `text-4xl` | 36px | 2.5rem | H2 |
| `text-5xl` | 48px | 1 | H1 |
| `text-6xl` | 60px | 1 | Display |

### Font Weights

- **Regular (400)**: Body text
- **Medium (500)**: Emphasis
- **Semibold (600)**: Subheadings
- **Bold (700)**: Headings
- **Extrabold (800)**: Display, hero text

---

## 📐 Spacing System

Based on a 4px grid:

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

## 🔲 Border Radius

Rounded, friendly shapes are key to our aesthetic:

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Subtle rounding |
| `rounded-md` | 8px | Buttons, inputs |
| `rounded-lg` | 12px | Cards, containers |
| `rounded-xl` | 16px | Large cards |
| `rounded-2xl` | 24px | Hero sections |
| `rounded-3xl` | 32px | Featured cards |
| `rounded-full` | 9999px | Pills, avatars |

**Default choice**: `rounded-2xl` for cards, `rounded-xl` for buttons

---

## 🌫 Shadows

### Standard Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
```

### Colored Shadows (Brand Enhancement)

```css
--shadow-primary: 0 4px 14px 0 rgba(249, 115, 22, 0.3);
--shadow-secondary: 0 4px 14px 0 rgba(34, 197, 94, 0.3);
```

Use colored shadows on CTAs and featured elements to add warmth.

---

## 🎬 Animations & Transitions

### Timing

- **Fast**: 150ms - Micro-interactions
- **Normal**: 250ms - Most transitions
- **Slow**: 350ms - Page transitions
- **Bounce**: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) - Playful interactions

### Key Animations

```css
/* Gentle floating for featured items */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Playful wiggle for attention */
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

/* Juice squeeze effect */
@keyframes squeeze {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
}
```

---

## 🧩 Components

### Buttons

```jsx
// Primary Button (Juice)
<button className="btn-juice">
  Order Now
</button>

// Secondary Button (Fresh)
<button className="btn-fresh">
  View Menu
</button>

// Tailwind classes:
// px-6 py-3 bg-primary-500 text-white font-semibold 
// rounded-2xl shadow-primary hover:bg-primary-600 
// hover:shadow-lg transition-all duration-200 active:scale-95
```

### Cards

```jsx
// Product Card
<div className="card-juice">
  {/* bg-white rounded-3xl shadow-lg p-6 
      hover:shadow-xl transition-shadow duration-300 */}
</div>
```

### Badges

```jsx
// Fruit Badge
<span className="badge-fruit bg-fruit-strawberry/10 text-fruit-strawberry">
  Berry Blend
</span>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## 🌙 Dark Mode

Dark mode uses deep, rich backgrounds that complement the vibrant fruit colors:

```css
[data-theme="dark"] {
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #171717;
  --color-bg-tertiary: #262626;
}
```

---

## ✅ Usage Guidelines

### Do's

- ✅ Use rounded corners liberally (2xl, 3xl)
- ✅ Apply colored shadows on CTAs
- ✅ Use fruit palette for menu categorization
- ✅ Keep interactions bouncy and playful
- ✅ Maintain generous whitespace

### Don'ts

- ❌ Use sharp corners (except for data tables)
- ❌ Overuse gradients - save for special elements
- ❌ Mix too many fruit colors in one view
- ❌ Use gray where a subtle tint would work better

---

## 📦 Installation

### Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Import Tokens

```css
@import './design-system/tokens.css';
```

### Tailwind Config

```js
// tailwind.config.js
module.exports = require('./design-system/tailwind.config.js');
```

---

*Last updated: Sprint 1*
*Version: 1.0.0*