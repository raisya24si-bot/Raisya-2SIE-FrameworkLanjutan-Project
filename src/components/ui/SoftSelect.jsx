export default function SoftSelect({ label, options = [], ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-bold text-[#252f40]">
          {label}
        </label>
      )}

      <select
        className="
          w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3
          text-sm text-[#252f40] outline-none transition
          focus:border-[#cb0c9f] focus:ring-2 focus:ring-pink-100
        "
        {...props}
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}