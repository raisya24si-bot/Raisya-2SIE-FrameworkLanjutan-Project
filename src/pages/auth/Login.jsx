import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "raisya@gmail.com" && password === "12345") {
      setError("");
      navigate("/");
    } else {
      setError("Email atau password salah!");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-700 mb-2">Welcome Back</h2>
      <p className="text-sm text-slate-400 mb-6">
        Login untuk masuk ke dashboard GlowCare
      </p>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-rose-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-rose-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-rose-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-rose-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-rose-500 text-white py-3 rounded-xl hover:bg-rose-600 transition">
          Login
        </button>
      </form>

      <p className="text-sm text-slate-400 mt-6 text-center">
        Belum punya akun?{" "}
        <Link to="/register" className="text-rose-500 font-semibold">
          Register
        </Link>
      </p>
    </div>
  );
}