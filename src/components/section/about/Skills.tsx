import React from 'react'
import { motion } from 'framer-motion' 
import { skills } from '@/data/about/Skills'
import TooltipComponent from '@/components/tooltip/TooltipComponent'
export default function Skills() {
  return (
    <div className="space-y-2 grid grid-cols-3 sm:grid-cols-4 place-items-center md:grid-cols-5 xl:grid-cols-6 gap-2  md:gap-4 xl:gap-5">

    {skills.map((skill, i) => (
      <TooltipComponent  key={skill.title} position='bottom' text={skill.title}>
      <motion.div
      
        className="bg-purple-200/10 hover:bg-purple-600/80 text-white w-20 h-20  p-2 rounded-lg text-4xl md:text-5xl flex justify-center items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.05 }}
      >
        {skill.icon}
      </motion.div>
      </TooltipComponent>
    ))}
  </div>
  )
}
