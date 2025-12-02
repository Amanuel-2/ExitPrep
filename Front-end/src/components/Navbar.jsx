import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 bg-black text-white ">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="ExitPrep" className="h-7 w-7" />
          <span className="font-semibold">ExitPrep</span>
        </Link>

        <nav className="flex items-center gap-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Dashboard</NavLink>
          <NavLink to="/study" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Study</NavLink>
          <NavLink to="/exam" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Exam</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-600">{user.name || user.email}</span>
              <button onClick={logout} className="px-3 py-1.5 rounded bg-gray-900 text-white text-sm">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="px-3 py-1.5 rounded bg-gray-900 text-white text-sm">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}
