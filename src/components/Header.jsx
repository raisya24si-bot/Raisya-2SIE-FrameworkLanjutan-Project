import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">

      <div>
        <p className="text-sm text-gray-400">
          Pages / Dashboard
        </p>

        <h1 className="text-[32px] font-bold text-[#344767]">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Type here..."
            className="bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 w-[260px] outline-none"
          />
        </div>

        <button className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
          <Bell size={18} />
        </button>
      </div>
    </header>
  );
}