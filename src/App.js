import "./App.css";
import "./Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";
import News from "./components/News";
import Ecosystem from "./components/Ecosystem";
import Utility from "./components/Utility";
import Roadmap from "./components/Roadmap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <header className="bg-black ">
        <NavBar />
        <Hero />
      </header>
      <About />
      <Tokenomics />
      <Utility />
      <Ecosystem />
      <Roadmap />
      <News />
      <Footer />
    </div>
  );
}

export default App;
