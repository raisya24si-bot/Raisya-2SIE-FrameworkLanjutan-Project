import { Search, Bell, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="h-24 bg-white/85 backdrop-blur-xl border-b border-rose-100 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-rose-200">
          <Sparkles size={22} />
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-800">
            Beauty Clinic Dashboard
          </h2>
          <p className="text-sm text-slate-400">
            Manage treatment, customers, and appointments
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2 bg-rose-50 px-4 py-2.5 rounded-2xl border border-rose-100 w-72">
          <Search size={18} className="text-rose-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm flex-1 placeholder:text-slate-400"
          />
        </div>

        <button className="w-11 h-11 rounded-2xl bg-white border border-rose-100 flex items-center justify-center text-rose-500 hover:bg-rose-50 shadow-sm transition">
          <Bell size={19} />
        </button>

        <div className="h-10 w-px bg-rose-100 hidden sm:block" />

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-700">Admin Clinic</p>
            <p className="text-xs text-slate-400">Administrator</p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-rose-200">
            A
          </div>
        </div>
      </div>
    </header>
  );
}