export default function SoftBadge({ children, color = "primary" }) {
  const colors = {
    primary: "bg-[#fce7f6] text-[#cb0c9f]",
    success: "bg-[#eefbd4] text-[#82d616]",
    info: "bg-[#d8f8ff] text-[#17c1e8]",
    warning: "bg-[#ffe8e8] text-[#f53939]",
    danger: "bg-[#ffe1e1] text-[#ea0606]",
    dark: "bg-[#e9ecef] text-[#252f40]",
  };

  return (
    <span
      className={`
        inline-flex rounded-lg px-3 py-1 text-xs font-bold uppercase
        ${colors[color]}
      `}
    >
      {children}
    </span>
  );
}