import { MdSearch } from "react-icons/md";

export default function SearchBar({
  placeholder = "Type here...",
}) {
  return (
    <div className="flex h-10 w-64 items-center rounded-xl border border-[#e9ecef] bg-white px-3 shadow-sm">

      <MdSearch
        className="mr-2 text-lg text-[#8392ab]"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-[#344767] placeholder:text-[#8392ab] focus:outline-none"
      />
    </div>
  );
}