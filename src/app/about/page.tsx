'use client';

import GradientTypographyComponent from '@/components/typography/GradientTypographyComponent';
import { motion, AnimatePresence } from 'framer-motion';
import React, {  useState } from 'react';

const tabs = ['Skills', 'Education', 'About Me'] as const;

type TabType = typeof tabs[number];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabType>("Skills");

  const content: Record<TabType, React.ReactNode> = {
    "About Me": (
      <div className=''>
        <h2 className="text-2xl font-bold mb-4 text-purple-300">سلام! من محیا هستم 💻</h2>
        <p className="text-gray-400 leading-relaxed">
          یک فرانت‌اند دولوپر با انگیزه و مشتاق یادگیری. عاشق React، Next.js و ساخت تجربه‌های کاربری خلاقانه هستم.
          علاقه‌مند به تکنولوژی، کار تیمی و پروژه‌های واقعی هستم که باعث رشد می‌شن.
        </p>
      </div>
    ),
    Skills: (
      <div className="space-y-2 grid grid-cols-3  md:grid-cols-6 gap-2.5">
        {[
          'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js',
          'Tailwind CSS', 'Redux Toolkit', 'Supabase', 'Framer Motion',
        ].map((skill, i) => (
          <motion.div
            key={i}
            className="bg-purple-600/80 text-white px-6 py-2 rounded-lg w-28 flex justify-center items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    ),
    Education: (
      <div className=''>
        <h3 className="text-xl font-semibold text-purple-400 mb-2">کارشناسی نرم‌افزار</h3>
        <p className="text-gray-400">
          دانشگاه آزاد - تهران | فارغ‌التحصیل ۱۴۰۲
        </p>
        <p className="text-gray-400 mt-4">دوره‌های تخصصی فرانت‌اند | پروژه‌محور و کاربردی</p>
      </div>
    ),
  };

  return (
    <section className=" h-screen px-6 z-40 py-20 md:px-24 w-full bg-black text-white flex flex-col justify-center items-center">
      <div className=' my-10'>

      <GradientTypographyComponent text='About Me' />
      </div>
      <div className=' w-[80%] flex flex-col justify-center items-center md:flex-row gap-10'>

      {/* Left Sidebar - Tabs */}
      <div className="flex z-50 md:flex-col gap-4 md:w-1/4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-left  p-4 rounded-lg transition ${
              activeTab === tab
                ? 'bg-purple-600/80 text-white'
                : 'bg-transparent border border-purple-500 text-white hover:bg-purple-600/80'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div className="flex-1 md:w-3/4 z-50 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="px-4  py-12 border border-purple-500 bg-purple-500/5 rounded-lg shadow-xl"
          >
            {content[activeTab]}
          </motion.div>
        </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
