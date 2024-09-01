import React from 'react';
import CardTitle from './utils/CardTitle';
import Button from './utils/Button';
import Heading from './utils/Heading';
import Container from './container';
import Paragraph from './utils/paragraph';

const Services = () => {
  const data = [
    {
      "title": "Plan Product Roadmap",
      "description": "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
      "icon": "https://i.ibb.co/D7TFVvn/008-neural-1.png",
      "link": "Read More"
    },
    {
      "title": "Assign Any Work",
      "description": "Work assignment or job assignment is allocating work to work centers or appropriate",
      "icon": "https://i.ibb.co/FVZ4m4W/004-monitor-1.png",
      "link": "Read More"
    },
    {
      "title": "Monitor Work Progress",
      "description": "Monitor Work ProgressKeeping records and monitoring activities helps people see progress",
      "icon": "https://i.ibb.co/wpVCB4j/003-user-1.png",
      "link": "Read More"
    },
    {
      "title": "Perfect Integration",
      "description": "App integration, in a general sense, is the process of resources or capabilities from one application",
      "icon": "https://i.ibb.co/VL7qn0X/002-flowchart-1.png",
      "link": "Read More"
    }
  ];

  return (
    <div className='py-8'>
      <div className="text-center mb-8">
        <Paragraph className="text-[#FF7364]" text="Our Services" />
        <Heading text="How It Works" />
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
          {data.map((item, index) => (
            <div key={index} className="flex group hover:bg-[#3639A4] flex-col duration-500 shadow-lg rounded-lg p-6">
              <div className='w-24 h-24 flex justify-center items-center rounded-full bg-[#E8FAF0]'>
                <img className="w-12 h-12" src={item.icon} alt={item.title} />
              </div>
              <CardTitle className='pt-6 pb-2 group-hover:text-white' text={item.title} />
              <Paragraph className="group-hover:text-white" text={item.description} />
              <a href="#" className="text-indigo-600 group-hover:text-white mt-6 font-semibold">{item.link} →</a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button className="text-secondary w-fit border-2 border-secondary" text="View All Services" />
        </div>
      </Container>
    </div>
  );
};

export default Services;
