import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Journey from "./pages/journey/Journey";
import Portfolios from "./pages/Portfolios/Portfolios";
import Home from "./pages/home/Home";
import "./style/global.scss";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/portfolios" element={<Portfolios />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
