import Test from "./pages/test";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
