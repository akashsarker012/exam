import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Pricing/>
     <Footer/>
    </>
  )
}

export default App
