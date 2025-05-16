import React from 'react'

type TypographyProps = {
  text: string;
}
export default function GradientTypographyComponent({text} : TypographyProps) {



  return (
    <h1 className="text-4xl sm:text-5xl  font-bold  p-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 outfit-font">
    {text}
    </h1> 
  )
}

