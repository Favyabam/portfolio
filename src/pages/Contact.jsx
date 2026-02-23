import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  {/* Whatsapp */}
  const WhatsAppButton = () => {
    let message = "Hello I saw your Portfolio";

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "2349016517432";
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }

  {/* X (Twitter) */}
  const XButton = () => {

    const username = "@FavourAbam";
    const url = `https://x.com/${username}`;
    window.open(url, "_blank");
  }

  return (

    <div className='min-h-screen flex items-center px-6 md:px-80'>
      <div className='mx-auto w-full max-w-6xl transform -translate-y-30 md:-translate-y-25'>
        <div className='text-center md:text-left'>
          <h1 className='font-merriweather text-4xl md:text-6xl mb-8'>Contact Me</h1>
          <p className='text-gray-700 font-edu text-lg mb-6'>Heyyyy! You can reach me on the following platforms:</p>

          <div className='flex flex-row md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-lg'>
            <img src={assets.Whatsapp} alt="WhatsApp" onClick={WhatsAppButton} className='w-24 h-24 border border-gray-300 hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer' />
            <img src={assets.X} alt="X" onClick={XButton} className='w-24 h-24 border border-gray-300 hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer' />
            <img src={assets.email} alt="Email" className='w-24 h-24 border border-gray-300 hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer' />
          </div>

          <br/>

          <ul className='space-y-4 text-lg font-merriweather'>
            <li><strong>Email:</strong> Favourabam82@gmail.com</li>
            <li><strong>WhatsApp:</strong> <button onClick={WhatsAppButton} className='cursor-pointer bg-green-500 text-white px-4 py-2 font-merriweather rounded-2xl hover:bg-green-600'>Text on WhatsApp</button></li>
            <li><strong>Phone Number:</strong> +234 901 651 7432</li>
            <li><strong>X:</strong> @favourabam </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
