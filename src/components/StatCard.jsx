export default function StatCard({ title, value, growth, icon }) {
  return (
    <div className="soft-card p-5 flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2 text-[#344767]">
          {value}
        </h2>

        <p className="text-green-500 text-sm mt-1 font-medium">
          {growth}
        </p>
      </div>

      <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-white text-2xl shadow-lg">
        {icon}
      </div>
    </div>
  );
}