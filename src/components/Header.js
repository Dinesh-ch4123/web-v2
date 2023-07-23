import '../common/styles/styles.css'
import React, { useEffect, useRef, useState } from 'react';

import { motion, useMotionValue, useSpring, useMotionValueEvent, useScroll } from 'framer-motion';

function Header() {
  const [height, setHeight] = useState(0);
  return (
    <>
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ width: `${100 - height}%`,top:'0%', left: '0%' }} className='absolute'>
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
      </motion.div>
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="header ">
      <div className="flex-row text-center">
        <h1 className="text-8xl font-Rymaneco md:text-9xl pt-20">Sustally</h1>      
        <p className="mt-10 max-w-sm md:max-w-lg font-Roboto text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </motion.div>
    </>

  )
}

export default Header