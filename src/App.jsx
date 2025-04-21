import { useState } from 'react'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "./Layout/Layout"
import Home from "./Pages/Home/Home"
import Gallery from "./Pages/Gallery/Gallery"
import Projects from "./Pages/Projects/Projects"
import Certificatoins from "./Pages/Certifications/Certifications"
import Contacts from "./Pages/Contacts/Contacts"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Layout>
           <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/gallery' element={<Gallery/>} />
             <Route path='/projects' element={<Projects/>} />
             <Route path='/certifications' element={<Certificatoins/>} />
             <Route path='/contacts' element={<Contacts/>} />
           </Routes>
        </Layout>
    </div>
  )
}

export default App
