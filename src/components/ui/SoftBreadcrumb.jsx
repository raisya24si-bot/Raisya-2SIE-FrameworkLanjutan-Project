export default function SoftBreadcrumb({ items = [] }) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className={
              index === items.length - 1
                ? "text-[#252f40]"
                : "text-[#8392ab]"
            }
          >
            {item}
          </span>

          {index !== items.length - 1 && (
            <span className="text-[#8392ab]">/</span>
          )}
        </div>
      ))}
    </div>
  );
}