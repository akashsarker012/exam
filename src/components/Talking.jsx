import React from 'react'
import Container from './container'
import Heading from './utils/Heading'
import Paragraph from './utils/paragraph'
import Button from './utils/Button'
import Avatar from './utils/Avatar';

export default function Talking() {
  return (
    <div className='bg-[#F4FAFA]'>
        <Container>
           <div className='flex items-center justify-between'>
            <div className=' w-1/2 flex-col flex'>
                <Heading className={"w-[530px]"} text={"What they are talking about us?"}/>
                <Paragraph className={'pt-5 pb-10 w-[530px]'} text={"testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive"}/>
                <Button className={" bg-secondary w-fit"} text={"Get Started"}/>
                <Avatar/>
            </div>
            <div className=' w-1/2'>
                <img src="/review.png" alt="" srcset="" />
            </div>
           </div>
        </Container>
    </div>
  )
}
