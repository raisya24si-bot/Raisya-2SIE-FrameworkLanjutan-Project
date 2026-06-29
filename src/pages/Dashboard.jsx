import { useEffect } from "react";
import {
  Calendar,
  CreditCard,
  Sparkles,
  Users,
  Wallet,
  Bell,
  CheckCircle,
  ShoppingCart,
  KeyRound,
  FileText,
} from "lucide-react";
import SoftIconBox from "@/components/ui/SoftIconBox";

const stats = [
  {
    title: "Today's Revenue",
    value: "Rp 3,240K",
    growth: "+12%",
    icon: <Wallet size={18} />,
  },
  {
    title: "Today's Customers",
    value: "1,240",
    growth: "+8%",
    icon: <Users size={18} />,
  },
  {
    title: "Appointments",
    value: "58",
    growth: "+15%",
    icon: <Calendar size={18} />,
  },
  {
    title: "Treatments",
    value: "142",
    growth: "+20%",
    icon: <Sparkles size={18} />,
  },
];

const clinicActivities = [
  {
    title: "Aulia Putri selesai Facial Glow",
    time: "09 JUN 7:20 PM",
    icon: <Bell size={16} />,
    color: "text-[#82d616]",
  },
  {
    title: "Booking baru untuk Acne Treatment",
    time: "08 JUN 12:20 PM",
    icon: <CheckCircle size={16} />,
    color: "text-[#ff0080]",
  },
  {
    title: "Penjualan skincare Glow Serum",
    time: "04 JUN 3:10 PM",
    icon: <ShoppingCart size={16} />,
    color: "text-[#21d4fd]",
  },
  {
    title: "Transaksi QRIS berhasil diproses",
    time: "02 JUN 2:45 PM",
    icon: <CreditCard size={16} />,
    color: "text-[#fbcf33]",
  },
  {
    title: "Treatment Laser Face dijadwalkan",
    time: "18 MAY 1:30 PM",
    icon: <KeyRound size={16} />,
    color: "text-[#cb0c9f]",
  },
  {
    title: "Laporan bulanan klinik diperbarui",
    time: "14 MAY 3:30 PM",
    icon: <FileText size={16} />,
    color: "text-[#344767]",
  },
];

export default function Dashboard() {
  useEffect(() => {
    document.title = "GlowCare Clinic - Dashboard";
  }, []);

  return (
    <div className="space-y-5">
      {/* STAT CARDS */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]"
          >
            <div>
              <p className="text-sm font-semibold text-[#8392ab]">
                {item.title}
              </p>

              <div className="mt-1 flex items-baseline gap-2">
                <h2 className="text-xl font-bold text-[#344767]">
                  {item.value}
                </h2>
                <p className="text-sm font-bold text-[#82d616]">
                  {item.growth}
                </p>
              </div>
            </div>

            <SoftIconBox size="lg">{item.icon}</SoftIconBox>
          </div>
        ))}
      </div>

      {/* HERO */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col justify-between gap-6 rounded-2xl bg-white p-6 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)] md:flex-row xl:col-span-2">
          <div className="max-w-md">
            <p className="text-sm font-semibold text-[#8392ab]">
              Built for beauty clinic
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#344767]">
              GlowCare Dashboard
            </h2>

            <p className="mt-3 leading-relaxed text-[#67748e]">
              Sistem dashboard modern untuk mengelola customer, treatment,
              appointment, dan transaksi pada klinik kecantikan GlowCare.
            </p>

            <button className="mt-8 text-sm font-bold text-[#344767] transition hover:text-[#ff0080]">
              Read More →
            </button>
          </div>

          <div className="h-[190px] w-full overflow-hidden rounded-2xl md:w-[300px]">
            <img
              src="/img/clinic.jpg"
              alt="GlowCare Treatment"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          className="relative min-h-[250px] overflow-hidden rounded-2xl bg-cover bg-center p-6 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]"
          style={{ backgroundImage: "url('/img/doctor.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#141727]/75" />

          <div className="relative z-10 flex h-full flex-col justify-between text-white">
            <div>
              <h2 className="text-2xl font-bold">Beauty Treatment</h2>

              <p className="mt-3 text-sm leading-relaxed text-white/80">
                GlowCare memberikan pengalaman treatment wajah dan skincare
                premium untuk setiap customer.
              </p>
            </div>

            <button className="text-sm font-bold">Read More →</button>
          </div>
        </div>
      </div>

      {/* CHART + TIMELINE AREA */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* CLINIC ACTIVITY TIMELINE */}
        <div className="rounded-2xl bg-white p-6 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]">
          <h3 className="text-lg font-bold text-[#344767]">
            Clinic Activity
          </h3>

          <p className="mt-1 text-sm font-semibold text-[#67748e]">
            <span className="font-bold text-[#82d616]">↑ 24%</span> this month
          </p>

          <div className="relative mt-8 space-y-6">
            <div className="absolute left-[9px] top-2 h-[calc(100%-20px)] w-px bg-[#e9ecef]" />

            {clinicActivities.map((item, index) => (
              <div key={index} className="relative flex gap-5">
                <div
                  className={`relative z-10 flex h-5 w-5 items-center justify-center bg-white ${item.color}`}
                >
                  {item.icon}
                </div>

                <div className="-mt-1">
                  <h4 className="text-sm font-bold leading-snug text-[#344767]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-[#8392ab]">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* APPOINTMENT OVERVIEW */}
        <div className="rounded-2xl bg-white p-6 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)] xl:col-span-2">
          <div>
            <h3 className="text-lg font-bold text-[#344767]">
              Appointment Overview
            </h3>

            <p className="mt-1 text-sm font-semibold text-[#67748e]">
              <span className="font-bold text-[#82d616]">↑ 18%</span> lebih
              ramai dibanding tahun lalu
            </p>
          </div>

          <div className="mt-8">
            <div className="relative h-[320px]">
              <div className="absolute inset-0 flex flex-col justify-between pl-10">
                <div className="border-t border-dashed border-[#e9ecef]" />
                <div className="border-t border-dashed border-[#e9ecef]" />
                <div className="border-t border-dashed border-[#e9ecef]" />
                <div className="border-t border-dashed border-[#e9ecef]" />
                <div className="border-t border-dashed border-[#e9ecef]" />
              </div>

              <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-xs font-semibold text-[#8392ab]">
                <span>500</span>
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>

              <div className="relative ml-10 h-full">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 1000 320"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 260 C80 250, 120 170, 180 180 S300 280, 380 130 S500 120, 580 170 S700 240, 780 150 S900 230, 1000 80"
                    fill="none"
                    stroke="#ff0080"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />

                  <path
                    d="M0 280 C100 240, 160 210, 220 230 S350 300, 430 220 S600 180, 680 240 S850 310, 1000 130"
                    fill="none"
                    stroke="#344767"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                </svg>

                <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-4 text-xs font-semibold text-[#8392ab]">
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}