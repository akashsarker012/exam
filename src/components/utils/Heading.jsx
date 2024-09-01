import React from 'react';

const Heading = ({ text, className }) => {
  return (
    <h1 className={`text-2xl sm:text-3xl lg:text-5xl font-bold text-[#2C2643] ${className}`}>
      {text}
    </h1>
  );
};

export default Heading;
