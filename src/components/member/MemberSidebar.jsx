import {
  Calendar,
  Gift,
  Home,
  LogOut,
  Sparkles,
  UserCircle2,
} from "lucide-react";

import { Link, NavLink } from "react-router-dom";

import SoftBadge from "@/components/ui/SoftBadge";
import SoftButton from "@/components/ui/SoftButton";
import SoftCard from "@/components/ui/SoftCard";
import SoftIconBox from "@/components/ui/SoftIconBox";

const menus = [
  { name: "Home", icon: Home, path: "/member" },
  { name: "Treatments", icon: Sparkles, path: "/member/treatments" },
  { name: "Appointments", icon: Calendar, path: "/member/appointments" },
  { name: "Promotions", icon: Gift, path: "/member/promotions" },
  { name: "Profile", icon: UserCircle2, path: "/member/profile" },
];

export default function MemberSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[260px] bg-[#f8f9fa] px-4 py-6">
      <div className="mb-6 flex items-center gap-3 border-b border-[#e9ecef] px-4 pb-6">
        <SoftIconBox size="md">
          <Sparkles size={18} />
        </SoftIconBox>

        <div>
          <h1 className="text-sm font-bold text-[#344767]">GlowCare</h1>
          <p className="text-xs font-semibold text-[#8392ab]">Member Area</p>
        </div>
      </div>

      <nav className="space-y-1">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.name}
              to={menu.path}
              end={menu.path === "/member"}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#344767] shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]"
                    : "text-[#8392ab] hover:bg-white hover:text-[#344767] hover:shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <SoftIconBox
                    size="sm"
                    active={isActive}
                    className={
                      !isActive
                        ? "group-hover:bg-[linear-gradient(310deg,#7928ca_0%,#ff0080_100%)] group-hover:text-white"
                        : ""
                    }
                  >
                    <Icon size={16} />
                  </SoftIconBox>

                  <span>{menu.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-4 right-4 space-y-4">
        <SoftCard className="p-4">
          <p className="text-xs font-bold uppercase text-[#8392ab]">
            Membership
          </p>

          <div className="mt-2 flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#344767]">Gold Member</h3>
            <SoftBadge color="warning">Gold</SoftBadge>
          </div>

          <p className="mt-2 text-xs font-semibold text-[#8392ab]">
            1.250 points
          </p>
        </SoftCard>

        <SoftButton
          size="md"
          className="w-full"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          <LogOut size={16} />
          Logout
        </SoftButton>
      </div>
    </aside>
  );
}