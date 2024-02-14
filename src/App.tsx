import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="bg-dark-solid min-h-screen">
      <Header />
      <div className="container mx-auto p-5">
        <Hero />
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
