import { useState } from "react";
import React from "react";
import img1 from "/home_img1.jpg";
import img2 from "/home_img2.jpg";
import img3 from "/home_img3.jpg";
import img4 from "/home_img4.jpg";
import man from "/man.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container mx-auto">
      <section className="flex flex-col lg:flex-row justify-around items-center pt-[50px]">
        <div className="flex flex-col items-center lg:items-start">
          <div className=" flex flex-col items-center lg:items-start">
            <h1 className="text-[60px] font-extralight text-[#BDBDBD]">
              PROJECT
            </h1>
            <h1 className="text-[50px] font-bold text-[#333333]">Lorum</h1>
          </div>
          <div className="flex flex-row gap-[10px] mt-[40px] lg:mt-[70px]">
            <button className="px-[10px] py-[5px] bg-white hover:bg-[#F2F2F2] duration-300 border-[1px] border-[#BDBDBD] cursor-pointer">
              ←
            </button>
            <button className="px-[10px] py-[5px] bg-white hover:bg-[#F2F2F2] duration-300 border-[1px] border-[#BDBDBD] cursor-pointer">
              →
            </button>
          </div>
          <h1 className="text-[#BDBDBD] text-[20px] mt-[30px]">01/02</h1>
        </div>
        <img
          className="mt-[50px] w-[470px] h-[429px] md:w-[670px] lg:h-[629px] lg:mt-[0px]"
          src={img1}
          alt="home"
        />
      </section>
      <section>
        <div className="flex flex-col px-[50px] lg:flex-row justify-around items-center py-[50px] lg:w-[1100px] bg-[#FBFBFB] mt-[100px]">
          <div className="flex flex-row gap-[20px]">
            <div className="flex flex-col lg:gap-[20px]">
              <img className="lg:w-[200px]" src={img2} alt="window" />
              <img className="lg:w-[200px]" src={img4} alt="flat" />
            </div>
            <img className="lg:w-[200px]" src={img3} alt="window" />
          </div>  
          <div className="lg:w-[450px] flex flex-col items-center">
            <h1 className="text-[50px] text-[#BDBDBD] font-extralight">About</h1>
            <p className="font-sans mt-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="px-[30px] py-[15px] bg-white hover:bg-[#F2F2F2] duration-300 cursor-pointer mt-[15px]">READ MORE →</button>
          </div>
        </div>
        <div className="px-[40px] lg:px-[0px] py-[40px]">
          <h1 className="text-[30px] lg:text-[50px] text-[#BDBDBD]">Main Focus/Mission Statement</h1>
          <div className="flex flex-col lg:flex-row items-center gap-[100px]">
            <div className="flex flex-col lg:flex-row items-center font-sans gap-[10px]">
              <h1 className="text-[200px] text-gray-200">1</h1>
              <p className="lg:w-[400px] text-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center font-sans gap-[10px]">
              <h1 className="text-[200px] text-gray-200">2</h1>
              <p className="lg:w-[450px] text-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-row items-center justify-around pb-[50px]">
        <div className="flex flex-col items-center gap-[30px] lg:items-start">
          <h1 className="text-[40px] text-[#BDBDBD]">Contact Us</h1>
          <input className="bg-[#F3F3F3] py-[10px] px-[20px] lg:w-[400px] outline-none" type="text" placeholder="Name"/>
          <input className="bg-[#F3F3F3] py-[10px] px-[20px] lg:w-[400px] outline-none" type="text" placeholder="Phone Number"/>
          <input className="bg-[#F3F3F3] py-[10px] px-[20px] lg:w-[400px] outline-none" type="text" placeholder="E-mail"/>
          <input className="bg-[#F3F3F3] py-[10px] px-[20px] lg:w-[400px] outline-none" type="text" placeholder="Interested In"/>
          <input className="bg-[#F3F3F3] py-[10px] px-[20px] lg:w-[400px] outline-none" type="text" placeholder="Message"/>
          <button className="bg-[#333333] text-white py-[10px] cursor-pointer px-[20px] w-[200px]" type="submit" >Send Email →</button>
        </div>
        <img className="w-[600px] hidden lg:flex" src={man} alt="man" />
      </section>
    </main>
  );
}

export default App;
