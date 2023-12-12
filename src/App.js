import Test from "./pages/test";
import Test1 from "./pages/test1";
import Test2 from "./pages/test2";
import Test3 from "./pages/test3";
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
        <Route path="/tao/1" element={<Test1 />} />
        <Route path="/tao/2" element={<Test2 />} />
        <Route path="/tao/3" element={<Test3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
