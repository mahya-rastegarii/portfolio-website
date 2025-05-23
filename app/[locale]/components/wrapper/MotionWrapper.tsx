'use client'

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'


type MotionProps = {
    className?: string;
    num1: number;
    num2: number;
    children: React.ReactNode;
    delay?: number
}

export default function MotionWrapper({className, num1, num2, children, delay= 0.05 } : MotionProps) {

  
  return (
    <AnimatePresence mode="wait">
    <motion.div
    initial={{opacity: 0, x: num1}}
   
    animate={{opacity:1, x: 0}}
    exit={{opacity: 0, x: num2 }}
    
    transition={{duration: 0.5, delay:delay}}
    
    className={ className}>
    {
    children
    }
    </motion.div>
       </AnimatePresence>
  )
}
