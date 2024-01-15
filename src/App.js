import Test from "./pages/test";
import VersePage from "./pages/versePage";

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/navbar.js";

// look at rachelreact for darkmode reference

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/tao/" element={<Test />} />
        <Route path="/tao/:verseNumber" element={<VersePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
