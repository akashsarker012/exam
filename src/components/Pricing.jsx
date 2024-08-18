
import React from 'react';
import Container from './container';
import Button from './utils/Button';
import Heading from './utils/Heading';
import CardTitle from './utils/CardTitle';
import Paragraph from './utils/paragraph';
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
    <div className='pt-[140px] pb-40' >
      <Container>
        <Heading className={"w-[650px] flex justify-center text-center mx-auto"} text="Pricing Designed To Fit Your Business" />
        <div className='flex justify-center items-center gap-8 mx-auto pt-8 pb-16'>
        <CardTitle text={'Monthly'}/>
        <SwitchButton/>
        <CardTitle className={'text-[#645E76]'} text={'Yearly'}/>
        </div>
      <div className=" flex justify-center items-center gap-8 mx-auto">
        {pricingData.plans.map((plan, index) => (
          <div
            key={index}
            className={`py-10 px-16 w-1/3 rounded-lg shadow-lg text-center`} >
              <div className='flex justify-center items-center h-[90px] w-[90px] mx-auto mb-8 bg-[#ECE8F9] rounded-full'>
                <img src={plan.img} alt={plan.name} />
              </div>
              <CardTitle text={plan.name}/>
            <div>
              <Heading text={`${plan.price} /${plan.billingCycle}`}/>
              <div className='mt-3' >
              <Paragraph text={`Annual pricing ${plan.discountInfo}`}/>
              </div>
            </div>
           
            <ul className="text-left py-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2 flex items-center gap-6">
                 <span className="text-secondary rounded-full bg-[#F4EBFF] h-8 w-8 flex justify-center items-center">✔️</span> {feature}</li>
              ))}
            </ul>
           <Button text={plan.buttonText} className="w-full bg-secondary text-white"/>
          </div>
        ))}
      </div>

      </Container>
    </div>
  );
};

export default Pricing;

