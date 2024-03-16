import { Route, Routes } from "react-router-dom";
import Cart from "../../pages/Instruments/Cart";
import InstrumentDetails from "../../pages/Instruments/InstrumentDetails";
import Instruments from "../../pages/Instruments/Instruments";
import Orders from "../../pages/Orders/Orders";
import SignIn from "../../pages/SignIn/SignIn";
import Home from "../Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instruments" element={<Instruments />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/instruments/:id" element={<InstrumentDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/orders/:id"
        element={
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
