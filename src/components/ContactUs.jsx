import React from "react";
import BackgroundImage from "/Group.png";
import Heading from "./utils/Heading";
import Paragraph from "./utils/Paragraph";
import Button from "./utils/Button";
import Container from "./container";

export default function ContactUs() {
  return (
    <div className="py-10 lg:py-[140px]">
      <Container>
        <div
          className="bg-cover bg-no-repeat py-16 px-6 lg:py-24 lg:px-20"
          style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between text-center lg:text-left">
            <Heading 
              className="text-white  mb-6 lg:mb-0 lg:w-1/2"
              text="Don’t find the answer? Contact us for any query."
            />
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <Button className="bg-primary text-black" text="Contact Us" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
