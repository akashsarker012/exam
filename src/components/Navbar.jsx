import React from 'react';
import Container from './container';
import Button from './utils/Button';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Service', href: '#' },
  { label: 'Pages', href: '#' },
  { label: 'Blog', href: '#' }
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="text-gray-100 text-[15px]">
      <div className="relative min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/0yxqj6b/banner.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  }}>
        <Container>
          <header className="py-4 px-4 sm:px-10 z-50 min-h-[70px] relative">
            <div className="lg:flex lg:items-center lg:justify-between gap-x-2 relative">
              {/* Logo and Hamburger Menu */}
              <div className="flex w-full lg:w-auto items-center justify-between">
                <img src="/Logo.png" alt="logo" />
                <div className="lg:hidden flex items-center">
                  {open ? (
                    <FiX onClick={() => setOpen(!open)} className="text-2xl cursor-pointer" />
                  ) : (
                    <FiMenu onClick={() => setOpen(!open)} className="text-2xl cursor-pointer" />
                  )}
                </div>
              </div>

              {/* Navigation Links */}
              <div className={`${open ? 'block' : 'hidden'} lg:block lg:flex items-center justify-center gap-6 z-50`}>
                <ul className="flex flex-col lg:flex-row gap-x-6 space-y-3 lg:space-y-0 lg:items-center">
                  {navLinks.map((link, index) => (
                    <li key={index} className="border-b lg:border-none lg:py-0 py-3 px-3">
                      <a href={link.href} className="hover:text-blue-600 text-blue-600 block transition-all">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className={`${open ? 'block' : 'hidden'} lg:flex lg:w-auto w-full gap-x-4 mt-3 lg:mt-0`}>
                <Button text="Login" />
                <Button className="bg-primary text-[#2C2643]" text="Register" />
              </div>
            </div>
          </header>
        </Container>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
          <h1 className="lg:text-7xl md:text-6xl text-4xl font-semibold mb-6 md:!leading-[80px]">
            Get your work done with Management Tool
          </h1>
          <p className="text-base text-gray-400 max-w-[467px]  mx-auto">
            The world's first project management platform that connects everything
          </p>
          
          <div className="flex mx-auto mt-8 bg-white items-center border rounded-full overflow-hidden p-1 max-w-sm">
      <input 
        type="email" 
        placeholder="Your business email" 
        className="px-4 py-2 flex-grow text-gray-600 focus:outline-none"
      />
     
      <button className="bg-[#50F2F2] hover:bg-[#48e2e2] text-black font-semibold px-6 py-2 rounded-full">
        Try for free
      </button>
    </div>
        </div>

      </div>
    </div>
  );
}
