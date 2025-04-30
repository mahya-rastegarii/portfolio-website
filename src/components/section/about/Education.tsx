import { education } from '@/data/about/Education'
import React from 'react'
import { motion } from 'framer-motion'
export default function Education() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2  place-items-center gap-4'>
      {
        education.map( (item, i) => (
          <motion.div
          
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          className='bg-purple-200/10 w-5/6 p-6 rounded-lg shadow-md text-right' key={item.degree}>
              <h3 className="text-xl font-semibold text-white/80 mb-2">{item.degree}</h3>
             <p className="text-purple-400/80 text-sm font-light">
           <span>{item.location}</span> | <span>{item.year}</span>
            </p>
          </motion.div>
        ))
      }
  

  </div>
  )
}
