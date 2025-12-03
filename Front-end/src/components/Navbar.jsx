import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Menu, X, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-white/10 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg neon-glow-blue">
              <span className="text-xl font-bold text-white">E</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ExitPrep
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {[
            { to: "/", label: "Dashboard" },
            { to: "/study", label: "Study" },
            { to: "/exam", label: "Exam" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* User Menu */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen((s) => !s)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg glass-card-light hover:bg-white/5 transition-all duration-200"
                aria-expanded={profileOpen}
                aria-haspopup="true"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-sm font-medium text-white">
                  {user.name ? user.name.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : 'U')}
                </div>
                <span className="hidden sm:inline text-sm text-gray-300">{user.name || 'Profile'}</span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white/5 backdrop-blur-lg rounded-lg shadow-lg p-3 text-white z-50 animate-fade-in origin-top-right transition-all">
                  <div className="flex items-center gap-3 p-2">
                    <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-white text-lg">
                      {user.name ? user.name.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : 'U')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{user.name || 'User'}</div>
                      <div className="text-sm text-gray-300 truncate">{user.email}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      onClick={() => { setProfileOpen(false); logout(); }}
                      className="w-full px-3 py-2 rounded-lg bg-red-600/90 hover:bg-red-600 transition-colors text-sm font-medium"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Login
            </Link>
          )}
          
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 glass-card-light animate-fade-in">
          <nav className="flex flex-col p-4 space-y-2">
            {[
              { to: "/", label: "Dashboard" },
              { to: "/study", label: "Study" },
              { to: "/exam", label: "Exam" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}