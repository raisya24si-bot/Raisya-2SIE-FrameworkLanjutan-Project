export default function SoftProgress({ value = 50, color = "primary" }) {
  const colors = {
    primary: "from-[#7928ca] to-[#ff0080]",
    info: "from-[#2152ff] to-[#21d4fd]",
    success: "from-[#17ad37] to-[#98ec2d]",
    danger: "from-[#ea0606] to-[#ff667c]",
  };

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[#e9ecef]">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${colors[color]}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}