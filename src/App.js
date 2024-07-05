import Test from "./pages/test";
import Home from "./pages/home";
import VersePage from "./pages/versePage";
import About from "./pages/about";
import Contact from "./pages/contact";

import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar.js";

// look at rachelreact for darkmode reference

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:verseNumber" element={<VersePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
