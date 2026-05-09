import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center">
      <div className="bg-white px-8 py-6 rounded-3xl shadow-md border border-rose-100 flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center animate-pulse">
          <Sparkles className="text-rose-500" size={28} />
        </div>

        <div className="text-center">
          <h2 className="font-bold text-slate-700">Loading GlowCare...</h2>
          <p className="text-sm text-slate-400">
            Menyiapkan halaman klinik kecantikan
          </p>
        </div>
      </div>
    </div>
  );
}