# ExitPrep - Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: **http://localhost:5173** (or the port shown in terminal)

---

## 📱 What You'll See

### Landing Page (Dashboard)
- **URL**: `/`
- Shows study statistics, progress bars, and recent activity
- Click any quick action or use the sidebar to navigate

### Study Mode
- **URL**: `/study`
- Browse 6 computer science courses
- Click any course card to start practicing

### Course Questions
- **URL**: `/study/:courseId` (e.g., `/study/1`)
- Practice questions with AI chat assistant on the right
- Submit answers to see explanations
- Progress bar shows completion

### Exam Mode
- **URL**: `/exam`
- Click "Start Exam" to begin
- 60-minute timer with 20 questions
- Navigate between questions using buttons or number grid
- Click "Finish Exam" to see results

### Settings
- **URL**: `/settings`
- Toggle light/dark theme
- Update account information (demo)
- Configure notifications and study preferences

---

## 🎨 Theme Toggle

**Two ways to switch themes:**

1. **Navbar**: Click the sun/moon icon in the top-right
2. **Settings Page**: Use the theme toggle switch

Theme preference is saved in localStorage and persists across sessions.

---

## 📂 Project Structure

```
ExitPrep/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Basic UI elements (Button, Card, ProgressBar)
│   │   ├── ChatBox.jsx     # AI chat interface
│   │   ├── Navbar.jsx      # Top navigation
│   │   ├── QuestionCard.jsx # Question display
│   │   └── Sidebar.jsx     # Side navigation
│   ├── context/            # React Context providers
│   │   └── ThemeContext.jsx
│   ├── data/               # Dummy data
│   │   └── questions.js
│   ├── Layouts/            # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/              # Page components
│   │   ├── Dashboard/
│   │   ├── ExamMode/
│   │   ├── Settings/
│   │   └── StudyMode/
│   ├── App.jsx             # Main app with routes
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── public/                 # Static assets
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md               # Documentation
```

---

## 🎯 Key Features

### ✅ Fully Responsive
- Works on mobile (< 768px)
- Tablet (768px - 1023px)
- Desktop (1024px+)

### ✅ Dark Mode
- Toggle between light and dark themes
- Persistent across sessions
- All components support both modes

### ✅ Interactive UI
- Hover effects on cards and buttons
- Smooth transitions and animations
- Visual feedback on interactions

### ✅ Demo Data
- 18 questions across 6 CS topics
- Dummy user profile and statistics
- Simulated AI chat responses

---

## 🛠️ Available Scripts

### Development
```bash
npm run dev          # Start dev server
```

### Production
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint
```

---

## 📚 Documentation

- **README.md** - Project overview and setup
- **FEATURES.md** - Complete feature list
- **COMPONENT_GUIDE.md** - Component API reference
- **QUICK_START.md** - This file

---

## 🎨 Customization

### Change Primary Color
Find and replace `indigo` with your preferred color:
- `indigo-600` → `blue-600`
- `indigo-50` → `blue-50`
- etc.

### Add More Questions
Edit `src/data/questions.js`:
```javascript
questionsByTopic[topicId].push({
  id: 4,
  text: 'Your question here?',
  options: ['A', 'B', 'C', 'D'],
  correctAnswer: 0,
  explanation: 'Explanation here'
});
```

### Modify Exam Settings
In `src/pages/ExamMode/FullExam.jsx`:
```javascript
// Change timer (in seconds)
const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes

// Change question count
const [questions] = useState(() => generateExamQuestions(20));
```

### Add New Course
In `src/pages/StudyMode/CourseList.jsx`:
```javascript
{
  id: 7,
  name: 'Your Course',
  description: 'Course description',
  questions: 100,
  completed: 0,
  icon: '🎯',
  color: 'bg-pink-500',
}
```

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically try the next available port. Check the terminal output for the actual URL.

### Dark Mode Not Working
Clear localStorage and refresh:
```javascript
localStorage.clear();
location.reload();
```

### Sidebar Not Showing
Click the hamburger menu (☰) in the top-left of the navbar.

### Build Errors
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 💡 Tips

1. **Use the sidebar** to navigate between pages
2. **Try dark mode** - it looks great!
3. **Test on mobile** - resize your browser window
4. **Explore all pages** - each has unique features
5. **Check the chat box** - it responds to your messages (with random responses)

---

## 🎓 Learning Resources

### Tailwind CSS
- [Official Docs](https://tailwindcss.com/docs)
- [Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### React
- [Official Docs](https://react.dev)
- [React Router](https://reactrouter.com)

### Vite
- [Official Docs](https://vitejs.dev)

---

## 📞 Need Help?

Check these files for detailed information:
- Component usage → **COMPONENT_GUIDE.md**
- Feature details → **FEATURES.md**
- Setup instructions → **README.md**

---

## ✨ What's Next?

This is a **frontend demo** with dummy data. To make it production-ready:

1. **Add Backend API**
   - User authentication
   - Question database
   - Progress tracking
   - Real AI integration

2. **Add State Management**
   - Redux or Zustand
   - Persistent user data
   - Offline support

3. **Add Testing**
   - Unit tests (Jest/Vitest)
   - Integration tests
   - E2E tests (Playwright/Cypress)

4. **Add Analytics**
   - Track user progress
   - Study patterns
   - Performance metrics

5. **Add More Features**
   - Flashcards
   - Study groups
   - Leaderboards
   - Achievements

---

## 🎉 Enjoy ExitPrep!

You now have a fully functional, responsive, modern React application ready for demo or further development!
