import { Navbar } from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory.jsx";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import booth_banner from "./components/Assets/banner_booth.jpg";
import gallery_banner from "./components/Assets/banner_gallery.jpg";
import yard_banner from './components/Assets/banner_yard.jpg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<ShopCategory banner={gallery_banner} category="men" />} />
          <Route path="/Booth" element={<ShopCategory banner={booth_banner} category="women" />} />
          <Route path="/Yard" element={<ShopCategory banner={yard_banner} category="kid" />}/>
          <Route path="/Product" element={<Product />}>
            <Route path=":ProductId" element={<Product />} />
          </Route>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
