import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-full max-w-md mx-auto">

      {/* HEADER */}
      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold text-[#344767]">
          Welcome Back
        </h1>

        <p className="text-gray-500 mt-3">
          Enter your email and password to sign in
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[30px] p-8 shadow-xl">

        <form className="space-y-6">

          {/* EMAIL */}
          <div>

            <label className="block text-sm font-semibold text-[#344767] mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Your email"
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

            <label className="block text-sm font-semibold text-[#344767] mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Your password"
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

          {/* REMEMBER */}
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
            Sign In
          </button>
        </form>

        {/* FOOTER */}
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