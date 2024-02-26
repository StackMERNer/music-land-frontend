import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Instruments from "./pages/Instruments/Instruments";

function App() {
  return (
    <div className="bg-dark-solid min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instruments" element={<Instruments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
