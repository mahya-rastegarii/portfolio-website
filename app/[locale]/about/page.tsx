

import { Metadata } from 'next';
import AboutContent from '../components/section/about/AboutContent';

import React from 'react';

export const metadata: Metadata = {
  title:"About Me",
  description: " about page in portfolio",
};


export default function AboutPage() {
 
   
 
  return (
    <section className="relative min-h-screen lg:h-screen px-6 z-40 py-20 md:px-24 w-full text-white flex flex-col justify-center items-center overflow-scroll md:overflow-hidden pt-10 md:pt-0">
      
      <AboutContent/>
    </section>
  );
}
