import { Outlet } from "react-router-dom";
import MemberSidebar from "@/components/member/MemberSidebar";
import MemberHeader from "@/components/member/MemberHeader";

export default function MemberLayout() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <MemberSidebar />

      <main className="ml-[260px] min-h-screen px-8 py-6">
        <MemberHeader />

        <div className="mt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}