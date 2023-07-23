import React from 'react'
import '../common/styles/styles.css'
import Button from './Button'
import Underline from './Underline'

function Contact() {
  return (
    <div className='contact'>
      <h1 className='text-4xl font-semibold font-Merriweather'>Contact Us</h1>
      
      <div className='m-8 sm:m-8'>
        <h1 className='text-lg font-semibold py-1 sm:text-2xl'>My Name is  <span className='border-b border-custom-purple py-1'><input class="appearance-none bg-transparent border-none text-white-700 py-1 px-2 leading-tight focus:outline-non" type="text" placeholder="Your Name" aria-label="Full name"></input></span>.</h1>
        <h1 className='text-lg font-semibold py-1 sm:text-2xl'>I am <span className='border-b border-custom-purple py-1'><input class="appearance-none bg-transparent border-none text-white-700 py-1 px-2 leading-tight focus:outline-non" type="text" placeholder="Text" aria-label="Full name"></input></span>.</h1>
        <h1 className='text-lg font-semibold py-1 sm:text-2xl'>I am interested in  <span className='border-b border-custom-purple py-1'><input class="appearance-none bg-transparent border-none text-white-700 py-1 px-2 leading-tight focus:outline-non" type="text" placeholder="Text" aria-label="Full name"></input></span>.</h1>
        <h1 className='text-lg font-semibold py-1 sm:text-2xl'>I'd like to meet with your team, you can contact me at </h1>
        <div className='contact-footer font-semibold py-1 text-lg sm:text-2xl'><span className='border-b border-custom-purple py-1 text-lg font-semibold py-1 sm:text-2xl'><input class="appearance-none bg-transparent border-none text-white-700 py-1 px-2 leading-tight focus:outline-non" type="text" placeholder="Your Email" aria-label="Full name"></input></span><h1 className='text-lg font-semibold py-1 sm:text-2xl ml-1 mr-1 py-1'>Or</h1><span className='text-lg font-semibold py-1 sm:text-2xl border-b border-custom-purple py-1'><input class="appearance-none bg-transparent border-none text-white-700 py-1 px-2 leading-tight focus:outline-non" type="text" placeholder="Phone Number" aria-label="Full name"></input></span>.</div>
        <Button />
      </div>
      
    </div>
  )
}

export default Contact