import React from 'react';
import Container from './container';
import Heading from './utils/Heading';
import Button from './utils/Button';
import Avatar from './utils/Avatar';
import Paragraph from './utils/Paragraph';

export default function Talking() {
  return (
    <div className='bg-[#F4FAFA] py-10'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
          <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start'>
            <Heading className="text-center lg:text-left w-full lg:w-[530px]" text="What they are talking about us?" />
            <Paragraph className='pt-5 pb-10 text-center lg:text-left w-full lg:w-[530px]' text="Testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic and descriptive." />
            <Button className="bg-secondary w-fit mx-auto lg:mx-0" text="Get Started" />
            <div className='mt-8'>
              <Avatar />
            </div>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
            <img src="/review.png" alt="Reviews" className="w-full max-w-md" />
          </div>
        </div>
      </Container>
    </div>
  );
}
