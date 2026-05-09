import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/img/bg.jpg')" }}
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 max-w-md w-full text-center shadow-2xl border border-white/50">
        <h1 className="text-8xl font-extrabold text-rose-500">404</h1>

        <h2 className="text-2xl font-bold text-slate-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-slate-500 mt-3">
          Halaman tidak ditemukan atau URL yang kamu masukkan salah.
        </p>

        <Link
          to="/"
          className="inline-block mt-7 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold hover:opacity-90 transition"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}