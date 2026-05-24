export default function SoftAlert({ children, color = "info" }) {
  const colors = {
    primary: "from-[#7928ca] to-[#ff0080]",
    info: "from-[#2152ff] to-[#21d4fd]",
    success: "from-[#17ad37] to-[#98ec2d]",
    warning: "from-[#fbcf33] to-[#f53939]",
    danger: "from-[#ea0606] to-[#ff667c]",
    dark: "from-[#141727] to-[#3a416f]",
  };

  return (
    <div
      className={`
        rounded-xl bg-gradient-to-r p-4 text-sm font-semibold text-white shadow-md
        ${colors[color]}
      `}
    >
      {children}
    </div>
  );
}