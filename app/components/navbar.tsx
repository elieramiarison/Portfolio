"use client"

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from "react-scroll"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const links = ['Accueil', 'A propos', 'Compétences', 'Projets', 'Contact']
  const lien = ['home', 'about', 'skils', 'project', 'contact']

  return (
    // <div className='fixed top-0 w-full z-50 backdrop-blur-md'>
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className='flex justify-between items-center h-16 max-w-5xl mx-auto px-4'>
        <div>
          <h1 className='text-[#c000b0] font-bold text-2xl'>ER</h1>
        </div>

        <ul className='hidden sm:flex gap-6'>
          {links.map((link, index) => (
            <Link key={index} to={lien[index]} smooth={true} duration={1000} offset={-70}>
              <li className="cursor-pointer relative group inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-[#c000b0] group-hover:to-[#4a0a9d] transition-all duration-100">
                  {link}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#c000b0] to-[#4a0a9d] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
            </Link>
          ))}
        </ul>

        <button
          className="sm:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`sm:hidden fixed top-16 left-0 w-full bg-[#000000d0] backdrop-blur-md p-6 h-screen z-40 
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <ul className="flex flex-col items-center gap-6 text-white text-lg">
          {links.map((link, index) => (
            <Link key={index} to={lien[index]} smooth={true} duration={1000} offset={-70}>
              <li
                key={index}
                className="hover:text-[#c000b0] transition"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
