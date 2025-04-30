import { aboutMe } from '@/data/about/AboutMe'
import React from 'react'
import { motion } from 'framer-motion';
export default function AboutMe() {
  return (
  
    <div className='  grid grid-cols-2  md:grid-cols-3 place-items-end px-4 gap-y-4'>
 {
  aboutMe.map( (item, i) => (
    <motion.div
          
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: i * 0.05 }} key={item.header}>
        <span className=' text-purple-500/80  font-semibold'>{item.header} : </span>
        <span className='text-white/80'>{item.value}</span>
      </motion.div>
  ))
 }
 </div>

  )
}
