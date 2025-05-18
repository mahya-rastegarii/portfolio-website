// "use client"
// import React from 'react'
// import CVButton from '../button/ResumeButton'
// import LanguageMenu from '../menu/LanguageMenu'


// export default function Navbar() {
//   return (
//    <div className="flex z-30 md:justify-end justify-center container w-full px-2 md:px-0 md:w-[90%]  items-center bg-transparent fixed py-3">
 
//  <div className=" flex justify-center gap-3 items-center m-5">
//     <LanguageMenu/>
//     <CVButton/>
//  </div>
//    </div>
//   )
// }

"use client"

import React, { useEffect, useState } from 'react'
import CVButton from '../button/ResumeButton'
import LanguageMenu from '../menu/LanguageMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50 py-3
        transition-all duration-300
        ${scrolled ? "backdrop-blur-md bg-black/20 shadow-md" : "bg-transparent"}
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
