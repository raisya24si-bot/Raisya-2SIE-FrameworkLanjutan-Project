import {
  Wallet,
  Users,
  Calendar,
  Sparkles,
  Info,
} from "lucide-react";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Today's Revenue",
    value: "$3,240",
    growth: "+12%",
    icon: <Wallet size={18} />,
  },
  {
    title: "Customers",
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

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* ALERT */}
      <Alert className="bg-pink-50 border-pink-200 text-[#344767] rounded-2xl shadow-sm">
        <Info className="h-5 w-5 text-pink-500" />

        <AlertTitle className="font-bold text-[#344767]">
          Informasi Appointment Hari Ini
        </AlertTitle>

        <AlertDescription className="text-gray-500">
          Terdapat 58 janji temu hari ini. Pastikan data customer dan jadwal
          treatment sudah dikonfirmasi sebelum pelayanan dimulai.
        </AlertDescription>

        <AlertAction>
          <Button
            variant="outline"
            className="rounded-xl border-pink-300 text-pink-600 hover:bg-pink-100"
          >
            Lihat Jadwal
          </Button>
        </AlertAction>
      </Alert>

      {/* STATISTIC */}
      <div className="grid grid-cols-4 gap-5">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl px-5 py-4 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-gray-400 text-sm">{item.title}</p>

              <h2 className="text-[28px] font-bold text-[#344767] mt-1">
                {item.value}
              </h2>

              <p className="text-green-500 text-sm font-semibold mt-1">
                {item.growth}
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* HERO SECTION */}
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-gray-400 text-sm">Built by developers</p>

          <h2 className="text-2xl font-bold text-[#344767] mt-2">
            GlowCare Dashboard
          </h2>

          <p className="text-gray-400 mt-3 leading-relaxed">
            Modern beauty clinic dashboard for customer, treatment,
            appointment, and transaction management.
          </p>

          <button className="mt-8 text-sm font-semibold text-[#344767]">
            Read More →
          </button>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm h-[220px]">
          <img
            src="/img/foto1.jpg"
            alt="GlowCare"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="rounded-2xl p-6 shadow-sm bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: "url('/img/foto1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-white h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">Beauty Treatment</h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-200">
                GlowCare provides premium skincare and facial treatment
                experience for every customer.
              </p>
            </div>

            <button className="text-sm font-semibold">Read More →</button>
          </div>
        </div>
      </div>

      {/* CHART SECTION */}
      <div className="grid grid-cols-3 gap-5">
        {/* APPOINTMENT STATUS */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="bg-[#1f2b5b] rounded-2xl h-[220px] px-6 py-5 flex items-end justify-between">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-[140px] bg-pink-500 rounded-full"></div>
              <span className="text-white text-xs">Selesai</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-[90px] bg-purple-400 rounded-full"></div>
              <span className="text-white text-xs">Dijadwalkan</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-[50px] bg-red-400 rounded-full"></div>
              <span className="text-white text-xs">Dibatalkan</span>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-bold text-[#344767] text-lg">
              Status Janji Temu
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              Statistik status appointment dalam 7 hari terakhir
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-xs text-gray-400">Total Pasien</p>
              <h4 className="text-xl font-bold text-[#344767] mt-1">
                1,240
              </h4>
            </div>

            <div>
              <p className="text-xs text-gray-400">Janji Temu Hari Ini</p>
              <h4 className="text-xl font-bold text-[#344767] mt-1">58</h4>
            </div>

            <div>
              <p className="text-xs text-gray-400">Tingkat Kehadiran</p>
              <h4 className="text-xl font-bold text-green-500 mt-1">92%</h4>
            </div>

            <div>
              <p className="text-xs text-gray-400">Pasien Baru Bulan Ini</p>
              <h4 className="text-xl font-bold text-pink-500 mt-1">86</h4>
            </div>
          </div>
        </div>

        {/* VISIT TREND */}
        <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-[#344767] text-lg">
                Tren Kunjungan Pasien
              </h3>

              <p className="text-sm text-green-500 mt-1">
                ↑ 18% lebih ramai dibanding tahun lalu
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-400">Total Appointment</p>

              <h4 className="text-2xl font-bold text-[#344767]">12,480</h4>
            </div>
          </div>

          <div className="mt-8">
            <div className="relative h-[320px]">
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="border-t border-dashed border-gray-200"></div>
                <div className="border-t border-dashed border-gray-200"></div>
                <div className="border-t border-dashed border-gray-200"></div>
                <div className="border-t border-dashed border-gray-200"></div>
                <div className="border-t border-dashed border-gray-200"></div>
              </div>

              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
                <span>500</span>
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>

              <div className="ml-10 h-full relative">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 1000 320"
                  preserveAspectRatio="none"
                >
                  <path
                    d="
                      M0 260
                      C80 250, 120 170, 180 180
                      S300 280, 380 130
                      S500 120, 580 170
                      S700 240, 780 150
                      S900 230, 1000 80
                    "
                    fill="none"
                    stroke="#cb0c9f"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    d="
                      M0 280
                      C100 240, 160 210, 220 230
                      S350 300, 430 220
                      S600 180, 680 240
                      S850 310, 1000 130
                    "
                    fill="none"
                    stroke="#344767"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 pt-4">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>Mei</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Agu</span>
                  <span>Sep</span>
                  <span>Okt</span>
                  <span>Nov</span>
                  <span>Des</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}