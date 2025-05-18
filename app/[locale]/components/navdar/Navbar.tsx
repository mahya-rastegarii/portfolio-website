
"use client"

import React, { useEffect, useState } from 'react'
import CVButton from '../button/ResumeButton'
import LanguageMenu from '../menu/LanguageMenu'
import { usePathname } from 'next/navigation'

export default function Navbar() {

  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-[9999] py-3
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
