import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttons = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Valentines",
    "Movies",
    "News",
    "Tech",
    "Comedy",
    "Fashion",
  ]

  return (
    <div className="flex justify-center">
      {buttons.map((name, index) => (
       <Button key={index} name={name} />
     ))}
    </div>
  );
}

export default ButtonList