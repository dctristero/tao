import Test from "./pages/test";
import Home from "./pages/home";
import VersePage from "./pages/versePage";
import About from "./pages/about";

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar.js";

// look at rachelreact for darkmode reference

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/tao/" element={<Test />} />
        <Route path="/tao/:verseNumber" element={<VersePage />} />
        <Route path="/tao/home" element={<Home />} />
        <Route path="/tao/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
