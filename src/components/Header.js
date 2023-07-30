import '../common/styles/styles.css'
import React, { useEffect, useRef, useState } from 'react';
import spotlight from '../assets/spotlight_gradient.png';
import { motion, useMotionValue, useSpring, useMotionValueEvent, useScroll } from 'framer-motion';

function Header() {
  const [height, setHeight]  = useState(0);
  const [mobile, setMobile] = useState(false);
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if(width<768){
      setMobile(true);
    }
    else{
      setMobile(false);
    }
  });
  
  return (
    <motion.div initial ={{y: -50}} animate = {{y:0}} transition={{duration:0.75, ease : "easeOut"}} >
    {/* { mobile ?(
      <div className="spotlight"> </div>
    ) : ( */}
      <div initial ={{opacity:-1}} animate={{opacity:1}}  style={{ width: `${85 - height}%`,top:'0%', left: '1%'}} className='absolute hidden md:block'>
      <svg
        style={{}}
        width="100%" height="100%" viewBox="0 0 1180 546" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_66_2863)">
          <path d="M399 478L17.5 -5.5L103.5 -18.5L1112 478L743 463.5L399 478Z" fill="url(#paint0_linear_66_2863)" />
        </g>
        <defs>
          <filter id="filter0_f_66_2863" x="-50.5" y="-86.5" width="1230.5" height="632.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="34" result="effect1_foregroundBlur_66_2863" />
          </filter>
          <linearGradient id="paint0_linear_66_2863" x1="755.5" y1="5.99999" x2="755.5" y2="478" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4A4A4A" />
            <stop offset="1" stop-color="#4A4A4A" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      {/* <img src={spotlight}></img> */}
    </div>
    {/* )} */}
    
    <div className="header ">
      <div className="flex-row text-center">
        <h1 className="text-7xl font-Rymaneco md:text-9xl md:mt-40">
          sustally

        </h1>  
        <sub className='text-xs font-Roboto ml-40 md:ml-80'>your impACT ally</sub>   
        <p className="mt-10 max-w-xs md:max-w-lg font-Roboto text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    </motion.div>

  )
}

export default Header