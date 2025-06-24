import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import User from "../pages/Users/User";
import { Layout } from "./Layout";
import { UsersDashboard } from "../pages/Users/UserDashboard";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/users" element={<UsersDashboard />} />
        </Route>
      </Routes>
    </>
  );
}   