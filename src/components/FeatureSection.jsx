
import React from 'react';
import Container from './container';
import Button from './utils/Button';
import CardTitle from './utils/CardTitle';
import Paragraph from './utils/paragraph';
const data = [
  {
    title: "Fast and Easy to use",
    description: "Easily to convert API with just a few clicks",
    icon: "https://i.ibb.co/H25XfRs/Group-1000005331.png"
  },
  {
    title: "Safely Security",
    description: "All customer data is encrypted",
    icon: "https://i.ibb.co/GpcWzZn/Group-1000005248.png"
    
  },
  {
    title: "Get Organized",
    description: "From lists to boards, organize work your way.",
    icon: "https://i.ibb.co/WngHqpR/Group-1000005246.png"
  },
  {
    buttonText: "Get Started"
  }
];

const FeatureSection = () => {
  return (
    <Container>
      <div className='flex justify-between items-center'>
        <div>
           <img src="/Elements.png" alt="" srcset="" />
        </div>
        <div className="grid grid-cols-2 gap-4  mx-auto mt-8">
      {data.map((item, index) => (
        item.buttonText ? (
          <div key={index} className="flex items-end">
            <Button className={"bg-secondary w-fit"} text={item.buttonText} />
          </div>
        ) : (
          <div key={index} className="flex flex-col items-start p-4">
            <img src={item.icon} alt={item.title} className="w-10 h-10 mb-2" />
            <CardTitle className={'pt-6 pb-3'} text={item.title}/>
            <Paragraph text={item.description} />
            
          </div>
        )
      ))}
    </div>
      </div>
    </Container>
  );
};

export default FeatureSection;

