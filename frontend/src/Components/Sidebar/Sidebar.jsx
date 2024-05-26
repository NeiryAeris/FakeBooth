import React from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import add_product_icon from "./Product_Cart.svg";
import list_product_icon from "./Product_list_icon.svg";

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={() => onSelect('addProduct')}>
        <img src={add_product_icon} alt="" />
        <p>Add Product</p>
      </div>
      <div className="sidebar-item" onClick={() => onSelect('listProduct')}>
        <img src={list_product_icon} alt="" />
        <p>Product List</p>
      </div>
    </div>
  );
};

export default Sidebar;
