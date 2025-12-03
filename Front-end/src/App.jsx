import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import CourseList from "./pages/StudyMode/CourseList";
import CourseQuestions from "./pages/StudyMode/CourseQuestions";
import FullExam from "./pages/ExamMode/FullExam";
import Settings from "./pages/Settings/Settings";
import LoginPage from "./pages/Auth/LoginPage.jsx"
import SignUpPage from "./pages/Auth/SignUpPage.jsx";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Public auth routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* Accept capitalized path and redirect to canonical lowercase */}
          <Route path="/SignUp" element={<Navigate to="/signup" replace />} />

          {/* Main app layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/study" element={<CourseList />} />
            <Route path="/study/:courseId" element={<CourseQuestions />} />
            <Route path="/exam" element={<FullExam />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
