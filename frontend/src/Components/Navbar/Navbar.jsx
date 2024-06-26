import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/cat.jpg";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "./arrow.png";
import UserMenu from "../UserMenu/UserMenu";
// import bookmark from "./bookmark.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  // const { getTotalCartItems } = useContext(ShopContext);
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      // Perform search action here
      console.log("Search value:", event.target.value);
    }
  };
  return (
    <div className="navbar">
      <div
        className="nav-logo"
        onClick={() => {
          setMenu("home");
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#96969a", display: "flex", gap: "5px" }}>
          <img src={logo} alt="" />
          <p>LittleBox</p>
        </Link>
        {/* <img src={logo} alt="" />
            <p>LittleBox</p> */}
      </div>
      <img onClick={dropdown_toggle} src={nav_dropdown} alt="" className="nav-dropdown" />
      <div className="search">
        <input type="text" onKeyPress={handleSearchKeyPress} placeholder="Type something" />
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#96969a" }}>
            Home
          </Link>{" "}
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("booths");
          }}
        >
          <Link to="/booths" style={{ textDecoration: "none", color: "#96969a" }}>
            Booth
          </Link>{" "}
          {menu === "booths" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Gallery");
          }}
        >
          <Link to="/Gallery" style={{ textDecoration: "none", color: "#96969a" }}>
            Gallery
          </Link>{" "}
          {menu === "Gallery" ? <hr /> : <></>}
        </li>
        {/* <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Lounge</Link> {menu==="kids"?<hr/>:<></>}</li> */}
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <div className="nav-user-controll">
            <UserMenu />
          </div>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="login-button">Login</button>
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
