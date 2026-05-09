import { Outlet } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-rose-400 to-pink-500 p-10 text-white">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Sparkles size={26} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">GlowCare</h1>
                <p className="text-white/80 text-sm">Beauty Clinic</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold leading-tight mb-4">
              Rawat kecantikan pelanggan dengan sistem yang lebih modern.
            </h2>

            <p className="text-white/80 leading-relaxed">
              Dashboard admin untuk mengelola layanan treatment, data pelanggan,
              dan jadwal appointment klinik kecantikan.
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5">
            <p className="text-sm text-white/80 mb-2">Beauty Tip</p>
            <p className="font-medium">
              “Healthy skin is the best foundation for beauty.”
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8 lg:hidden text-center">
            <h1 className="text-3xl font-bold text-rose-500">GlowCare</h1>
            <p className="text-slate-400">Beauty Clinic</p>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}