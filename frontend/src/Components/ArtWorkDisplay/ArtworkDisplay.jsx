import "./ArtworkDisplay.css";
import React, { useCallback, useContext } from "react";
import star_icon from "./star_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ArtworkDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="artworkdisplay">
      <div className="artworkdisplay-left">
        {/* <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div> */}
        <div className="artworkdisplay-img">
          <img className="artworkdisplay-main-img" src={product.image} alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="artworkdisplay-right">
        <h1>{product.name}</h1>
        <div className="artworkdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        {/* <div className="artworkdisplay-right-prices">
          <div className="artworkdisplay-right-price-old">${product.old_price}</div>
          <div className="artworkdisplay-right-price-new">${product.new_price}</div>
        </div> */}
        <div className="artworkdisplay-right-descriptions">
          A type of garment worn over the upper body, typically extending from the neck to the waist or hips, and
          sleeves. It is designed to provide warmth and protection from cold weather while also offering style and
          fashion. Jackets come in various styles, lengths, and materials, making them versatile for different occasions
          and climates.
        </div>
        <div className="artworkdisplay-right-size">
          <h1>Do something?</h1>
          {/* <div className="artworkdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div> */}
          <div className="artworkdisplay-right-interaction">
            <button
              onClick={() => {
                addToCart(product.id);
              }}
            >
              Like
            </button>
            <button
              onClick={() => {
                addToCart(product.id);
              }}
            >
              Bookmark
            </button>
          </div>
          <p className="artworkdisplay-right-category">
            <span>Category : </span>
            {product.category}
          </p>
          <p className="artworkdisplay-right-category">
            <span>Tags :</span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDisplay;
