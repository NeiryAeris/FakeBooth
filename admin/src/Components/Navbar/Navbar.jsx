import React from "react";
import "./Navbar.css";
import logo from "../../assets/cat.jpg";
import NavProfile from "../../assets/nav-profile.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} className="nav-logo" alt="" />
      <img src={NavProfile} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
