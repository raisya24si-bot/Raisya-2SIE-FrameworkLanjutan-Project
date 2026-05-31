import {
  LayoutDashboard,
  Users,
  Sparkles,
  Calendar,
  CreditCard,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },

  {
    name: "Customers",
    icon: Users,
    path: "/customers",
  },

  {
    name: "Treatments",
    icon: Sparkles,
    path: "/treatments",
  },

  {
    name: "Appointments",
    icon: Calendar,
    path: "/appointments",
  },

   {
    name: "Transactions",
    icon: Calendar,
    path: "/transactions",
  }

];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[250px] bg-white border-r border-gray-100 p-5">

      <div className="pb-5 border-b border-gray-100">

        <h1 className="text-[32px] font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          GlowCare
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Beauty Clinic Admin
        </p>
      </div>

      <nav className="mt-8 space-y-2">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.name}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                    : "text-[#344767] hover:bg-gray-100"
                }`
              }
            >
              <Icon size={18} />

              <span className="font-medium text-sm">
                {menu.name}
              </span>
            </NavLink>
          );
        })}
      </nav>

      <button className="absolute bottom-5 left-5 right-5 border border-gray-200 rounded-2xl py-4 flex items-center justify-center gap-2 text-[#344767] hover:bg-gray-100 transition">
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}