import { Bell, Search, Settings, UserCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Dashboard",
  "/dashboard": "Dashboard",
  "/customers": "Customers",
  "/treatments": "Treatments",
  "/appointments": "Appointments",
  "/transactions": "Transactions",
  "/users": "Users",
};

export default function Header() {
  const location = useLocation();

  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-[#8392ab]">
          Pages / {title}
        </p>

        <h1 className="mt-1 text-2xl font-bold text-[#344767]">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8392ab]"
          />

          <input
            type="text"
            placeholder="Type here..."
            className="h-10 w-[220px] rounded-xl border border-[#e9ecef] bg-white pl-10 pr-3 text-sm text-[#344767] outline-none placeholder:text-[#8392ab] focus:border-[#ff0080]"
          />
        </div>

        <button className="flex items-center gap-1 text-sm font-semibold text-[#67748e] transition hover:text-[#344767]">
          <UserCircle2 size={17} />
          Sign In
        </button>

        <button className="rounded-lg p-2 text-[#67748e] transition hover:bg-white hover:shadow-sm">
          <Settings size={18} />
        </button>

        <button className="relative rounded-lg p-2 text-[#67748e] transition hover:bg-white hover:shadow-sm">
          <Bell size={18} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
}