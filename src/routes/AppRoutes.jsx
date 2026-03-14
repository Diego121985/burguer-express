import Menu from "../pages/Menu/Menu";
import { Route, Routes, useLocation } from "react-router-dom";
import Payments from "../pages/Payments/Payments";
import Admin from "../pages/Admin/Admin";
import Cart from "../pages/Cart/Cart";
import Pix from "../pages/Pix/Pix";
import Success from "../pages/Success/Success";
import Card from "../pages/Card/Card";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Header from "../components/Header/Header";
function AppRoutes() {
  const location = useLocation();

  const hideHeader =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pix" element={<Pix />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cartao" element={<Card />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
