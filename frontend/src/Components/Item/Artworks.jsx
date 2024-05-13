import React from "react";
import { Link } from 'react-router-dom'
import './Artworks.css'

const Artworks = (props) => {
  return (
    <div className="artwork">
      <Link to={`/product/${props.id}`} style={{textDecoration:'none',color: '#96969a'}}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt={props.name}/>
        <p>{props.name}</p>
        {/* <div className="artwork-prices">
          <div className="artwork-price-new">{props.new_price}</div>
          <div className="artwork-price-old">{props.old_price}</div>
        </div> */}
      </Link>
    </div>
  );
};

export default Artworks;
