import { MdSearch } from "react-icons/md";

export default function SearchBar({ placeholder = "Search..." }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#d9d9d9] bg-white px-4 py-3 shadow-sm">
      <MdSearch className="text-xl text-[#8392ab]" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-[#252f40] outline-none placeholder:text-[#8392ab]"
      />
    </div>
  );
}