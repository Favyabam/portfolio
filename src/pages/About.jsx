import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  return (
    <div className='min-h-screen px-6 md:px-10 flex items-start'>
      <div className='max-w-6xl mx-auto w-full transform -translate-y-10 md:-translate-y-15'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>

          {/* Image - left on md+, centered on small */}
          <div className='flex justify-center md:justify-around'>
            <img src={assets.fav} alt='Favour portrait' loading='lazy' decoding='async' className='w-40 md:w-72 rounded-xl object-cover shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300'/>
          </div>

          {/* Text - right on md+, centered on small */}
          <div className='text-center md:text-left space-y-6 transform md:-translate-x-6'>
            <h1 className='font-merriweather text-4xl md:text-6xl'>I'm Favour</h1>
            <p className='text-stone-950 font-edu text-base md:text-lg leading-relaxed'>
              I'm a frontend developer who builds clean, user-friendly websites using modern tools like React and Tailwind CSS. I focus on turning ideas and designs into functional web experiences that look great on any device. I pay attention to both visual design and performance to deliver fast, accessible, and engaging interfaces that leave a lasting impression.
            </p>
            <div>
              <button onClick={() => navigate("/contact")} className='bg-black animate-bounce text-white px-5 py-3 font-merriweather rounded-2xl cursor-pointer'>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
