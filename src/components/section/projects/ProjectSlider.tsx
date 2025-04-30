
"use client"

import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Button from '@/components/button/Button';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri';
import GradientTypographyComponent from '@/components/typography/GradientTypographyComponent';
import { Project } from '@/app/api/projects/route';



type ProjectSliderProps = {
  projects: Project[];
};



export default function ProjectSlider({projects} : ProjectSliderProps) {


   const [index, setIndex] = useState<number>(projects.length -1);
  
   
  
    const project = projects[index];
  
    const nextProject = () => {
      setIndex((prev) => (prev + 1) % projects.length);
      
    };
  
    const prevProject = () => {
      setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };
  

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full py-6 md:py-0 max-w-6xl">

        {/* Left - Info */}
        <div className='flex md:hidden justify-end items-center px-7 gap-2'>

<div className="">
  <Button clicked={prevProject} border title='Arrow Prev' className=" rounded-full p-1" disabled={project.id == 1}>
    <MdKeyboardArrowLeft className="text-purple-400 text-3xl"/>
  </Button>
</div>
<div className="">
  <Button clicked={nextProject} border title='Arrow Next' className=" rounded-full p-1" disabled={project.id == projects.length}>
    <MdKeyboardArrowRight className="text-purple-400 text-3xl"/>
  </Button>
</div>
</div>
        <div className="md:w-1/2 z-40 space-y-4">
          <div className='hidden md:inline-flex mb-10'>
      
       <GradientTypographyComponent text=' My Projects' />
      </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-5xl text-purple-400/90 font-light">
               0{project.id}
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600/80">{project.title}</h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{project.descriptionEn}</p>
              <ul className="flex flex-wrap gap-2 text-sm">
                {project.techs.map((tech, i) => (
                  <li
                    key={i}
                    className="px-4 py-1 rounded-full bg-purple-800 text-white border border-purple-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <hr className=' text-purple-400 w-[80%]' />
              <div className="flex justify-start items-center gap-4">


              <Button border className='rounded-full p-2' title='preview'  clicked={() => window.open(project.preview , "_blank")}>
            <RiExternalLinkLine className="text-xl"/>
             </Button>
            
             
             <Button border className='rounded-full p-2' title='Github'  clicked={() => window.open(project.github, "_blank")} >
              <RiGithubLine className="text-xl"/>
              </Button>
                
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/2 z-40 flex-col space-y-4 justify-center items-center mt-10 md:mt-0">
        <div className=' w-full flex justify-center items-center'>

       
          <AnimatePresence mode="wait">
            <motion.img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="rounded-xl border border-purple-500 w-[90%] h-auto object-cover shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          </div>
          {/* Arrows */}
          <div className='hidden md:flex justify-end items-center px-7 gap-2'>

          <div className="">
            <Button clicked={prevProject} border title='Arrow Prev' className=" rounded-full p-1" disabled={project.id == 1}>
              <MdKeyboardArrowLeft className="text-purple-400 text-3xl"/>
            </Button>
          </div>
          <div className="">
            <Button clicked={nextProject} border title='Arrow Next' className=" rounded-full p-1" disabled={project.id == projects.length}>
              <MdKeyboardArrowRight className="text-purple-400 text-3xl"/>
            </Button>
          </div>
          </div>
        </div>
        <div className='inline-flex md:hidden mb-10'>
      
      <GradientTypographyComponent text=' My Projects' />
     </div>
      </div>
  )
}
