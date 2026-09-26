import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>

      <BrowserRouter>

        <nav
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75px",
            borderBottom: "1px solid #ddd",
            color:"white",
            backgroundColor:"black"
          }}
        >

          {/* Application Name */}
          <h1
            style={{
              position: "absolute",
              left: "25px",
              margin: "0"
            }}
          >
            My Application
          </h1>

          {/* Navigation Links */}
          <div
            style={{
              display: "flex",
              gap: "25px",
              color:"white",
              textDecoration:"none"
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;