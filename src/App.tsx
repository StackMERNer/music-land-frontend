import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="bg-dark-solid min-h-screen">
      <Header />
      <div className="container mx-auto p-5">
        <Hero />
      </div>
    </div>
  );
}

export default App;
