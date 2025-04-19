"use client"
import React from 'react'
import CVButton from '../button/CVButton'


export default function Navbar() {
  return (
   <div className="flex  justify-end container  w-[90%]  items-center bg-transparent fixed py-3">
 
 <div className=" flex justify-center gap-3 items-center m-5">
    <h1 className=' trxt-xl text-white'>  
        Lango
         </h1>
    <CVButton/>
 </div>
   </div>
  )
}
