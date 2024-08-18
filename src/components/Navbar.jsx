import React from 'react'
import Container from './container'
import Button from './Button'

export default function Navbar() {
  return (

<div className=" text-gray-100 text-[15px]">
  <div className="relative lg:min-h-screen 2xl:min-h-[730px] before:absolute before:inset-0 before:w-full before:opacity-60" style={{backgroundImage: 'url(https://i.ibb.co/0yxqj6b/banner.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
   <Container>
   <header className="py-4 px-4  sm:px-10 z-50 min-h-[70px] relative">
      <div className="lg:flex lg:items-center gap-x-2 relative">
        <div className="flex items-center shrink-0">
          <img src="/Logo.png" alt="logo"  />
         
        </div>
          <div className="lg:flex items-center justify-center w-full gap-6  z-50">
            <ul className="lg:flex gap-x-6 max-lg:space-y-3">
              
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href="javascript:void(0)" className="hover:text-blue-600 text-blue-600 block transition-all">Home</a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3"><a href="javascript:void(0)" className="hover:text-blue-600 block transition-all">Features</a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3"><a href="javascript:void(0)" className="hover:text-blue-600 block transition-all">Service</a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3"><a href="javascript:void(0)" className="hover:text-blue-600 block transition-all">Pages</a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3"><a href="javascript:void(0)" className="hover:text-blue-600 block transition-all">Blog</a>
              </li>
            </ul>
            
          </div>
          <div className='flex gap-x-4'>
            <Button text="Login" />
            <Button className={"bg-secondary text-black"} text="Register" />
          </div>
      </div>
    </header>
   </Container>
    <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
      <h1 className="lg:text-7xl md:text-6xl text-4xl font-semibold mb-6 md:!leading-[80px]">Get your work done with Management Tool</h1>
      <p className="text-base text-gray-400">The world's first project management platform that connects everything</p>
    
      <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">
      
      </div>
    </div>
  </div>
</div>


  )
}
