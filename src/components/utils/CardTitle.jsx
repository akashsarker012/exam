import React from 'react'

export default function CardTitle({ text, className }) {
  return (
    <heading className={`text-2xl font-bold text-[#2C2643] ${className}`} >
    {text}
  </heading>
  )
}
