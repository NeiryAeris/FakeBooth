import React from "react";
import "./Offer.css";
// import exclusive_img from '../Assets/exclusive_image.png'
import sky from "../Assets/sky.jpg";
const Offer = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Hey~!</h1>
        <h1>Something Beside Artwork</h1>
        <p>Is waiting for you</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        {/* <div className="image-overlay"> */}
          <img src={sky} alt="" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Offer;
