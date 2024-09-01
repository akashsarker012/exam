import React from 'react';
import Container from './container';
import Button from './utils/Button';
import Heading from './utils/Heading';
import CardTitle from './utils/CardTitle';
import Paragraph from './utils/Paragraph';
import SwitchButton from './utils/SwitchButton';

const Pricing = () => {
  const pricingData = {
    plans: [
      {
        img: "https://i.ibb.co/grp21Ys/001-user-1.png",
        name: "Personal",
        price: 10,
        billingCycle: "mth",
        discountInfo: "save 20%",
        features: [
          "Calendar View",
          "Custom Templates",
          "List view",
          "Board view",
          "Assignees & Due Dates"
        ],
        buttonText: "Purchase Now",
        highlight: false
      },
      {
        img: "https://i.ibb.co/yWgd0hJ/002-follower-1.png",
        name: "Team",
        price: 25,
        billingCycle: "mth",
        discountInfo: "save 35%",
        features: [
          "Timeline Review",
          "Custom fields",
          "Custom Templates",
          "Task dependencies",
          "Milestones Manage"
        ],
        buttonText: "Purchase Now",
        highlight: true
      },
      {
        img: "https://i.ibb.co/yWDm2zn/XMLID-1.png",
        name: "Enterprise",
        price: 50,
        billingCycle: "mth",
        discountInfo: "save 40%",
        features: [
          "Data export & deletion",
          "Block native integrations",
          "Custom branding",
          "Lock custom fields",
          "Priority support"
        ],
        buttonText: "Purchase Now",
        highlight: false
      }
    ]
  };

  return (
    <div className='pt-[140px] pb-40'>
      <Container>
        <Heading className="w-full text-center mx-auto mb-8" text="Pricing Designed To Fit Your Business" />
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mx-auto mb-16'>
          <CardTitle text={'Monthly'} />
          <SwitchButton />
          <CardTitle className='text-[#645E76]' text={'Yearly'} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {pricingData.plans.map((plan, index) => (
            <div
              key={index}
              className={`py-6 px-8 rounded-lg shadow-lg text-center ${plan.highlight ? 'bg-[#F4EBFF] border-2 border-secondary' : ''}`}
            >
              <div className='flex justify-center items-center h-[80px] w-[80px] mx-auto mb-6 bg-[#ECE8F9] rounded-full'>
                <img src={plan.img} alt={plan.name} className='w-16 h-16' />
              </div>
              <CardTitle text={plan.name} />
              <Heading text={`${plan.price} /${plan.billingCycle}`} />
              <div className='mt-3'>
                <Paragraph text={`Annual pricing ${plan.discountInfo}`} />
              </div>
              <ul className="text-left py-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center gap-4">
                    <span className="text-secondary rounded-full bg-[#F4EBFF] h-6 w-6 flex justify-center items-center">✔️</span> {feature}
                  </li>
                ))}
              </ul>
              <Button text={plan.buttonText} className="w-full bg-secondary text-white" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
