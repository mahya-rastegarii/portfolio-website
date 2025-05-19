
"use client"

import React from 'react'
import CVButton from '../button/ResumeButton'
import LanguageMenu from '../menu/LanguageMenu'


export default function Navbar() {


 

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50 py-3
        transition-all duration-300
       backdrop-blur-sm bg-black/5 shadow-sm
      `}
    >
      <div className="flex justify-center md:justify-end items-center container w-full px-2 md:px-0 md:w-[90%]">
        <div className="flex justify-center gap-3 items-center m-5">
          <LanguageMenu />
          <CVButton />
        </div>
      </div>
    </div>
  )
}
