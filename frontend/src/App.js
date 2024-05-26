import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ShopCatergory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import gallery_banner from './Components/Assets/banner_gallery.jpg'
import booth_banner from './Components/Assets/banner_booth.jpg'
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import Admin from './Pages/Admin/Admin.jsx'


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/' element ={<Home/>}/>
        <Route  path='/booths' element ={<ShopCatergory banner={booth_banner} category="booth"/>}/>
        <Route  path='/Gallery' element ={<Gallery banner={gallery_banner} category="gallery"/>}/>

        <Route  path='/product/:productId' element ={<Product/>}/>
        {/* <Route  path=':productId' element ={<Product/>}/> */}

        <Route  path='/Cart' element ={<Cart/>}/>
        <Route  path='/login' element ={<LoginSignup/>}/>

        <Route  path='/profile' element ={<Admin/>}/>
        {/* <Route  path=':userId' element ={<Admin/>}/> */}
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
