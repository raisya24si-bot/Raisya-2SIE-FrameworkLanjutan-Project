import {
  MdSettings,
  MdNotifications,
  MdPerson,
} from "react-icons/md";
import SearchBar from "./SearchBar";

export default function SoftNavbar({ title = "Dashboard" }) {
  return (
    <div className="mb-6 flex items-center justify-between px-2 py-2">
      <div>
        <p className="text-sm font-semibold text-[#8392ab]">
          Pages / {title}
        </p>

        <h1 className="text-[22px] font-bold text-[#344767]">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-5">
        <SearchBar placeholder="Type here..." />

        <button className="flex items-center gap-1 text-sm font-semibold text-[#67748e] hover:text-[#344767]">
          <MdPerson />
          Sign In
        </button>

        <button className="text-[#67748e] hover:text-[#344767]">
          <MdSettings size={20} />
        </button>

        <button className="relative text-[#67748e] hover:text-[#344767]">
          <MdNotifications size={20} />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </div>
  );
}