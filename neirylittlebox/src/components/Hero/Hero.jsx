import React from 'react'
import './Hero.css'
import Banner from '../Assets/banner_home.jpg'

const Hero = () => {
  return (
    <div>
      <img src={Banner} alt="" className="banner" />
    </div>
  )
}

export default Hero
