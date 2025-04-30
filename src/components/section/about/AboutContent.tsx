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
    <div className=' w-full md:w-[80%]  flex flex-col justify-center items-end md:flex-row gap-10'>

    {/* Left Sidebar - Tabs */}
    <div className="">

    <div className=' mb-2'>
      <GradientTypographyComponent text='About Me' />
      </div>

  
    <div className="flex z-50 md:flex-col  gap-4 md:w-1/4">
      {tabs.map((tab) => (
       
        <Button
         key={tab}
         clicked={() => setActiveTab(tab)}
         className={`text-left  p-4 rounded-lg transition ${
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
    <div className="  md:w-3/4 z-50">
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
