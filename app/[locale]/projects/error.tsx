"use client"
import { useI18n } from '../../../locales/client';
import Button from '../components/button/Button';
import React, { useEffect } from 'react'
import { ErrorProps } from '../error';

export default function Error({error, reset} : ErrorProps) {

  const t = useI18n()

    useEffect(() => {
     console.log("Progects Fetch Error")
    }, [error])

  return (
    <div className='  h-screen  flex flex-col justify-center items-center text-white/80 gap-4'>

         <span className='font-semibold text-3xl z-40 text-white/80'> {t("projects.error.title")} </span>  

    <Button clicked={() => reset()} border title='reset' className='rounded-lg  w-fit px-6 py-1 z-40'>
        {t("projects.error.btn")}
    </Button>
    </div>
  )
}
