import React, { useState } from "react";
import './Navbar.css';
import icon from '../Assets/icon.jpg';
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("Gallery")
    
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={icon} alt="" />
                <p>Little Box</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu('Gallery')}}>Gallery{menu === "Gallery"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu('Booth')}}>Booth{menu === "Booth"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu('Categories')}}>Categories{menu === "Categories"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export { Navbar };