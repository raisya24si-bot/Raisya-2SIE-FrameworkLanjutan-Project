export default function StatCard({ title, value, growth, icon }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#8392ab]">{title}</p>
          <h3 className="mt-1 text-2xl font-bold text-[#252f40]">{value}</h3>
          <p className="mt-2 text-sm font-bold text-[#82d616]">{growth}</p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#7928ca] to-[#ff0080] text-white shadow-md">
          {icon}
        </div>
      </div>
    </div>
  );
}