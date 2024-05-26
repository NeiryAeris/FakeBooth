import React, { useContext, useEffect, useRef, useState } from "react";
import avatar from "../Assets/cat.jpg";
import "./UserMenu.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import bookmark from "./bookmark.png";
import cart_icon from "../Assets/cart_icon.png";

const UserMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { getTotalCartItems } = useContext(ShopContext);
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/");
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="user-control">
      <div className="user-menu" ref={menuRef}>
        <div className="user-menu-info" onClick={toggleDropDown}>
          <img src={avatar} className="avatar" />
          <p>user.name</p>
        </div>
        {isOpen && (
          <div className="user-menu-control">
            <Link to="" element={""}>
              Profile
            </Link>
            <Link to="" element={""}>
              Setting
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <div className="user-interaction-control">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <img src={bookmark} alt="" className="bookmark" />{" "}
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <img src={cart_icon} alt="" />{" "}
          </Link>
        </div>
        <div className="user-cart-count">{getTotalCartItems()}</div>
    </div>
  );
};

export default UserMenu;
