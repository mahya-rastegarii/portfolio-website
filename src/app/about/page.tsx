

import AboutContent from '@/components/section/about/AboutContent';
import { Metadata } from 'next';

// import GradientTypographyComponent from '@/components/typography/GradientTypographyComponent';
import React from 'react';

export const metadata: Metadata = {
  title:"About Me",
  description: " about page in portfolio",
};

export default function AboutPage() {
 
 
  return (
    <section className=" h-screen px-6 z-40 py-20 md:px-24 w-full text-white flex flex-col justify-center items-center">
      
      <AboutContent/>
    </section>
  );
}
