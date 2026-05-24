export default function SoftAvatar({ src, name, size = "md" }) {
  const sizes = {
    sm: "h-9 w-9 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-16 w-16 text-lg",
  };

  return (
    <div
      className={`
        flex items-center justify-center overflow-hidden rounded-xl
        bg-gradient-to-r from-[#7928ca] to-[#ff0080]
        font-bold text-white shadow-md
        ${sizes[size]}
      `}
    >
      {src ? (
        <img src={src} alt={name} className="h-full w-full object-cover" />
      ) : (
        name?.charAt(0)
      )}
    </div>
  );
}