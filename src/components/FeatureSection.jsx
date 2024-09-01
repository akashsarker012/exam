import React from "react";
import Container from "./container";
import Button from "./utils/Button";
import CardTitle from "./utils/CardTitle";
import Paragraph from "./utils/Paragraph";

const data = [
  {
    title: "Fast and Easy to use",
    description: "Easily to convert API with just a few clicks",
    icon: "https://i.ibb.co/H25XfRs/Group-1000005331.png",
  },
  {
    title: "Safely Security",
    description: "All customer data is encrypted",
    icon: "https://i.ibb.co/GpcWzZn/Group-1000005248.png",
  },
  {
    title: "Get Organized",
    description: "From lists to boards, organize work your way.",
    icon: "https://i.ibb.co/WngHqpR/Group-1000005246.png",
  },
  {
    buttonText: "Get Started",
  },
];

const FeatureSection = () => {
  return (
    <Container>
      <div className="flex flex-col py-10 lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <img src="/Elements.png" alt="" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto mt-8 lg:mt-0 lg:w-2/3">
          {data.map((item, index) =>
            item.buttonText ? (
              <div key={index} className="flex justify-center sm:items-end">
                <Button
                  className="bg-secondary w-fit h-fit"
                  text={item.buttonText}
                />
              </div>
            ) : (
              <div key={index} className="flex flex-col items-center p-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 mb-4"
                />
                <CardTitle className="pt-6 pb-3" text={item.title} />
                <Paragraph text={item.description} />
              </div>
            )
          )}
        </div>
      </div>
    </Container>
  );
};

export default FeatureSection;
