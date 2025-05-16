"use client"
import { useI18n } from '../../locales/client';
import Button from './components/button/Button';
import React, { useEffect } from 'react'

type ErrorProps = {
    error: Error;
    reset: () => void;
}
export default function Error({error, reset} : ErrorProps) {

  const t = useI18n()
    useEffect(() => {
     console.log("Progects Fetch Error")
    }, [error])
  return (
    <div className='  h-screen  flex flex-col justify-center items-center text-white/80 gap-2'>
      <span className='font-semibold text-3xl text-white/80 z-40'> {t("error.title")} </span>  
      <p className=' text-xl text-white/80 z-40'> {t("error.description")} </p>  
    
    <Button  clicked={() => reset()} border title='reset' className='rounded-lg w-fit px-6 py-1 z-40'>
        {
          t("error.btn")
        }
    </Button>
    </div>
  )
}
