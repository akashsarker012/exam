import React from "react";
import Heading from "./utils/Heading";
import Paragraph from "./utils/paragraph";
import Container from "./container";
import CardTitle from './utils/CardTitle';

export default function InfoPart() {
  const data = [
    {
      title: "Login or sign up to be able to use our platform",
      description: "This quickstart shows you how to use Identity Platform to sign in a user with an email and password.",
      icon: "https://i.ibb.co/Hpw9k9B/Icon-2.png"
    },
    {
      title: "Connect your website with just a few clicks",
      description: "Once your website is online, you can configure it. I will show you how to put your website online.",
      icon: "https://i.ibb.co/hyWk6bn/Icon-1.png"
    },
    {
      title: "Take some sales data that you want",
      description: "Sell your data directly: The most straightforward method is to sell your data directly to another.",
      icon: "https://i.ibb.co/6Z7fRvz/Icon.png"
    }
  ];

  return (
    <div className="py-[80px] sm:py-[160px]">
      <Container>
        {/* Heading and Paragraph */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <Heading
            className="lg:w-[530px] mb-6 lg:mb-0"
            text="How simple is it to use our platform?"
          />
          <Paragraph
            className="lg:w-[530px]"
            text="This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business."
          />
        </div>

        {/* Card Section */}
        <div className="flex flex-wrap gap-8 justify-center lg:justify-between items-center mt-16 lg:mt-28">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col w-[300px] items-center text-center">
              <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
              <CardTitle className="pt-6 pb-3" text={item.title} />
              <Paragraph text={item.description} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
