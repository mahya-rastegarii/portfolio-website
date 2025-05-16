"use client"
import Button from '../components/button/Button';
import React, { useEffect } from 'react'

type ErrorProps = {
    error: Error;
    reset: () => void;
}
export default function Error({error, reset} : ErrorProps) {

    useEffect(() => {
     console.log("Progects Fetch Error")
    }, [error])
  return (
    <div className='  h-screen  flex flex-col justify-center items-center text-white/80 gap-2'>

         <span className='font-semibold text-3xl z-40 text-white/80'> fetch projects Error </span>  

    <Button clicked={() => reset()} border title='reset' className='rounded-lg  w-fit px-6 py-1 z-40'>
        reset
    </Button>
    </div>
  )
}
