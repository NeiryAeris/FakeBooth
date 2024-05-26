import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import ArtworkDisplay from '../Components/ArtWorkDisplay/ArtworkDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId} =useParams();
  const product= all_product.find((e)=> e.id===Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      {product.category == 'gallery'?<ArtworkDisplay product={product}/>:<ProductDisplay product={product} />}
      
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Product