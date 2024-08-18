// components/Button.js
import React from 'react';

const Button = ({ text, className, }) => {
  return (
    <button className={`px-12 py-5 rounded-md text-lg font-medium text-gray-100 transition-all ${className}`} >
      {text}
    </button>
  );
};

export default Button;
