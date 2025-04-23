import { useState } from 'react'
import React from 'react'
import logo from "/logo.png"
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='sticky top-0 bg-white z-50 p-4 shadow-md'>
      <section className='flex flex-row items-center justify-between font-sans container mx-auto px-4'>
      <Link to={"/"}>
        <img src={logo} alt="logo" className='lg:w-[70px]' />
      </Link>
        <div className='hidden md:flex flex-row items-center mr-[120px] gap-[30px]'>
          <Link to={"/"}>
            <h1 className='text-gray-900 border border-transparent hover:border-t-black hover:border-b-black duration-300 hover:text-black cursor-pointer'>
              MAIN
            </h1>
          </Link>
          <Link to={"/gallery"}>
            <h1 className='text-gray-900 border border-transparent hover:border-t-black hover:border-b-black duration-300 hover:text-black cursor-pointer'>
              GALLERY
            </h1>
          </Link>
          <Link to={"/projects"}>
            <h1 className='text-gray-900 border border-transparent hover:border-t-black hover:border-b-black duration-300 hover:text-black cursor-pointer'>
              PROJECTS
            </h1>
          </Link>
          <Link to={"/certifications"}>
            <h1 className='text-gray-900 border border-transparent hover:border-t-black hover:border-b-black duration-300 hover:text-black cursor-pointer'>
              CERTIFICATIONS
            </h1>
          </Link>
          <Link to={"/contacts"}>
            <h1 className='text-gray-900 border border-transparent hover:border-t-black hover:border-b-black duration-300 hover:text-black cursor-pointer'>
              CONTACTS
            </h1>
          </Link>
        </div>
        <div className='md:hidden'>
          <button className='cursor-pointer' onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </section>

      {isOpen && (
        <div className='md:hidden flex flex-col items-center mb-[50px] gap-4 py-4 bg-white shadow-lg'>
            <Link to={"/"}>
            <h1 className='text-gray-900 border border-transparent hover:border-t-black hover:border-b-black duration-300 hover:text-black cursor-pointer'>
              MAIN
            </h1>
          </Link>
          <Link to={"/gallery"}>
            <h1 className='text-gray-900 border border-transparent hover:border-t-black hover:border-b-black duration-300 hover:text-black cursor-pointer'>
              GALLERY
            </h1>
          </Link>
          <Link to={"/projects"}>
            <h1 className='text-gray-900 border border-transparent hover:border-t-black hover:border-b-black duration-300 hover:text-black cursor-pointer'>
              PROJECTS
            </h1>
          </Link>
          <Link to={"/certifications"}>
            <h1 className='text-gray-900 border border-transparent hover:border-t-black hover:border-b-black duration-300 hover:text-black cursor-pointer'>
              CERTIFICATIONS
            </h1>
          </Link>
          <Link to={"/contacts"}>
            <h1 className='text-gray-900 border border-transparent hover:border-t-black hover:border-b-black duration-300 hover:text-black cursor-pointer'>
              CONTACTS
            </h1>
          </Link>
        </div>
      )}
    </header>
  )
}

export default App
