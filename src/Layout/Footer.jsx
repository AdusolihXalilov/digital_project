import { useState } from 'react'
import React from 'react'
import white_logo from "/white_logo.png"
import location from "/location.png"
import phone from "/phone_icon.png"
import email from "/email.png"
import facebook from "/facebook.png"
import twitter from "/twitter.png"
import linkedin from "/Linkedin.png"
import pininterest from "/pininterest.png"
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <footer className='bg-[#2C2C2C]'>
        <section className='container mx-auto py-[30px] flex flex-col lg:flex-row px-[40px] lg:items-center justify-around'>
          <img className='w-[100px] mb-[100px]' src={white_logo} alt="logo" />
          <div className='flex flex-col gap-[50px] items-start lg:flex-row lg:gap-[130px]'>
            <div className='flex flex-col text-white gap-[10px]'>
              <span className='font-bold'>Information</span>
          <Link to={"/"}>
            <h1 className='cursor-pointer'>
              Main
            </h1>
          </Link>
          <Link to={"/gallery"}>
            <h1 className='cursor-pointer'>
              Gallery
            </h1>
          </Link>
          <Link to={"/projects"}>
            <h1 className='cursor-pointer'>
              Projects
            </h1>
          </Link>
          <Link to={"/certifications"}>
            <h1 className='cursor-pointer'>
               Certifications
            </h1>
          </Link>
          <Link to={"/contacts"}>
            <h1 className='cursor-pointer'>
              Contacts
            </h1>
          </Link>
            </div>
            <div className='text-white'>
              <span className='font-bold'>Contacts</span>
              <span className='flex flex-row items-center gap-[10px] mt-[10px] w-[200px] cursor-pointer'><img src={location} alt="location" />1234 Sample Street Austin Texas 78704</span>
              <span className='flex flex-row items-center gap-[10px] mt-[10px] cursor-pointer'><img src={phone} alt="phone" />512.333.2222</span>
              <span className='flex flex-row items-center gap-[10px] mt-[10px] cursor-pointer'><img src={email} alt="e-mail" />sampleemail@gmail.com</span>
            </div>
            <div>
              <h1 className='text-white font-bold'>Social Media</h1>
              <div className='flex flex-row items-center gap-[10px] mt-[10px]'>
                <img className='cursor-pointer' src={facebook} alt="facebook" />
                <img className='cursor-pointer' src={twitter} alt="twitter" />
                <img className='cursor-pointer' src={linkedin} alt="linkedin" />
                <img className='cursor-pointer' src={pininterest} alt="pininterest" />
              </div>
            </div>
          </div>
        </section>
        <hr className='border-gray-300' />
        <h1 className='text-[#C8C8C8] flex justify-center py-[10px]'>© 2021 All Rights Reserved</h1>
    </footer>
  )
}

export default App