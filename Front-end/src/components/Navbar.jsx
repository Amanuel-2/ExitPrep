import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-white/10 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-300" />
          </button>
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
            <>
              <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-lg glass-card-light border border-zinc-700/50">
                <User className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">{user.name || user.email}</span>
              </div>
              <button
                onClick={logout}
                className="p-2 rounded-lg glass-card-light hover:bg-red-500/10 hover:border-red-500/30 border border-zinc-700/50 transition-all duration-300 group"
                title="Logout"
              >
                <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
              </button>
            </>
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
              { to: "/settings", label: "Settings" },
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