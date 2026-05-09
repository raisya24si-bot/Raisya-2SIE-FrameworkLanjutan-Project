export default function StatCard({ title, value, icon, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <h2 className="text-2xl font-bold text-rose-500 mt-2">{value}</h2>
        </div>

        <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-500">
          {icon}
        </div>
      </div>

      {description && (
        <p className="text-xs text-slate-400 mt-4">{description}</p>
      )}
    </div>
  );
}