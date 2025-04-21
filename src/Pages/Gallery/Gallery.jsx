import { useState } from "react"
import React from "react"
import gallery1 from "/gallery1.jpg"
import gallery2 from "/gallery2.jpg"
import gallery3 from "/gallery3.jpg"
import gallery4 from "/gallery4.jpg"
import gallery5 from "/gallery5.jpg"
import gallery6 from "/gallery6.jpg"
import gallery7 from "/gallery7.jpg"
import gallery8 from "/gallery8.jpg"
import gallery9 from "/gallery9.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container mx-auto px-[20px]">
      <div className="flex flex-col pt-[50px]">
        <h1 className="text-[50px] h-[50px] font-extralight text-[#BDBDBD]">Photo</h1>
        <h1 className="text-[60px] h-[90px]">Gallery</h1>
      </div>
        <div className="flex flex-col items-center gap-[10px] py-[50px]">
          <div className="flex flex-col lg:flex-row items-center gap-[10px]">
            <img className="w-[200px] h-[250px] hover:scale-105 duration-300 cursor-pointer" src={gallery1} alt="flats" />
            <img className="w-[200px] h-[250px] hover:scale-105 duration-300 cursor-pointer" src={gallery2} alt="flats" />
            <img className="w-[200px] h-[250px] hover:scale-105 duration-300 cursor-pointer" src={gallery3} alt="flats" />
            <img className="w-[200px] h-[250px] hover:scale-105 duration-300 cursor-pointer" src={gallery4} alt="flats" />
            <img className="w-[200px] h-[250px] hover:scale-105 duration-300 cursor-pointer" src={gallery5} alt="flats" />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-[10px]">
            <img className="w-[200px] h-[250px] hover:scale-105 duration-300 cursor-pointer" src={gallery6} alt="flats" />
            <img className="w-[200px] h-[250px] hover:scale-105 duration-300 cursor-pointer" src={gallery7} alt="flats" />
            <img className="w-[200px] h-[250px] hover:scale-105 duration-300 cursor-pointer" src={gallery8} alt="flats" />
            <img className="w-[200px] h-[250px] hover:scale-105 duration-300 cursor-pointer" src={gallery9} alt="flats" />
            <img className="w-[200px] h-[250px] hover:scale-105 duration-300 cursor-pointer" src={gallery1} alt="flats" />
          </div>
        </div>
    </main>
  )
}

export default App