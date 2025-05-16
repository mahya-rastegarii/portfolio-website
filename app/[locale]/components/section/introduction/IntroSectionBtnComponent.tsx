"use client"
import { useCurrentLocale } from '../../../../../locales/client'
import ResumeButton from '../../button/ResumeButton'
import SocialMedia from '../../button/SocialMedia'
import React from 'react'


export default function IntroSectionBtnComponent() {

  const locale = useCurrentLocale();
  return (
    <div className={`mt-6 md:mt-8  flex flex-col ${locale === "fa" ? "md:flex-row-reverse" : "md:flex-row"} md:flex-row justify-center gap-5 items-center`}>
       
        <ResumeButton/>
        <SocialMedia />
           
   </div>
  )
}
