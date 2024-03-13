import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-dark-solid min-h-screen">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
