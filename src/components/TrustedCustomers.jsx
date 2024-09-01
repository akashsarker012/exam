import React from 'react';
import BackgroundImage from '/BG.png';
import Container from './container';
import Heading from './utils/Heading';
import Paragraph from './utils/Paragraph';

export default function TrustedCustomers() {
  const data = [
    { heading: "720+", paragraph: "Over 500 businesses powered with us" },
    { heading: "4.9", paragraph: "Rating on Google Play and App Store" },
    { heading: "200+", paragraph: "Easily integrate with your favorite apps" },
  ];

  return (
    <div className='py-[140px]'>
      <Container>
        <div 
          className='flex flex-col lg:flex-row justify-center items-center py-10 w-full'
          style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        >
          <div className='w-full lg:w-1/2 flex justify-center'>
            <img src="/Illustration.png" alt="Illustration" className='w-full max-w-md' />
          </div>
          <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-8 lg:mt-0'>
            <Heading text="Trusted by 35,000+ happy customers." className='text-white text-center lg:text-left' />
            <div className='flex flex-col lg:flex-row gap-8 items-center mt-4'>
              {data.map((item, index) => (
                <div key={index} className='flex flex-col items-center lg:items-start w-full lg:w-auto'>
                  <Heading text={item.heading} className='text-white text-2xl lg:text-3xl' />
                  <Paragraph text={item.paragraph} className='text-white text-center lg:text-left mt-2' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
