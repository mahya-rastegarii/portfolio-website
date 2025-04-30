"use client"

import React, { useState } from 'react'
import AboutMe from './AboutMe';
import Education from './Education';
import Skills from './Skills';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/button/Button';
import GradientTypographyComponent from '@/components/typography/GradientTypographyComponent';

const tabs = ['Skills', 'Education', 'About Me'];

// type TabType = typeof tabs[number];


export default function AboutContent() {

    const [activeTab, setActiveTab] = useState("Skills");

    const content: Record<string, React.JSX.Element> = {
      "About Me": (
        <AboutMe/>
      ),
      Skills: (
        <Skills/>
      ),
      Education: (
       <Education/>
      ),
    };

  return (
    <div className=' w-full md:w-[90%] xl:w-[80%]  flex flex-col justify-center items-center md:items-end py-6 md:py-0 md:flex-row gap-10'>

    {/* Left Sidebar - Tabs */}
    <div className=" flex flex-col justify-center items-center w-full md:w-1/4 ">


  
    <div className='mb-2'>
      <GradientTypographyComponent text='About Me' />
      </div>
    <div className=" flex z-50 flex-col sm:flex-row md:flex-col w-full justify-center items-center  gap-4 ">
      {tabs.map((tab) => (
       
        <Button
         key={tab}
         clicked={() => setActiveTab(tab)}
         className={`text-left w-[80%] sm:w-1/4 md:w-full p-4 rounded-lg transition ${
            activeTab === tab
              ? 'bg-purple-600/80 text-white'
              : 'bg-transparent border border-purple-500 text-white hover:bg-purple-600/80'
          }`}
        
        >
          {tab}
        </Button>
      ))}
    </div>
    </div>
    {/* Right Content */}
    <div className=" w-[80%] md:w-3/4 z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="px-4  py-12 border  border-purple-500 bg-purple-500/5 rounded-lg shadow-xl"
        >
          {content[activeTab]}
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  )
}
