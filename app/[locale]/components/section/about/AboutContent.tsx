"use client"

import React, { useState } from 'react'


import Button from '../../button/Button';
import GradientTypographyComponent from '../../typography/GradientTypographyComponent';
import { useCurrentLocale, useI18n } from '../../../../../locales/client';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import MotionWrapper from '../../wrapper/MotionWrapper';


// type TabType = typeof tabs[number];


export default function AboutContent() {
  
  const locale = useCurrentLocale();
  const t = useI18n();

   const content: Record<string, React.JSX.Element> = {
          "About Me": (
            <AboutMe />
          ),
          Skills: (
            <Skills/>
          ),
          Education: (
           <Education />
          ),
        };
        
  const tabs = [
    { label: t('aboutMe.tabs.tab1'), value: "About Me" },
    { label: t('aboutMe.tabs.tab2'), value: "Skills" },
    { label: t('aboutMe.tabs.tab3'), value: "Education" },
  ];


  const [activeTab, setActiveTab] = useState(tabs[0].value);
  
  

  return (
    <div className={` w-full  xl:w-[80%]  flex flex-col justify-center items-center md:items-end  mt-16 md:pt-20 lg:pt-0 md:flex-row  mb-5 md:mb-0  md:mt-0 ${locale === "fa" ? "md:flex-row-reverse" : "md:flex-row"} gap-10`}>

    {/* Left Sidebar - Tabs */}
    <div className=" flex flex-col justify-center items-center w-full md:w-1/4 ">


  
    <div className='mb-2'>
      <GradientTypographyComponent text={t('aboutMe.title')} />
      </div>
    <div className=" flex z-50 flex-col sm:flex-row md:flex-col w-full justify-center items-center  gap-4 ">
      {tabs.map((tab) => (
       
        <Button
         key={tab.value}
         clicked={() => setActiveTab(tab.value)}
         className={`text-left w-[80%] sm:w-1/4 md:w-full p-4 rounded-lg transition ${
            activeTab === tab.value
              ? 'bg-purple-600/80 text-white'
              : 'bg-transparent border border-purple-500 text-white hover:bg-purple-600/80'
          }`}
        
        >
          {tab.label}
        </Button>
      ))}
    </div>
    </div>
    {/* Right Content */}
    <div className=" w-full md:w-3/4 z-50">
    
        <MotionWrapper
          num={50}
          key={activeTab}
         
          className="px-1 md:px-2 lg:px-4  py-12 border  border-purple-500 bg-purple-500/5 rounded-lg shadow-xl"
        >
          {content[activeTab]}
        </MotionWrapper>
     
      </div>
    </div>
  )
}
