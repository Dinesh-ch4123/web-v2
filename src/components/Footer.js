import React from 'react'
import '../common/styles/styles.css'
import darkLogo from '../assets/logowhite.png'
import lightLogo from '../assets/logoblack.png'

function Footer(isDarkMode) {
  return (
    <div className='footer'>
      <div className='lists'>
        <ul class="list-none p-5">
          <li className='text-custom-purple font-bold'>Company</li>
          <a href='#'><li>Privacy Policy</li></a>
          <a href='#'><li>Company</li></a>
          <a href='#'><li>Cookies</li></a>
          </ul>
          <ul class="list-none p-5">
          <li className='text-custom-purple font-bold'>Product</li>
          <a href='#'><li>Product wheel</li></a>
          <a href='#'><li>Pricing</li></a>
          </ul>
          <ul class="list-none p-5">
          <li className='text-custom-purple font-bold'>Industry Analysis</li>
          <a href='#'><li>Text</li></a>
          <a href='#'><li>Text</li></a>
          <a href='#'><li>Text</li></a>
          </ul>
      </div>
    </div>
  )
}

export default Footer