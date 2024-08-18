import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Navbar from './components/Navbar'
import InfoPart from './components/InfoPart'
import FavoriteApps from './components/FavoriteApps'
import FeatureSection from './components/FeatureSection';
import Services from './components/Services'

function App() {

  return (
    <>
    <Navbar/>
    <InfoPart/>
    <FeatureSection/>
    <FavoriteApps/>
    <Services/>
    <Pricing/>
     <Footer/>
    </>
  )
}

export default App
