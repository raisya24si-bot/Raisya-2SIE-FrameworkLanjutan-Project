import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 flex font-sans text-slate-700">
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0">
        <Header />

        <section className="p-6 lg:p-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
}