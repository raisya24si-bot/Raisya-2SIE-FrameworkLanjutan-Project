export default function SoftCard({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl bg-white p-6 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]
        border border-gray-100
        ${className}
      `}
    >
      {children}
    </div>
  );
}