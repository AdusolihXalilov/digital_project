import { useState } from "react"
import React from "react"
import certifacate from "/certifacate.webp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container mx-auto px-[30px]">
        <div className="flex flex-col pt-[50px]">
        <h1 className="text-[40px] lg:text-[50px] h-[50px] font-extralight text-[#BDBDBD]">
            Company
        </h1>
        <h1 className="text-[40px] lg:text-[60px] h-[90px]">Certifications</h1>
      </div>
      <img className="lg:w-[700px] lg:h-[500px]" src={certifacate} alt="certifacate" />
      <br /><br />
    </main>
  )
}

export default App