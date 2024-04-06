import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Choose from "./componets/Choose";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./componets/Contact";
import Frequently from "./componets/Frequently";
import Footer from "./componets/Footer";
import Subscribe from "./componets/Subscribe";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2500 });
  }, []);
  return (
    <div className="App">
      <Hero />
      <About/>
      <Choose/>
      <Contact/>
      <Frequently/>
      <Subscribe/>
      <Footer/>

    </div>
  );
}

export default App;
