export default function PageHeader({ title, subtitle, children }) {
  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-700">{title}</h1>
        <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
      </div>

      {children && <div>{children}</div>}
    </div>
  );
}