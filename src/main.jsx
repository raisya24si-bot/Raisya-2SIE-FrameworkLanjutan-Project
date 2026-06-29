import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./assets/tailwind.css";

// Layout
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import MemberLayout from "./layouts/MemberLayout";

// Components
import Loading from "./components/Loading";

// Guest Page
const LandingPage = lazy(() => import("./pages/LandingPage"));

// Admin Pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Treatments = lazy(() => import("./pages/Treatments"));
const Customers = lazy(() => import("./pages/Customers"));
const Appointments = lazy(() => import("./pages/Appointments"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Users = lazy(() => import("./pages/Users"));
const Components = lazy(() => import("./pages/Components"));

// Detail Pages
const CustomerDetail = lazy(() => import("./pages/CustomerDetail"));
const TreatmentDetail = lazy(() => import("./pages/TreatmentDetail"));

// Member Pages
const MemberDashboard = lazy(() => import("./pages/member/MemberDashboard"));
const MemberTreatments = lazy(() => import("./pages/member/MemberTreatments"));
const MemberAppointments = lazy(() => import("./pages/member/MemberAppointments"));
const MemberPromotions = lazy(() => import("./pages/member/MemberPromotions"));
const MemberProfile = lazy(() => import("./pages/member/MemberProfile"));

// Auth Pages
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));

// Error Page
const ErrorPage = lazy(() => import("./components/ErrorPage"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:id" element={<CustomerDetail />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/treatments/:id" element={<TreatmentDetail />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/users" element={<Users />} />
            <Route path="/components" element={<Components />} />
          </Route>

          <Route element={<MemberLayout />}>
            <Route path="/member" element={<Navigate to="/member/dashboard" replace />} />
            <Route path="/member/dashboard" element={<MemberDashboard />} />
            <Route path="/member/treatments" element={<MemberTreatments />} />
            <Route path="/member/appointments" element={<MemberAppointments />} />
            <Route path="/member/promotions" element={<MemberPromotions />} />
            <Route path="/member/profile" element={<MemberProfile />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);