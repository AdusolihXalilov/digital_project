import { useState } from "react";
import React from "react";
import home1 from "/homedesign1.png";
import home2 from "/homedesign2.png";
import home3 from "/homedesign3.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container mx-auto px-[20px]">
      <div className="flex flex-col pt-[50px]">
        <h1 className="text-[50px] h-[50px] font-extralight text-[#BDBDBD]">
          Our
        </h1>
        <h1 className="text-[60px] h-[90px]">Projects</h1>
      </div>
      <br /><br />
      <hr className="border-[#F2F2F2]" />
      <br /><br />
      <div className="flex flex-col lg:flex-row">
        <img className="lg:w-[600px] lg:h-[400px]" src={home1} alt="home" />
        <div className="bg-[#FBFBFB] py-[20px] px-[30px]">
          <h1 className="text-[40px] font-extralight text-[#BDBDBD]">
            Sample Project
          </h1>
          <p className="lg:w-[400px] mt-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="bg-white py-[10px] px-[20px] mt-[20px] hover:bg-[#F9F9F9] duration-300 cursor-pointer">VIEW MORE →</button>
        </div>
      </div>
      <br /><br />
      <div className="flex flex-col lg:flex-row">
        <img className="lg:w-[600px] lg:h-[400px]" src={home2} alt="home" />
        <div className="bg-[#FBFBFB] py-[20px] px-[30px]">
          <h1 className="text-[40px] font-extralight text-[#BDBDBD]">
            Sample Project 2
          </h1>
          <p className="lg:w-[400px] mt-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="bg-white py-[10px] px-[20px] mt-[20px] hover:bg-[#F9F9F9] duration-300 cursor-pointer">VIEW MORE →</button>
        </div>
      </div>
      <br /><br />
      <div className="flex flex-col lg:flex-row">
        <img className="lg:w-[600px] lg:h-[400px]" src={home3} alt="home" />
        <div className="bg-[#FBFBFB] py-[20px] px-[30px]">
          <h1 className="text-[35px] font-extralight text-[#BDBDBD]">
            Sample Project 3
          </h1>
          <p className="lg:w-[400px] mt-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="bg-white py-[10px] px-[20px] mt-[20px] hover:bg-[#F9F9F9] duration-300 cursor-pointer">VIEW MORE →</button>
        </div>
      </div>
      <br /><br />
    </main>
  );
}

export default App;
