import React from 'react'
import Container from './container'
import Heading from './utils/Heading'
import Paragraph from './utils/paragraph'
import Button from './utils/Button'

export default function FavoriteApps() {
  return (
    <div className='bg-[#F4FAFA]'>
        <Container>
           <div className='flex items-center justify-between'>
            <div className=' w-1/2 flex-col flex'>
            <p className='text-[#FF7364] font-medium text-xl'>Integrations</p>
                <Heading text={"Easily integrate with your favorite apps"}/>
                <Paragraph className={'pt-5 pb-10 w-[530px]'} text={"App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts."}/>
                <Button className={" bg-secondary w-fit"} text={"Get Started"}/>
            </div>
            <div className=' w-1/2'>
                <img src="/brand.png" alt="" srcset="" />
            </div>
           </div>
        </Container>
    </div>
  )
}
