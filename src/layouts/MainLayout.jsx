import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">

      <Sidebar />

      <div className="ml-[270px] p-6">

        <Header />

        <div className="mt-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
}