" use client"
import React from 'react'
import { BiDownload } from 'react-icons/bi'
import Button from './Button'

export default function CVButton() {
  return (
    <Button className="rounded-xl gap-2 px-5 py-2" clicked={() => console.log("Clicked")} border title="Download" >
   {
     <BiDownload  className='text-xl'/>}
      Download CV
  </Button>
  )
}
