


import {BrowserRouter ,Routes,Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App(){
  return(
    <BrowserRouter>
    <nav className="navbar">

    <h3>My Online Shopping Application</h3>
    <Link to="/">Home</Link>
    <Link to="/products">Prodcuts</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>

    </nav>
    <div id="link">
      <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/products" element={<Product/>}/>

      <Route path="/cart" element={<Cart/>}/>

      <Route path="/about" element={<About/>}/>

      <Route path="/contact" element={<Contact/>}/>




      </Routes>
      
      
      </div>    
    
    
    
    </BrowserRouter>


  )
}

export default App;