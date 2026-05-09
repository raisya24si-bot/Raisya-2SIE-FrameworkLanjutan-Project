import { Users, Sparkles, CalendarDays, Wallet } from "lucide-react";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-white shadow-xl shadow-rose-200">
        <p className="text-sm text-white/80 mb-2">Welcome back, Admin</p>
        <h1 className="text-3xl font-extrabold">GlowCare Beauty Clinic</h1>
        <p className="text-white/80 mt-2 max-w-2xl">
          Kelola treatment, customer, dan appointment klinik kecantikan dengan tampilan yang soft dan modern.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Total Customers" value="120" icon={<Users size={24} />} description="Pelanggan aktif GlowCare" />
        <StatCard title="Total Treatments" value="25" icon={<Sparkles size={24} />} description="Layanan perawatan tersedia" />
        <StatCard title="Appointments Today" value="8" icon={<CalendarDays size={24} />} description="Booking hari ini" />
        <StatCard title="Monthly Revenue" value="Rp 12.5jt" icon={<Wallet size={24} />} description="Pendapatan bulan ini" />
      </div>
    </div>
  );
}