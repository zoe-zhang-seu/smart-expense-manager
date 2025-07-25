import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./Layout";
import { lazy } from "react";

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Expenses = lazy(() => import('../pages/Expenses'));
const UsersDashboard = lazy(() =>
  import('../pages/Users/UserDashboard').then(module => ({ default: module.UsersDashboard }))
);// only this page is currently dynamic
const User = lazy(() => import('../pages/Users/User'));


export const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/users" element={<UsersDashboard />} />
        </Route>
      </Routes>
  );
}   