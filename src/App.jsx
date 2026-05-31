import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Treatments = React.lazy(() => import("./pages/Treatments"));
const Customers = React.lazy(() => import("./pages/Customers"));

const TreatmentDetail = React.lazy(() =>
  import("./pages/TreatmentDetail")
);

const CustomerDetail = React.lazy(() =>
  import("./pages/CustomerDetail")
);

const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Components = lazy(() => import("./pages/Components"));

const Transactions = React.lazy(() => import("./pages/Transactions"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>

        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          <Route
            path="/treatments"
            element={<Treatments />}
          />

          <Route
            path="/customers"
            element={<Customers />}
          />

          <Route
            path="/transactions"
            element={<Transactions />} 
          />

          <Route
            path="/treatments/:id"
            element={<TreatmentDetail />}
          />

          <Route
            path="/customers/:id"
            element={<CustomerDetail />}
          />

          <Route path="/components" element={<Components />} />

          <Route path="/error-400" element={<Error400 />} />
          <Route path="/error-401" element={<Error401 />} />
          <Route path="/error-403" element={<Error403 />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;