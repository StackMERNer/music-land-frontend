import { Route, Routes } from "react-router-dom";
import InstrumentDetails from "../../pages/Instruments/InstrumentDetails";
import Instruments from "../../pages/Instruments/Instruments";
import Home from "../Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instruments" element={<Instruments />} />
      <Route path="/instruments/:id" element={<InstrumentDetails />} />
    </Routes>
  );
};

export default AppRoutes;
