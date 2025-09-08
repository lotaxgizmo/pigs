import React, { useState } from 'react'
import piglogo from '../assets/piglogo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array of navigation links - easy to manage
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "TOKENOMICS", href: "/#tokenomics" },
    { name: "ARRESTED", href: "/arrested" },
    { name: "CONTACT", href: "/#contact" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex flex-row justify-between items-center mx-[5vw] pt-5 text-white relative'>
        <img src={piglogo} alt="" className='w-[15vw] lg:w-[7vw]' />
        
        {/* Desktop Navigation */}
        <div className="headerdeets hidden lg:flex gap-6">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:opacity-75 transition-opacity text-[3vw]">
                {link.name}
              </a>
            ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`z-30 rounded-xl absolute top-full  left-0 w-full bg-white bg-opacity-95 lg:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col py-4 px-[5vw] space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="hover:opacity-75 transition-opacity text-[10vw] py-2 text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Header