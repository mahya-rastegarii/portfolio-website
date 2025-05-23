"use client"

import React from 'react'
import { useParams } from 'next/navigation';

type TypographyProps = {
  text: string;

}
export default function GradientTypographyComponent({text} : TypographyProps ) {
 
  const params = useParams();
   const locale = params?.locale || "en"

  return (
    <h1 className={`text-4xl lg:text-5xl  font-bold  p-2 text-transparent bg-clip-text ${locale === "fa" ? "bg-gradient-to-l" :"bg-gradient-to-r"} from-pink-500 via-purple-500 to-violet-500`}>
    {text}
    </h1> 
  )
}

