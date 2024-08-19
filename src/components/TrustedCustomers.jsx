import React from 'react'
import BackgroundImage from '/BG.png'
import Container from './container'
import Heading from './utils/Heading'
import Paragraph from './utils/paragraph'

export default function TrustedCustomers() {
    const data = [
        { heading: "720+", paragraph: "Over 500 businesses powered with us" },
        { heading: "4.9", paragraph: "Rating on Google Play and App Store" },
        { heading: "200+", paragraph: "Easily integrate with your favorite apps" },
      ];
  return (
    <div className='py-[140px]'>
        <Container>
        <div className='flex justify-between items-center py-10 w-full' style={{backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

        <div className='w-1/2'>
            <img src="/Illustration.png" alt="" srcset="" />
        </div>
        <div className='w-1/2'>
    <Heading text={"Trusted by 35,000+ happy customers."} className='text-white'/>
    <div className='flex gap-4 items-center mt-4'>
      {data.map((item, index) => (
        <div key={index} className='flex flex-col w-[176px]'>
          <Heading text={item.heading} className='text-white' />
          <Paragraph text={item.paragraph} className='text-white' />
        </div>
      ))}
    </div>
  </div>
        </div>

        </Container>
    </div>
  )
}
