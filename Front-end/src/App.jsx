import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./pages/Auth/LoginPage";
import Signup from "./pages/Auth/SignUpPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import CourseList from "./pages/StudyMode/CourseList";
import CourseQuestions from "./pages/StudyMode/CourseQuestions";
import FullExam from "./pages/ExamMode/FullExam";
import NotFound from "./pages/NotFound";
import { useAuth } from "./hooks/useAuth";

function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/study"
            element={
              <PrivateRoute>
                <CourseList />
              </PrivateRoute>
            }
          />
          <Route
            path="/study/:courseId"
            element={
              <PrivateRoute>
                <CourseQuestions />
              </PrivateRoute>
            }
          />
          <Route
            path="/exam"
            element={
              <PrivateRoute>
                <FullExam />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
