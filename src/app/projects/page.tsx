'use client';

import { useState } from 'react';
import Button from '@/components/button/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { DiGithub } from 'react-icons/di';
import { FcOnlineSupport } from 'react-icons/fc';

const projects = [
  {
    title: 'Social Media App',
    description: 'پروژه چت‌روم بلادرنگ با Next.js، TypeScript، Supabase و Tailwind',
    techs: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    image: '/projects/social-media-app.png',
    link: 'https://yourproject.vercel.app',
  },
  {
    title: 'Movie App',
    description: 'سایت نمایش فیلم و سریال با قابلیت فیلتر ژانر و جزئیات فیلم',
    techs: ['React', 'Redux Toolkit', 'Supabase'],
    image: '/projects/movie-app.png',
    link: 'https://yourmovieapp.vercel.app',
  },
  {
    title: 'Puzzle Game',
    description: 'بازی پازلی با React و Three.js برای تمرین انیمیشن و لاجیک بازی',
    techs: ['React', 'Three.js'],
    image: '/projects/puzzle-game.png',
    link: 'https://yourpuzzlegame.vercel.app',
  },
];

export default function ProjectsSlider() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="h-screen w-full text-white px-6 py-20 md:px-24 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Left - Info */}
        <div className="md:w-1/2 z-40 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-purple-400">{project.title}</h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{project.description}</p>
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
              <hr className=' text-purple-200' />
              <div className="flex justify-start items-center gap-4">
             <Button border className='rounded-full' title='Github' >
              <DiGithub/>
             </Button>
             <Button border className='rounded-full' title='online' >
             <FcOnlineSupport/>
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
              key={project.image}
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
          <div className='flex justify-end items-center px-7 gap-2'>

          <div className="">
            <Button clicked={prevProject} border title='Arrow Prev' className=" rounded-full p-2">
              <MdKeyboardArrowLeft className="text-purple-400 text-2xl"/>
            </Button>
          </div>
          <div className="">
            <Button clicked={nextProject} border title='Arrow Next' className=" rounded-full p-2">
              <MdKeyboardArrowRight className="text-purple-400 text-2xl"/>
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}