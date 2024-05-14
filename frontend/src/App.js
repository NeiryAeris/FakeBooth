
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Shop from './Pages/Shop';
import ShopCatergory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import gallery_banner from './Components/Assets/banner_gallery.jpg'
import booth_banner from './Components/Assets/banner_booth.jpg'
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/' element ={<Home/>}/>
        <Route  path='/booths' element ={<ShopCatergory banner={booth_banner} category="booth"/>}/>
        {/* <Route  path='/Gallery' element ={<ShopCatergory banner={gallery_banner} category="gallery"/>}/> */}
        <Route  path='/Gallery' element ={<Gallery banner={gallery_banner} category="gallery"/>}/>
        {/* <Route  path='/kids' element ={<ShopCatergory banner={kid_banner} category="kid"/>}/> */}
        <Route  path='/product/:productId' element ={<Product/>}/>
        <Route  path=':productId' element ={<Product/>}/>
        <Route/>
        <Route  path='/Cart' element ={<Cart/>}/>
        <Route  path='/login' element ={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;