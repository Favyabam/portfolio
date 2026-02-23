import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center px-6 md:px-10 font-edu text-center'>
      <div className='max-w-3xl space-y-6 transform -translate-y-6 md:-translate-y-12'>
        <h1 className='text-6xl md:text-8xl text-shadow-black'>Hi, I'm Favour.</h1>
        <h1 className='text-6xl md:text-8xl text-shadow-black'>FrontEnd Dev.</h1>

        <p className='text-black text-lg md:text-xl'>I am a skilled frontend Developer who loves turning ideas into visually engaging, responsive, and user-friendly websites.</p>

        <div>
          <button onClick={() => navigate("/contact")} className='bg-black animate-pulse text-white font-merriweather rounded-2xl px-6 py-3 cursor-pointer'>Get In Touch</button>
        </div>
      </div>
    </div>
  )
}

export default Home
