import { Bell, Crown, Search, UserCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";

import SoftBadge from "@/components/ui/SoftBadge";
import SoftAvatar from "@/components/ui/SoftAvatar";

const pageTitles = {
  "/member": "Home",
  "/member/dashboard": "Home",
  "/member/treatments": "Treatments",
  "/member/appointments": "Appointments",
  "/member/promotions": "Promotions",
  "/member/profile": "Profile",
};

export default function MemberHeader({
  memberName = "Raisya",
  membership = "Gold",
}) {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Home";

  const badgeColor =
    membership === "Gold"
      ? "warning"
      : membership === "Silver"
      ? "dark"
      : "primary";

  return (
    <header className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-[#8392ab]">
          Pages / {title}
        </p>

        <h1 className="mt-1 text-2xl font-bold text-[#344767]">
          Welcome back, {memberName} 👋
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8392ab]"
          />

          <input
            type="text"
            placeholder="Search treatment..."
            className="h-10 w-[240px] rounded-xl border border-[#e9ecef] bg-white pl-10 pr-3 text-sm text-[#344767] outline-none placeholder:text-[#8392ab] focus:border-[#ff0080]"
          />
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Crown size={16} className="text-[#fbcf33]" />
          <SoftBadge color={badgeColor}>{membership} Member</SoftBadge>
        </div>

        <button className="relative rounded-xl bg-white p-2 text-[#67748e] shadow-sm transition hover:shadow-md">
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
          <SoftAvatar name={memberName} size="sm" />
          <span className="hidden text-sm font-semibold text-[#344767] md:block">
            {memberName}
          </span>
          <UserCircle2 size={18} className="text-[#8392ab]" />
        </div>
      </div>
    </header>
  );
}