import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container mx-auto px-[20px] flex flex-col lg:flex-row items-center justify-around">
        <div>
            <div className="flex flex-col pt-[50px]">
                <h1 className="text-[50px] h-[50px] font-extralight text-[#BDBDBD]">
                Contact
                </h1>
                <h1 className="text-[60px] h-[90px]">Information</h1>
            </div>
            <br />
            <div>
                <h1 className="text-[20px] font-bold">Company Name</h1>
                <span className="text-[#333333]">
                1234 Sample Street Austin Texas 76401
                </span>
            </div>
            <br />
            <h1 className="font-bold">512.333.2222</h1>
            <br />
            <h1 className="text-[#333333] cursor-pointer">sampleemail@gmail.com</h1>
            <br />
            <br />
            <button className="py-[15px] px-[30px] bg-[#333333] text-white cursor-pointer mb-[100px]">
                Contact US
            </button>
        </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d436.758553160915!2d69.22859081932103!3d41.29577354686195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1745062906445!5m2!1sru!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="pb-[50px] lg:pt-[50px] lg:w-[600px] h-[450px]"
      ></iframe>
    </main>
  );
}

export default App;
