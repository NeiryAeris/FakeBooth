import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";
const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <AddProduct />
      <ListProduct />
    </div>
  );
};

export default Admin;
