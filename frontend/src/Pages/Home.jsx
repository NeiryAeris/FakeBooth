import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/Newsletter/NewsLetter'
const Home = () => {
  return (
    <div className=''>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollections/>
        {/* <NewsLetter/> */}
    </div>
  )
}

export default Home