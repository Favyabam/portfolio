import React, { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className='bg-white p-4 font-benchnine'>
      <div className='flex items-center justify-between'>
        {/* Home Logo */}
        <div className='text-black cursor-pointer pl-3 text-[24px]'>
          <a href="/">Home</a>
        </div>

        {/* Center container: desktop menu will be centered here */}
        <div className='flex-1 flex justify-center'>
          <ul className='hidden md:flex space-x-30 text-black text-2xl'>
            <li><a href="/works" className='hover:text-black'>Works</a></li>
            <li><a href="/about" className='hover:text-black'>About</a></li>
            <li><a href="/contact" className='hover:text-black'>Contact</a></li>
          </ul>
        </div>

        {/* Hamburger button (mobile) placed on the right */}
        <div className='md:hidden'>
          <button className="text-black" onClick={() => setIsOpen(!isOpen)}>
            {/* Simple hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              {isOpen ? ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> 
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-4 space-y-2 md:hidden text-black font-semibold">
          <li><a href="/works" className="block hover:text-black">Works</a></li>
          <li><a href="/about" className="block hover:text-black">About</a></li>
          <li><a href="/contact" className="block hover:text-black">Contact</a></li>
        </ul>
      )}

    </nav>
  )
};

export default Navbar;