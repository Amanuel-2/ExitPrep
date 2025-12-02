# ExitPrep Component Guide

Complete reference for all reusable components in the ExitPrep application.

---

## 🎨 UI Components

### Button Component
**Location**: `src/components/ui/Button.jsx`

**Usage**:
```jsx
import Button from './components/ui/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

**Props**:
- `variant`: 'primary' | 'secondary' | 'success' | 'danger' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `className`: string (additional Tailwind classes)
- `disabled`: boolean
- All standard button HTML attributes

**Examples**:
```jsx
<Button variant="primary">Primary Button</Button>
<Button variant="secondary" size="lg">Large Secondary</Button>
<Button variant="danger" size="sm" disabled>Disabled</Button>
<Button variant="outline">Outline Button</Button>
```

---

### Card Component
**Location**: `src/components/ui/Card.jsx`

**Usage**:
```jsx
import Card from './components/ui/Card';

<Card hover className="p-6">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Props**:
- `hover`: boolean (adds hover scale effect)
- `className`: string (additional Tailwind classes)
- `children`: ReactNode
- All standard div HTML attributes

**Examples**:
```jsx
<Card className="p-4">
  Simple card
</Card>

<Card hover onClick={handleClick} className="p-6 cursor-pointer">
  Clickable card with hover effect
</Card>
```

---

### ProgressBar Component
**Location**: `src/components/ui/ProgressBar.jsx`

**Usage**:
```jsx
import ProgressBar from './components/ui/ProgressBar';

<ProgressBar 
  value={75} 
  max={100} 
  label="Completion" 
  color="green"
/>
```

**Props**:
- `value`: number (current value, default: 0)
- `max`: number (maximum value, default: 100)
- `label`: string (optional label text)
- `showPercentage`: boolean (show percentage, default: true)
- `color`: 'indigo' | 'blue' | 'green' | 'yellow' | 'red' | 'purple' (default: 'indigo')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `className`: string (additional classes)

**Examples**:
```jsx
<ProgressBar value={85} max={100} label="Study Progress" />
<ProgressBar value={45} max={50} color="green" size="lg" />
<ProgressBar value={30} showPercentage={false} />
```

---

## 🧩 Layout Components

### Navbar Component
**Location**: `src/components/Navbar.jsx`

**Usage**:
```jsx
import Navbar from './components/Navbar';

<Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
```

**Props**:
- `onMenuClick`: function (callback for menu button click)

**Features**:
- Sticky positioning
- Theme toggle button
- User profile display
- Responsive design
- Dark mode support

---

### Sidebar Component
**Location**: `src/components/Sidebar.jsx`

**Usage**:
```jsx
import Sidebar from './components/Sidebar';

<Sidebar isOpen={sidebarOpen} />
```

**Props**:
- `isOpen`: boolean (controls sidebar visibility)

**Features**:
- Slide animation
- Active route highlighting
- Navigation links with icons
- Dark mode support
- Fixed positioning

**Navigation Items**:
- Dashboard (/)
- Study Mode (/study)
- Exam Mode (/exam)
- Settings (/settings)

---

### MainLayout Component
**Location**: `src/Layouts/MainLayout.jsx`

**Usage**:
```jsx
import MainLayout from './Layouts/MainLayout';

<Route element={<MainLayout />}>
  <Route path="/" element={<Dashboard />} />
</Route>
```

**Features**:
- Wraps all main pages
- Manages sidebar state
- Includes Navbar and Sidebar
- Responsive content area
- Uses React Router Outlet

---

## 💬 Interactive Components

### ChatBox Component
**Location**: `src/components/ChatBox.jsx`

**Usage**:
```jsx
import ChatBox from './components/ChatBox';

<ChatBox questionText="What is a binary tree?" />
```

**Props**:
- `questionText`: string (current question for context)

**Features**:
- Message history display
- User/AI message styling
- Input field with send button
- Enter key support
- Simulated AI responses
- Auto-scroll to latest message
- Dark mode support

**Message Format**:
```javascript
{
  role: 'user' | 'assistant',
  content: string
}
```

---

### QuestionCard Component
**Location**: `src/components/QuestionCard.jsx`

**Usage**:
```jsx
import QuestionCard from './components/QuestionCard';

const question = {
  id: 1,
  text: 'What is the time complexity of binary search?',
  options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
  correctAnswer: 1,
  explanation: 'Binary search divides the search space in half...'
};

<QuestionCard 
  question={question} 
  onNext={handleNext}
  showExplanation={true}
/>
```

**Props**:
- `question`: object (question data)
  - `id`: number
  - `text`: string
  - `options`: string[]
  - `correctAnswer`: number (index)
  - `explanation`: string
- `onNext`: function (callback for next button)
- `showExplanation`: boolean (show explanation after answer, default: true)

**Features**:
- Multiple choice selection
- Submit/Next button logic
- Visual feedback (green/red)
- Explanation display
- Disabled state after submission

---

## 🎯 Context Providers

### ThemeContext
**Location**: `src/context/ThemeContext.jsx`

**Usage**:
```jsx
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Wrap app
<ThemeProvider>
  <App />
</ThemeProvider>

// Use in components
function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

**Exports**:
- `ThemeProvider`: Component (wraps app)
- `useTheme`: Hook (access theme state)

**Hook Returns**:
- `theme`: 'light' | 'dark'
- `toggleTheme`: function

**Features**:
- LocalStorage persistence
- Automatic dark class on document
- Global theme state

---

## 📄 Page Components

### Dashboard
**Location**: `src/pages/Dashboard/Dashboard.jsx`
**Route**: `/`

**Features**:
- 4 stat cards (questions, hours, readiness, streak)
- Study progress section
- Recent activity feed
- Quick actions panel

---

### CourseList
**Location**: `src/pages/StudyMode/CourseList.jsx`
**Route**: `/study`

**Features**:
- 6 course cards
- Progress indicators
- Hover effects
- Navigation to course questions

---

### CourseQuestions
**Location**: `src/pages/StudyMode/CourseQuestions.jsx`
**Route**: `/study/:courseId`

**Features**:
- Question display
- AI chat box
- Progress bar
- Navigation controls

---

### FullExam
**Location**: `src/pages/ExamMode/FullExam.jsx`
**Route**: `/exam`

**Features**:
- Pre-exam screen
- Timer (60 minutes)
- Question navigation
- Results screen
- Score calculation

---

### Settings
**Location**: `src/pages/Settings/Settings.jsx`
**Route**: `/settings`

**Features**:
- Theme toggle
- Account information
- Notification preferences
- Study preferences
- Danger zone

---

## 🎨 Styling Guidelines

### Color Palette
- **Primary**: Indigo (indigo-600, indigo-50, etc.)
- **Success**: Green (green-600, green-50, etc.)
- **Danger**: Red (red-600, red-50, etc.)
- **Warning**: Yellow (yellow-600, yellow-50, etc.)
- **Info**: Blue (blue-600, blue-50, etc.)

### Dark Mode Classes
Always include dark mode variants:
```jsx
className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
```

### Spacing
- Small: p-2, p-3, gap-2
- Medium: p-4, p-6, gap-4
- Large: p-8, gap-6

### Rounded Corners
- Small: rounded-lg
- Medium: rounded-xl
- Full: rounded-full

### Shadows
- Small: shadow-md
- Medium: shadow-lg
- Large: shadow-xl

### Transitions
Always add smooth transitions:
```jsx
className="transition-all duration-200"
className="transition-colors duration-300"
```

---

## 📱 Responsive Design

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Common Patterns
```jsx
// Grid responsive
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Hide on mobile
className="hidden md:block"

// Show only on mobile
className="block md:hidden"

// Responsive padding
className="p-4 md:p-6 lg:p-8"

// Responsive text
className="text-sm md:text-base lg:text-lg"
```

---

## 🔧 Data Structure

### Question Object
```javascript
{
  id: number | string,
  text: string,
  options: string[],
  correctAnswer: number, // index of correct option
  explanation: string,
  topicId?: number // optional
}
```

### Course Object
```javascript
{
  id: number,
  name: string,
  description: string,
  questions: number,
  completed: number,
  icon: string, // emoji
  color: string // Tailwind class
}
```

---

## 🚀 Quick Start Examples

### Creating a New Page
```jsx
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function MyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Page Title
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Page description
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Section Title</h2>
        <p>Content goes here</p>
        <Button className="mt-4">Action</Button>
      </Card>
    </div>
  );
}
```

### Adding a New Route
```jsx
// In App.jsx
<Route path="/my-page" element={<MyPage />} />
```

### Adding a Sidebar Link
```jsx
// In Sidebar.jsx navItems array
{ path: '/my-page', icon: '🎯', label: 'My Page' }
```

---

## 📦 Component Checklist

When creating new components:
- ✅ Support dark mode
- ✅ Add responsive classes
- ✅ Include hover/focus states
- ✅ Add transitions
- ✅ Use consistent spacing
- ✅ Follow naming conventions
- ✅ Add PropTypes or TypeScript types
- ✅ Include className prop for extensibility
- ✅ Test on mobile, tablet, desktop

---

## 🎯 Best Practices

1. **Always use Tailwind classes** - No custom CSS unless absolutely necessary
2. **Dark mode first** - Always include dark: variants
3. **Mobile first** - Start with mobile layout, add md: and lg: breakpoints
4. **Reuse components** - Don't duplicate code
5. **Consistent spacing** - Use space-y-* and gap-* utilities
6. **Semantic HTML** - Use proper tags (nav, aside, main, etc.)
7. **Accessibility** - Include aria labels and keyboard navigation
8. **Performance** - Avoid unnecessary re-renders

---

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com)
- [React Docs](https://react.dev)
