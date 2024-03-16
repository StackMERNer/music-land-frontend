import { Route, Routes } from "react-router-dom";
import InstrumentDetails from "../../pages/Instruments/InstrumentDetails";
import Instruments from "../../pages/Instruments/Instruments";
import Home from "../Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import Orders from "../../pages/Orders/Orders";
import Cart from "../../pages/Instruments/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instruments" element={<Instruments />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/instruments/:id" element={<InstrumentDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders/:id" element={<Orders />} />
    </Routes>
  );
};

export default AppRoutes;
