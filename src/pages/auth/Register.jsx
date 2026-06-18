import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");
    setLoading(true);

    const { error } = await supabase.from("users").insert([
      {
        full_name: fullName,
        email: email,
        password: password,
        role: "admin",
      },
    ]);

    setLoading(false);

    if (error) {
      setError("Registrasi gagal! Email mungkin sudah digunakan.");
      return;
    }

    setSuccess("Registrasi berhasil! Silakan login.");
    setFullName("");
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#344767]">
          Create Account
        </h1>

        <p className="text-gray-500 mt-3">
          Register admin account for GlowCare Clinic
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[30px] p-8 shadow-xl">
        {success && (
          <div className="mb-5 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-600">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#344767]">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-[#344767]">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-[#344767]">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-5 py-4 pr-14 rounded-2xl bg-white border border-gray-200 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition disabled:opacity-60"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account?

          <Link
            to="/login"
            className="text-pink-500 font-semibold ml-1"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}