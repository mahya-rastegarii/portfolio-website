"use client"
import React from 'react'
import CVButton from '../button/ResumeButton'
import LanguageMenu from '../menu/LanguageMenu'


export default function Navbar() {
  return (
   <div className="flex z-30 justify-end container  w-[90%]  items-center bg-transparent fixed py-3">
 
 <div className=" flex justify-center gap-3 items-center m-5">
    <LanguageMenu/>
    <CVButton/>
 </div>
   </div>
  )
}
