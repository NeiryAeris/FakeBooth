
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatergory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/' element ={<Shop/>}/>
        <Route  path='/mens' element ={<ShopCatergory banner={men_banner} category="men"/>}/>
        <Route  path='/womens' element ={<ShopCatergory banner={women_banner} category="women"/>}/>
        <Route  path='/kids' element ={<ShopCatergory banner={kid_banner} category="kid"/>}/>
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
