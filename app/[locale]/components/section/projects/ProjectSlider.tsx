
"use client"


import React, { useState } from 'react'
import Button from '../../button/Button';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri';
import GradientTypographyComponent from '../../typography/GradientTypographyComponent';
import { Project } from '../../../../api/projects/route';
import { useCurrentLocale, useI18n } from '../../../../../locales/client';
import MotionWrapper from '../../wrapper/MotionWrapper';
import Image from 'next/image';



type ProjectSliderProps = {
  projects: Project[];
};



export default function ProjectSlider({projects} : ProjectSliderProps) {

  const locale = useCurrentLocale()
const t= useI18n()
   const [index, setIndex] = useState<number>(0);
  
   
  
    const project = projects[index];
  
    const nextProject = () => {
      setIndex((prev) => (prev + 1) % projects.length);
      
    };
  
    const prevProject = () => {
      setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };
  

  return (
    <div dir={locale === "fa" ? "rtl" : "ltr"} className={`flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center w-full mt-16 md:mt-24 mb-20 md:mb-10 lg:mt-0 lg:mb-0  max-w-6xl `}>

      
        <div dir='ltr' className='flex h-fit z-40  lg:hidden justify-end items-center px-7 gap-2 md:mt-20 lg:mt-0'>

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
        <div className="lg:w-1/2 z-40 space-y-4">
          <div className='hidden lg:inline-flex mb-10'>
      
       <GradientTypographyComponent text={t("projects.title")} />
      </div>
        
            <MotionWrapper
            num1={locale === "fa" ? 50 :-50}
            num2={locale === "fa" ? -50 : 50}
              key={project.titleEn}
             
              className="space-y-4"
            >
  
              <h2 className="text-3xl md:text-5xl text-purple-400/90 font-light">
               0{project.id}
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600/80">{locale === "fa" ? project.titleFa : project.titleEn}</h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed w-full md:w-[90%] text-justify">{locale === "fa" ? project.descriptionFa : project.descriptionEn}</p>
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
            </MotionWrapper>
        </div>

       
        <div className="w-full lg:w-1/2 md:w-[90%] z-20 flex-col space-y-4 justify-center items-centerpx-1 py-2 md:py-4 md:px-2">
        <div className=' w-full flex justify-center items-center'>

       
        
            <MotionWrapper
            num1={locale === "fa" ?  -50 :50}
            num2={locale === "fa" ?50 : -50}
            key={project.titleEn}
            className=" w-full "
            >
              <Image   alt={project.titleEn}  src={project.image} className="w-full  object-cover" width={800} height={600}/>
             
            
              </MotionWrapper>
         
          </div>
          {/* Arrows */}
          <div dir='ltr' className={`hidden  lg:flex ${locale === "fa" ? "justify-start" : "justify-end"}  items-center px-7 gap-2`}>

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
        <div className='inline-flex lg:hidden  mb-10 '>
      
      <GradientTypographyComponent text=' My Projects' />
     </div>
      </div>
  )
}
