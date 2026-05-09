import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess("Registrasi berhasil! Silakan login.");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-700 mb-2">Create Account</h2>
      <p className="text-sm text-slate-400 mb-6">
        Daftar akun admin GlowCare Clinic
      </p>

      {success && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-xl text-sm">
          {success}
        </div>
      )}

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-rose-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-rose-300"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-rose-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-rose-300"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-rose-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-rose-300"
        />

        <button className="w-full bg-rose-500 text-white py-3 rounded-xl hover:bg-rose-600 transition">
          Register
        </button>
      </form>

      <p className="text-sm text-slate-400 mt-6 text-center">
        Sudah punya akun?{" "}
        <Link to="/login" className="text-rose-500 font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
}