import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true)

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

    setLoading(false);

    if (error || !data) {
      setError("Email atau password salah!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));

    navigate("/");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#344767]">
          Welcome Back
        </h1>

        <p className="text-gray-500 mt-3">
          Enter your email and password to sign in
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[30px] p-8 shadow-xl">
        {error && (
          <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#344767] mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#344767] mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-500">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-sm text-pink-500 font-medium"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition disabled:opacity-60"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Don't have an account?

          <Link
            to="/register"
            className="text-pink-500 font-semibold ml-1"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}