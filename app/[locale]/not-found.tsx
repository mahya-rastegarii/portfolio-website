"use client"

import React from 'react';
import Button from "../[locale]/components/button/Button"
import { useRouter } from 'next/router'
import { useCurrentLocale, useI18n } from '../../locales/client';

export default function NotFound() {

  const locale = useCurrentLocale()
  const t = useI18n()
    const router = useRouter()
  return (
    <div className=' h-screen flex flex-col justify-center items-center my-auto '>
      <span className='font-semibold text-3xl z-40 text-white/80'> {t("notFound.title")} </span>  
         <Button  clicked={() =>router.push(`/${locale}`)} border title='reset' className='rounded-lg w-fit px-6 py-1 z-40'>
                {t("notFound.btn")}
            </Button>

         </div>
  )
}
