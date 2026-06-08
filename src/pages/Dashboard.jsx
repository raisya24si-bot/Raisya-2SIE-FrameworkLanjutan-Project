import { useEffect } from "react";

import {
  Wallet,
  Users,
  Calendar,
  Sparkles,
  Info,
  TrendingUp,
  Star,
  CheckCircle,
  Clock,
  XCircle,
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

const topTreatments = [
  { name: "Facial Glow", total: 120, height: 150 },
  { name: "Acne", total: 95, height: 120 },
  { name: "Peeling", total: 70, height: 90 },
  { name: "Laser", total: 55, height: 65 },
  { name: "Brightening", total: 80, height: 105 },
];

export default function Dashboard() {
  useEffect(() => {
    document.title = "GlowCare Clinic - Dashboard";
  }, []);

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

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-gray-400 text-sm">{item.title}</p>
              <h2 className="text-2xl font-bold text-[#344767] mt-1">
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

      {/* HERO */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-6 shadow-sm xl:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-400 text-sm">Built by developers</p>

            <h2 className="text-2xl font-bold text-[#344767] mt-2">
              GlowCare Dashboard
            </h2>

            <p className="text-gray-400 mt-3 leading-relaxed max-w-md">
              Sistem dashboard modern untuk mengelola customer, treatment,
              appointment, dan transaksi pada klinik kecantikan GlowCare.
            </p>

            <button className="mt-8 text-sm font-semibold text-[#344767]">
              Read More →
            </button>
          </div>

          <div className="w-full md:w-[300px] h-[190px] rounded-2xl overflow-hidden">
            <img
              src="/img/foto1.jpg"
              alt="GlowCare"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          className="rounded-2xl p-6 shadow-sm bg-cover bg-center relative overflow-hidden min-h-[250px]"
          style={{ backgroundImage: "url('/img/foto1.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#1f2b5b]/70"></div>

          <div className="relative z-10 text-white h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">Beauty Treatment</h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-200">
                GlowCare memberikan pengalaman treatment wajah dan skincare
                premium untuk setiap customer.
              </p>
            </div>

            <button className="text-sm font-semibold">Read More →</button>
          </div>
        </div>
      </div>

      {/* CHART AREA */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* TOP TREATMENT */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="bg-[#1f2b5b] rounded-2xl h-[230px] px-6 py-5 flex items-end justify-between">
            {topTreatments.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <span className="text-white text-xs font-semibold">
                  {item.total}
                </span>

                <div
                  className="w-5 rounded-full bg-gradient-to-t from-pink-500 to-purple-400"
                  style={{ height: `${item.height}px` }}
                ></div>

                <span className="text-white text-[10px] text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <h3 className="font-bold text-[#344767] text-lg">
              Treatment Terpopuler
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              Jumlah pemesanan treatment bulan ini
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-pink-500" />
                <p className="text-xs text-gray-400">Top Treatment</p>
              </div>
              <h4 className="text-xl font-bold text-[#344767] mt-1">
                Facial Glow
              </h4>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-green-500" />
                <p className="text-xs text-gray-400">Booking</p>
              </div>
              <h4 className="text-xl font-bold text-[#344767] mt-1">120</h4>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-yellow-500" />
                <p className="text-xs text-gray-400">Rating</p>
              </div>
              <h4 className="text-xl font-bold text-green-500 mt-1">4.9</h4>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-purple-500" />
                <p className="text-xs text-gray-400">Customer Baru</p>
              </div>
              <h4 className="text-xl font-bold text-pink-500 mt-1">86</h4>
            </div>
          </div>
        </div>

        {/* VISIT TREND */}
        <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
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

          {/* BOTTOM INFO */}
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-green-500" />
              <div>
                <p className="text-xs text-gray-400">Completed</p>
                <h4 className="font-bold text-[#344767]">320</h4>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock size={18} className="text-yellow-500" />
              <div>
                <p className="text-xs text-gray-400">Scheduled</p>
                <h4 className="font-bold text-[#344767]">180</h4>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <XCircle size={18} className="text-red-500" />
              <div>
                <p className="text-xs text-gray-400">Cancelled</p>
                <h4 className="font-bold text-[#344767]">42</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}