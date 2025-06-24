import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import User from "../pages/Users/User";

export const Routers = () => {
  return (
    <>              
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/users/:userId" element={<User />} />
        </Routes>                           
    </>
  );
}   