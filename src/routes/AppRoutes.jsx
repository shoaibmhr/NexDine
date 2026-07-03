import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import POS from "../pages/POS/POS";
import Orders from "../pages/Orders/Orders";
import Customers from "../pages/Customers/Customers";
import Login from "../pages/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Login Page (Without Layout) */}
      <Route path="/login" element={<Login />} />

      {/* Dashboard Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="pos" element={<POS />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
