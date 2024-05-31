import React, { useState } from "react";
import "./Profile.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";
import ArtworkPanel from '../../Components/Lounge/ArtworkPanel'

const Profile = () => {
  const [selectedComponent, setSelectedComponent] = useState('lounge');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'addProduct':
        return <AddProduct />;
      case 'listProduct':
        return <ListProduct />;
      default:
        return <ArtworkPanel />;
    }
  };

  return (
    <div className="admin">
      <Sidebar onSelect={setSelectedComponent} />
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Profile;
