export default function SoftIconBox({
  children,
  size = "md",
  active = true,
  className = "",
}) {
  const sizes = {
    sm: "h-8 w-8 rounded-lg",
    md: "h-9 w-9 rounded-xl",
    lg: "h-12 w-12 rounded-xl",
  };

  return (
    <div
      className={`
        flex items-center justify-center
        ${sizes[size]}
        ${
          active
            ? "bg-[linear-gradient(310deg,#7928ca_0%,#ff0080_100%)] text-white shadow-[0_4px_20px_rgba(255,0,128,0.35)]"
            : "bg-white text-[#344767] shadow-sm"
        }
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}