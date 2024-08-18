// components/Button.js
import React from 'react';

const Heading = ({ text, className, }) => {
  return (
    <heading className={`text-5xl font-bold text-[#2C2643] ${className}`} >
      {text}
    </heading>
  );
};

export default Heading;
