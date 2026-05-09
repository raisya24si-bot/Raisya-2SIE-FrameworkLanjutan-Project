import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Sparkles,
  Users,
  CalendarDays,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
    { name: "Treatments", path: "/treatments", icon: <Sparkles size={18} /> },
    { name: "Customers", path: "/customers", icon: <Users size={18} /> },
    { name: "Appointments", path: "/appointments", icon: <CalendarDays size={18} /> },
  ];

  return (
    <aside className="w-72 min-h-screen bg-white/90 backdrop-blur-xl border-r border-rose-100 flex flex-col">
      <div className="p-7 border-b border-rose-100">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent">
          GlowCare
        </h1>
        <p className="text-sm text-slate-400 mt-1">Beauty Clinic Admin</p>
      </div>

      <nav className="flex-1 p-5 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                isActive
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-200"
                  : "text-slate-500 hover:bg-rose-50 hover:text-rose-500"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-5 border-t border-rose-100">
        <button
          onClick={() => navigate("/login")}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl border border-rose-200 text-slate-600 hover:bg-rose-50 hover:text-rose-500 transition font-semibold"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}