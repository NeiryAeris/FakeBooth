import { Navbar } from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import BoxCategory from "./pages/BoxCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Booth" element={<BoxCategory category="Booth" />} />
          <Route
            path="/Categories"
            element={<BoxCategory category="Booth" />}
          />
          <Route path="/Product" element={<Product />}>
            <Route path=":ProductId" element={<Product />} />
          </Route>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
