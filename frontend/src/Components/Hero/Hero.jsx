import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import catpng from '../Assets/catpng.png'

const Hero = () => {
  return (
    <div
      className="
        min-h-screen
        bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)]
        flex
        max-[500px]:flex-col
      "
    >
      {/* LEFT */}
      <div
        className="
          flex-1 flex flex-col justify-center gap-5 leading-[1.1]
          pl-[180px]
          max-[1200px]:pl-[100px]
          max-[1024px]:pl-20
          max-[800px]:pl-[30px]
        "
      >
        <h2
          className="
            text-[#fce5cd] font-semibold
            text-[26px]
            max-[1200px]:text-[22px]
            max-[1024px]:text-[20px]
            max-[800px]:text-[16px]
            max-[500px]:text-[18px]
          "
        >
          WELLCOME TO LITTLEBOX
        </h2>

        <div>
          <div className="flex items-center gap-5">
            <p
              className="
                text-[#fce5cd] font-bold
                text-[100px]
                max-[1200px]:text-[60px]
                max-[1024px]:text-[50px]
                max-[800px]:text-[40px]
                max-[500px]:text-[50px]
              "
            >
              Here
            </p>
            <img
              src={hand_icon}
              alt=""
              className="
                w-[105px]
                max-[1200px]:w-[80px]
                max-[1024px]:w-[65px]
                max-[800px]:w-[50px]
                max-[500px]:w-[55px]
              "
            />
          </div>

          <p
            className="
              text-[#fce5cd] font-bold
              text-[100px]
              max-[1200px]:text-[60px]
              max-[1024px]:text-[50px]
              max-[800px]:text-[40px]
              max-[500px]:text-[50px]
            "
          >
            We Have Some
          </p>
          <p
            className="
              text-[#fce5cd] font-bold
              text-[100px]
              max-[1200px]:text-[60px]
              max-[1024px]:text-[50px]
              max-[800px]:text-[40px]
              max-[500px]:text-[50px]
            "
          >
            Good Stuff For Everyone
          </p>
        </div>

        {/* If you want the button back, just uncomment */}
        <button
          className="
            flex items-center justify-center gap-[15px]
            w-[310px] h-[70px] rounded-[75px] mt-[30px]
            bg-[#ff4141] text-white font-medium text-[22px]
            max-[1200px]:gap-[10px] max-[1200px]:w-[250px] max-[1200px]:h-[60px] max-[1200px]:text-[18px] max-[1200px]:mt-[20px]
            max-[1024px]:w-[220px] max-[1024px]:h-[50px] max-[1024px]:text-[16px]
            max-[800px]:w-[175px] max-[800px]:h-[40px] max-[800px]:text-[13px]
            max-[500px]:w-[200px] max-[500px]:h-[45px] max-[500px]:text-[14px]
          "
        >
          <span className='bg-transparent'>Latest Collection</span>
          <img src={arrow_icon} alt="" className="w-5 h-5 bg-transparent" />
        </button>
      </div>

      {/* RIGHT */}
      <div
        className="
          flex-1 flex items-center justify-center
          max-[500px]:hidden
        "
      >
        <img
          src={catpng}
          alt=""
          className="
            w-auto
            max-w-full
            max-[1200px]:w-[500px]
            max-[1024px]:w-[400px]
            max-[800px]:w-[300px]
          "
        />
      </div>
    </div>
  )
}

export default Hero
