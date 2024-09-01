import React from 'react'
import Container from './container'
import Heading from './utils/Heading'
import Button from './utils/Button'
import Paragraph from './utils/Paragraph'

export default function FavoriteApps() {
  return (
    <div className='bg-[#F4FAFA]'>
      <Container>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-1/2 flex flex-col items-center'>
            <p className='text-[#FF7364] font-medium text-xl'>Integrations</p>
            <Heading className={"text-center"} text={"Easily integrate with your favorite apps"} />
            <Paragraph className='pt-5 pb-10 md:w-[530px]' text={"App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts."} />
            <Button className='bg-secondary w-fit sm:mx-auto' text={"Get Started"} />
          </div>
          <div className='md:w-1/2 mt-10 md:mt-0'>
            <img src="/brand.png" alt="Brand Logo" className='w-full h-auto' />
          </div>
        </div>
      </Container>
    </div>
  )
}
