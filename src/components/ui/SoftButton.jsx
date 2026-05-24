export default function SoftButton({
  children,
  variant = "primary",
  size = "md",
  outline = false,
  icon,
  className = "",
  ...props
}) {
  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-sm",
    icon: "h-11 w-11 p-0",
  };

  const variants = {
    primary: "from-[#7928ca] to-[#ff0080] text-white",
    info: "from-[#2152ff] to-[#21d4fd] text-white",
    success: "from-[#17ad37] to-[#98ec2d] text-white",
    danger: "from-[#ea0606] to-[#ff667c] text-white",
    dark: "from-[#141727] to-[#3a416f] text-white",
  };

  const outlineStyle =
    "border border-[#cb0c9f] bg-white text-[#cb0c9f] hover:bg-[#cb0c9f] hover:text-white";

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 rounded-lg
        font-bold uppercase tracking-wide shadow-md transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-lg active:scale-95
        ${sizes[size]}
        ${outline ? outlineStyle : `bg-gradient-to-r ${variants[variant]}`}
        ${className}
      `}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}