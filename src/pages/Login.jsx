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
      navigate("/");
    } else {
      setError("Email atau password salah!");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Welcome Back</h2>
      <p className="text-sm text-slate-400 mb-6">Masuk ke dashboard GlowCare</p>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          autoComplete="off"
          className="w-full border border-rose-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          className="w-full border border-rose-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-2xl font-bold hover:opacity-90 transition"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-slate-400 mt-6 text-center">
        Belum punya akun?{" "}
        <Link to="/register" className="text-rose-500 font-bold hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}