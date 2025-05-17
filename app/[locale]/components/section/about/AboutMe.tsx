import { aboutMe } from '../../../../data/about/AboutMe'
import React from 'react'
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';


export default function AboutMe() {

   const params = useParams();
  const locale = params?.locale || "en"
  return (
  
    <div dir={locale === "fa" ? "rtl" : "ltr"} className={`  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 ${locale === "fa" ? "md:place-items-start" : "md:place-items-end" } place-items-center px-4 gap-y-6`}>
 {
  aboutMe.map( (item, i) => (
    <motion.div
          
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: i * 0.05 }}
     key={item.headerEn}>
        <span className=' text-purple-500/80  font-semibold'>{locale === "fa" ? item.headerFa : item.headerEn} : </span>
        <span className='text-white/80'>{locale === "fa" ? item.valueFa : item.valueEn}</span>
      </motion.div>
  ))
 }
 </div>

  )
}
