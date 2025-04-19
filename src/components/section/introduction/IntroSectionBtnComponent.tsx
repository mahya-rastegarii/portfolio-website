"use client"
import CVButton from '@/components/button/CVButton'
import SocialMedia from '@/components/button/SocialMedia'
import React from 'react'


export default function IntroSectionBtnComponent() {
  return (
    <div className="mt-8 flex justify-center gap-5 items-center ">
       
        <CVButton/>
        <SocialMedia />
           
   </div>
  )
}
