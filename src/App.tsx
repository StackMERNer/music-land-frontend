import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="bg-dark-solid min-h-screen">
      <ToastContainer />
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
