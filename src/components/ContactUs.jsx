import React from "react";
import BackgroundImage from "/Group.png";
import Heading from "./utils/Heading";
import Paragraph from "./utils/paragraph";
import Button from "./utils/Button";
import Container from "./container";

export default function ContactUs() {
  return (
    <div className="py-[140px]">
      <Container>
        <div
          style={{
            padding: "100px",
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-center justify-between">
            <Heading className={"w-1/2 text-white"}
              text={"Don’t find the answer? contact us for any query."}/>
              <div className="w-1/2 ">

            <Button className={" float-end bg-primary text-black"} text={"Contact Us"} />
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
