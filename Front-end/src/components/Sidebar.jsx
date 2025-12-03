import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, FileText } from 'lucide-react';

export default function Sidebar({ isOpen }) {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/study', label: 'Study Mode', icon: BookOpen },
    { path: '/exam', label: 'Exam Mode', icon: FileText },
  ];

  return (
    <>
      {/* Sidebar (hidden on small screens) */}
      <aside
        className={`hidden lg:fixed lg:left-0 lg:top-[73px] lg:h-[calc(100vh-73px)] lg:w-64 lg:block glass-card border-r border-white/10 transition-all duration-300 lg:z-40`}
      >
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/30 shadow-lg neon-glow-blue'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />
      </aside>
    </>
  );
}