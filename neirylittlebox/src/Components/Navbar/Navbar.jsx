import React, { useState } from "react";
import './Navbar.css';
import icon from '../Assets/icon.jpg';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu,setMenu] = useState("Gallery")
    
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={icon} alt="" />
                <p>Little Box</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu('Home')}}><Link style={{textDecoration: 'none',color:'white'}} to='/'>Home</Link>{menu === "Home"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu('Gallery')}}><Link style={{textDecoration: 'none',color:'white'}} to='/Gallery'>Gallery</Link>{menu === "Gallery"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu('Booth')}}><Link style={{textDecoration: 'none',color:'white'}} to='/Booth'>Booth</Link>{menu === "Booth"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu('Yard')}}><Link style={{textDecoration: 'none',color:'white'}} to='/Yard'>Yard</Link>{menu === "Yard"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/Login'><button>Login</button></Link>
                <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export { Navbar };