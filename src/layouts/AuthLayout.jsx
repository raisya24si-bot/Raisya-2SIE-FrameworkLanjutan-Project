import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 p-6">
      <div className="w-full max-w-md soft-card p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#344767]">
            GlowCare
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Beauty Clinic Dashboard
          </p>
        </div>

        <Outlet />
      </div>
    </div>
  );
}