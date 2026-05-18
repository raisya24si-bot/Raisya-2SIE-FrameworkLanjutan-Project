import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {

  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccess("Registrasi berhasil! Silakan login.");
  };

  return (
    <div className="w-full max-w-md mx-auto">

      {/* HEADER */}
      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold text-[#344767]">
          Create Account
        </h1>

        <p className="text-gray-500 mt-3">
          Register admin account for GlowCare Clinic
        </p>
      </div>

      {/* CARD */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[30px] p-8 shadow-xl">

        {/* SUCCESS ALERT */}
        {success && (
          <div
            className="
              mb-5
              rounded-2xl
              border
              border-green-200
              bg-green-50
              px-4
              py-3
              text-sm
              font-medium
              text-green-600
            "
          >
            {success}
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          {/* FULL NAME */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-[#344767]">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="
                w-full
                px-5
                py-4
                rounded-2xl
                bg-white
                border
                border-gray-200
                outline-none
                focus:border-pink-400
                focus:ring-4
                focus:ring-pink-100
                transition
              "
            />
          </div>

          {/* EMAIL */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-[#344767]">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                px-5
                py-4
                rounded-2xl
                bg-white
                border
                border-gray-200
                outline-none
                focus:border-pink-400
                focus:ring-4
                focus:ring-pink-100
                transition
              "
            />
          </div>

          {/* PASSWORD */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-[#344767]">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="
                w-full
                px-5
                py-4
                rounded-2xl
                bg-white
                border
                border-gray-200
                outline-none
                focus:border-pink-400
                focus:ring-4
                focus:ring-pink-100
                transition
              "
            />
          </div>

          {/* BUTTON */}
          <button
            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              to-purple-600
              text-white
              font-semibold
              shadow-lg
              hover:scale-[1.02]
              transition
            "
          >
            Register
          </button>
        </form>

        {/* FOOTER */}
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