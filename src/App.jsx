import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Forums from "./pages/Forums";
import Help from "./pages/Help";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="App">
      </div>
    </>
  );
}

export default App;