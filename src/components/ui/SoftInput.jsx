export default function SoftInput({ label, placeholder, type = "text", ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-bold text-[#252f40]">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3
          text-sm text-[#252f40] outline-none transition
          placeholder:text-[#8392ab]
          focus:border-[#cb0c9f] focus:ring-2 focus:ring-pink-100
        "
        {...props}
      />
    </div>
  );
}