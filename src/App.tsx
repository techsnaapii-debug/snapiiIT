import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import "./App.css";
import Home from "./pages/home";
import Services from "./pages/services/services";
import Metaverse from "./pages/metaverse/metaverse";
import Ai from "./pages/ai-development/ai";
import Footer from "./components/footer";
import Mobile from "./pages/mobile-app/mobile";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/metaverse" element={<Metaverse />} />
        <Route path="/ai-development" element={<Ai />} />
        <Route path="/mobile-app" element={<Mobile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
 
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
