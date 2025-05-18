'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useParams } from 'next/navigation';
import React from 'react'

type MotionProps = {
    className: string;
    num: number;
    children: React.ReactNode;
}

export default function MotionWrapper({className, num, children } : MotionProps) {

     const params = useParams();
      const locale = params?.locale || "en"
  return (
    <AnimatePresence mode="wait">
    <motion.div
    initial={{opacity: 0, x:  locale === "fa" ? -{num} : num}}
   
    animate={{opacity:1, x: 0}}
    exit={{opacity: 0, x: locale === "fa" ? num :  -{num}}}
    
    transition={{duration: 0.5}}
    
    className={ className}>
    {
    children
    }
    </motion.div>
       </AnimatePresence>
  )
}
