"use client"
import ResumeButton from '../../button/ResumeButton'
import SocialMedia from '../../button/SocialMedia'
import React from 'react'


export default function IntroSectionBtnComponent() {

  return (
    <div className={`mt-6 md:mt-8  flex flex-col   md:flex-row justify-center gap-5 items-center`}>
       
        <ResumeButton/>
        <SocialMedia />
           
   </div>
  )
}
