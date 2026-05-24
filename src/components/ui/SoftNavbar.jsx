import SearchBar from "./SearchBar";

export default function SoftNavbar({ title = "Dashboard" }) {
  return (
    <div className="mb-6 flex items-center justify-between rounded-2xl bg-white/80 px-6 py-4 shadow-sm backdrop-blur-md">
      <div>
        <p className="text-sm font-semibold text-[#8392ab]">Pages / {title}</p>
        <h1 className="text-xl font-bold text-[#252f40]">{title}</h1>
      </div>

      <div className="w-72">
        <SearchBar placeholder="Search here..." />
      </div>
    </div>
  );
}