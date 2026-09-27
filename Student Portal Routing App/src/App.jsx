import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import StudentPortal from "./pages/StudentPortal.jsx";
import Home from "./pages/Home.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">

        <h2 className="logo">Student Portal</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/student">Student</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/student" element={<StudentPortal />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;