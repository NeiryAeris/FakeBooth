import React, { useContext } from "react";
import "./CSS/Gallery.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import artworks from "../Components/Item/Artworks";
import Artworks from "../Components/Item/Artworks";

const Gallery = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="gallery">
      <img className="gallery-banner" src={props.banner} alt="" />
      <div className="gallery-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="gallery-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="gallery-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Artworks
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                // new_price={item.new_price}
                // old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="gallery-loadmore">Explore more.</div>
    </div>
  );
};

export default Gallery;
