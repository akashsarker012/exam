import React from 'react';

export default function Paragraph({ text, className }) {
  return (
    <p className={`text-[#645E76] text-base sm:text-lg font-normal ${className}`}>
      {text}
    </p>
  );
}
