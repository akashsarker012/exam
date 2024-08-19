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
import Talking from './components/Talking'
import TrustedCustomers from './components/TrustedCustomers'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
    <Navbar/>
    <InfoPart/>
    <FeatureSection/>
    <FavoriteApps/>
    <Services/>
    <TrustedCustomers/>
    <Pricing/>
    <Talking/>
<ContactUs/>
     <Footer/>
    </>
  )
}

export default App
