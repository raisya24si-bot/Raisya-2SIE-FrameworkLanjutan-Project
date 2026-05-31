import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/tailwind.css";

// Layout
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Components
import Loading from "./components/Loading";

// Lazy Pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Treatments = lazy(() => import("./pages/Treatments"));
const Customers = lazy(() => import("./pages/Customers"));
const Appointments = lazy(() => import("./pages/Appointments"));
const Transactions = lazy(() => import("./pages/Transactions"));

// 🔥 DETAIL PAGES
const CustomerDetail = lazy(() => import("./pages/CustomerDetail"));
const TreatmentDetail = lazy(() => import("./pages/TreatmentDetail"));

// Auth Pages
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));

// Error Page
const ErrorPage = lazy(() => import("./components/ErrorPage"));

const Components = lazy(() => import("./pages/Components"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>

          {/* MAIN LAYOUT */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />

            <Route path="/treatments" element={<Treatments />} />
            <Route path="/treatments/:id" element={<TreatmentDetail />} /> 

            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:id" element={<CustomerDetail />} />

            <Route path="/appointments" element={<Appointments />} />
            <Route path="/components" element={<Components />} />

            <Route path="/transactions" element={<Transactions />} />
          </Route>

          {/* AUTH LAYOUT */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* ERROR PAGE */}
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);