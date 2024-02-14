import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="bg-dark-solid min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
