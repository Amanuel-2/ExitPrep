# ExitPrep Design System

## 🎨 Visual Design Principles

### Modern + Minimalist
- Clean white/light-gray surfaces
- Smooth spacing with consistent padding
- Rounded corners (`rounded-2xl`, `rounded-xl`)
- Soft shadows (`shadow-md`, `shadow-lg`)
- Subtle animations (`transition-all`, `hover:scale-[1.01]`)

---

## 🎯 Color Palette

### Primary Colors
```
Primary: indigo-600 (#4F46E5) / indigo-500 (#6366F1)
Primary Hover: indigo-700 (#4338CA)
Primary Light: indigo-50 (#EEF2FF)
```

### Secondary Colors
```
Gray-700: #374151
Gray-600: #4B5563
Gray-500: #6B7280
Gray-400: #9CA3AF
```

### Background Colors
```
Light Mode:
- Page Background: gray-50 (#F9FAFB)
- Card Background: white (#FFFFFF)
- Hover Background: gray-100 (#F3F4F6)

Dark Mode:
- Page Background: gray-900 (#111827)
- Card Background: gray-800 (#1F2937)
- Hover Background: gray-700 (#374151)
```

### Accent Colors
```
Success: green-600 (#16A34A)
Danger: red-600 (#DC2626)
Warning: yellow-500 (#EAB308)
Info: blue-600 (#2563EB)
```

---

## 📐 Layout System

### Container Widths
```jsx
// Maximum width containers
max-w-7xl  // Dashboard, main pages
max-w-4xl  // Settings, forms
max-w-3xl  // Exam mode
max-w-2xl  // Modals, dialogs
```

### Spacing Scale
```
Small:   p-2, p-3, gap-2, gap-3
Medium:  p-4, p-6, gap-4, gap-6
Large:   p-8, p-12, gap-8, gap-12
```

### Grid Layouts
```jsx
// Responsive grid
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6

// Dashboard stats
Mobile:  1 column (stacked)
Tablet:  2 columns
Desktop: 4 columns
```

---

## 🔤 Typography

### Font Sizes
```
Hero Title:     text-3xl (30px) font-bold
Section Title:  text-2xl (24px) font-semibold
Card Title:     text-lg (18px) font-medium
Body Text:      text-base (16px)
Small Text:     text-sm (14px)
Tiny Text:      text-xs (12px)
```

### Font Weights
```
Bold:      font-bold (700)
Semibold:  font-semibold (600)
Medium:    font-medium (500)
Normal:    font-normal (400)
```

### Text Colors
```
Light Mode:
- Primary Text:   text-gray-800
- Secondary Text: text-gray-600
- Muted Text:     text-gray-500

Dark Mode:
- Primary Text:   text-white / text-gray-200
- Secondary Text: text-gray-400
- Muted Text:     text-gray-500
```

---

## 🧩 Component Specifications

### Button Component

**Variants:**
```jsx
<Button variant="primary">   // Indigo background, white text
<Button variant="secondary"> // Gray background
<Button variant="success">   // Green background
<Button variant="danger">    // Red background
<Button variant="outline">   // Transparent with border
```

**Sizes:**
```jsx
<Button size="sm">  // Small: px-3 py-1.5
<Button size="md">  // Medium: px-4 py-2
<Button size="lg">  // Large: px-6 py-3
```

**States:**
```
Default:  Normal appearance
Hover:    Darker background, larger shadow
Active:   scale-95 (pressed effect)
Disabled: opacity-50, cursor-not-allowed
```

---

### Card Component

**Base Style:**
```jsx
<Card className="p-6">
  Content here
</Card>
```

**Properties:**
- Background: `bg-white dark:bg-gray-800`
- Border: `border border-gray-200 dark:border-gray-700`
- Corners: `rounded-2xl`
- Shadow: `shadow-md`
- Transition: `transition-all duration-200`

**Hover Variant:**
```jsx
<Card hover className="p-6">
  Clickable card
</Card>
```
- Adds: `hover:shadow-lg hover:scale-[1.01] cursor-pointer`

---

### ProgressBar Component

**Usage:**
```jsx
<ProgressBar 
  value={75} 
  max={100} 
  label="Completion" 
  color="indigo"
  size="md"
/>
```

**Colors:**
- indigo, blue, green, yellow, red, purple

**Sizes:**
- sm: h-1.5
- md: h-2.5
- lg: h-4

---

### ChatBox Component

**Layout:**
```
┌─────────────────────────────┐
│ Header (gradient bg)        │
├─────────────────────────────┤
│                             │
│ Messages (scrollable)       │
│                             │
├─────────────────────────────┤
│ Input + Send Button         │
└─────────────────────────────┘
```

**Message Bubbles:**
```
User:      Right-aligned, indigo-600 bg, white text
Assistant: Left-aligned, gray-100 bg, gray-800 text
```

**Features:**
- Auto-scroll to latest message
- Fade-in animation for new messages
- Rounded-2xl corners
- Gradient header background

---

## 📱 Responsive Breakpoints

### Tailwind Breakpoints
```
sm:  640px  (Small tablets)
md:  768px  (Tablets)
lg:  1024px (Desktops)
xl:  1280px (Large desktops)
2xl: 1536px (Extra large)
```

### Common Patterns

**Hide on Mobile:**
```jsx
className="hidden md:block"
```

**Show Only on Mobile:**
```jsx
className="block md:hidden"
```

**Responsive Grid:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

**Responsive Padding:**
```jsx
className="p-4 md:p-6 lg:p-8"
```

**Responsive Text:**
```jsx
className="text-sm md:text-base lg:text-lg"
```

---

## ✨ Animation Guidelines

### Transitions
```css
transition-all duration-200  // Standard transition
transition-colors duration-300  // Color changes only
```

### Hover Effects

**Cards:**
```jsx
hover:shadow-lg hover:scale-[1.01]
```

**Buttons:**
```jsx
hover:bg-indigo-700 hover:shadow-lg active:scale-95
```

**Links:**
```jsx
hover:text-indigo-600 transition-colors
```

### Fade-In Animation
```jsx
className="animate-fade-in"
```

**Keyframes:**
```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 🎭 Dark Mode Implementation

### Always Include Dark Variants
```jsx
// Background
bg-white dark:bg-gray-800

// Text
text-gray-800 dark:text-white

// Borders
border-gray-200 dark:border-gray-700

// Hover states
hover:bg-gray-100 dark:hover:bg-gray-700
```

### Theme Toggle
```jsx
import { useTheme } from './context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

---

## 📄 Page Layouts

### Dashboard Layout
```
┌─────────────────────────────────────┐
│ Navbar (sticky)                     │
├──────┬──────────────────────────────┤
│      │                              │
│ Side │  Stats Grid (4 columns)      │
│ bar  │                              │
│      │  Progress Section            │
│      │                              │
│      │  Recent Activity             │
│      │                              │
└──────┴──────────────────────────────┘
```

### Study Mode Layout
```
┌─────────────────────────────────────┐
│ Navbar (sticky)                     │
├──────┬──────────────────────────────┤
│      │                              │
│ Side │  Course Grid (3 columns)     │
│ bar  │                              │
│      │                              │
└──────┴──────────────────────────────┘
```

### Course Questions Layout
```
┌─────────────────────────────────────┐
│ Navbar (sticky)                     │
├──────┬──────────────┬───────────────┤
│      │              │               │
│ Side │  Question    │   ChatBox     │
│ bar  │  Card        │   (sticky)    │
│      │              │               │
└──────┴──────────────┴───────────────┘
```

### Exam Mode Layout
```
┌─────────────────────────────────────┐
│ Navbar (sticky)                     │
├──────┬──────────────────────────────┤
│      │                              │
│ Side │  Timer + Progress            │
│ bar  │                              │
│      │  Question Card (centered)    │
│      │                              │
│      │  Navigation                  │
└──────┴──────────────────────────────┘
```

---

## 🎨 Component Examples

### Stat Card
```jsx
<Card className="p-6">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
        Questions Completed
      </p>
      <p className="text-3xl font-bold text-gray-800 dark:text-white">
        247
      </p>
    </div>
    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-3xl">
      ✅
    </div>
  </div>
</Card>
```

### Course Card
```jsx
<Card hover onClick={handleClick} className="p-6">
  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-4xl mb-4">
    🌳
  </div>
  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
    Data Structures
  </h3>
  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
    Arrays, Trees, Graphs, Hash Tables
  </p>
  <ProgressBar value={85} max={100} color="blue" />
</Card>
```

### Question Card
```jsx
<Card className="p-6">
  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
    What is the time complexity of binary search?
  </h3>
  
  <div className="space-y-3">
    {options.map((option, index) => (
      <button
        key={index}
        className="w-full p-4 text-left rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-all"
      >
        <span className="font-semibold">A.</span> {option}
      </button>
    ))}
  </div>
  
  <Button className="mt-6 w-full">Submit Answer</Button>
</Card>
```

---

## 🔧 Utility Classes

### Spacing Utilities
```
p-4   // padding: 1rem
p-6   // padding: 1.5rem
p-8   // padding: 2rem

gap-4 // gap: 1rem
gap-6 // gap: 1.5rem

space-y-4 // vertical spacing between children
space-x-4 // horizontal spacing between children
```

### Flexbox Utilities
```
flex items-center justify-between
flex flex-col
flex-1
```

### Grid Utilities
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
gap-6
```

### Border Utilities
```
border border-gray-200
rounded-xl
rounded-2xl
rounded-full
```

### Shadow Utilities
```
shadow-sm
shadow-md
shadow-lg
shadow-xl
```

---

## ✅ Design Checklist

When creating new components:

- [ ] Supports dark mode (all colors have dark: variants)
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Consistent spacing (p-4, p-6, gap-4, gap-6)
- [ ] Rounded corners (rounded-xl or rounded-2xl)
- [ ] Smooth transitions (transition-all duration-200)
- [ ] Hover effects where appropriate
- [ ] Active states for buttons (active:scale-95)
- [ ] Proper text hierarchy (font sizes and weights)
- [ ] Accessible (proper contrast, keyboard navigation)
- [ ] Consistent with existing components

---

## 🎯 Best Practices

1. **Mobile First**: Start with mobile layout, add md: and lg: breakpoints
2. **Consistent Spacing**: Use the spacing scale (4, 6, 8, 12)
3. **Dark Mode Always**: Never forget dark: variants
4. **Semantic HTML**: Use proper tags (nav, aside, main, section)
5. **Reusable Components**: Don't duplicate code
6. **Performance**: Avoid unnecessary re-renders
7. **Accessibility**: Include aria labels, keyboard support
8. **Clean Code**: Keep components small and focused

---

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [React Documentation](https://react.dev)
