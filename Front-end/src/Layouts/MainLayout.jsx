import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex">
        <aside className="w-64 border-r border-zinc-800 bg-zinc-900 text-zinc-100 hidden md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
