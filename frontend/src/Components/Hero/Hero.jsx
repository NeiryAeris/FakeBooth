import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
// import hero_img from '../Assets/hero_image.png'
import catpng from '../Assets/catpng.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>WELLCOME TO LITTLEBOX</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>Here</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>We Have Some</p>
                <p>Good Stuff For Everyone</p>
            </div>
            {/* <div className="hero-latest-btn">
                <div>
                    Latest Collection
                </div>
                <img src={arrow_icon} alt="" />
            </div> */}
        </div>
        <div className='hero-right'>
            <img src={catpng} alt="" />
        </div>
    </div>
  )
}

export default Hero