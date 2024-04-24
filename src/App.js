import Test from "./pages/test";
import Home from "./pages/home";
import VersePage from "./pages/versePage";
import About from "./pages/about";
import Contact from "./pages/contact";

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar.js";

// look at rachelreact for darkmode reference

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/tao/" element={<Home />} />
        <Route path="/tao/:verseNumber" element={<VersePage />} />
        <Route path="/tao/home" element={<Home />} />
        <Route path="/tao/about" element={<About />} />
        <Route path="/tao/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
