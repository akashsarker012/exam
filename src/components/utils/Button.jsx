import React from 'react';

const Button = ({ text, className }) => {
  return (
    <button
      className={`px-8 py-3 lg:px-12 lg:py-5 rounded-md text-base lg:text-lg font-medium transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
