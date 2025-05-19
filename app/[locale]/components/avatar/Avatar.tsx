import Image from 'next/image';
import React from 'react'
export default function Avatar() {
  return (
  

      <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(192,132,252,0.3)] group">

         <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 animate-spin custom-duration blur-xl opacity-30"/> 
  
       
        <div className="relative z-10 flex items-center justify-center w-full h-full bg-transparent rounded-full p-1">
         <Image alt='myAvatar' src='/img/avatar.jpg' className=" rounded-full object-fill" width={700} height={700}/>


        </div>
  
    
        {/* <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping  custom-duration z-0" /> */}
      </div>
    );
 
}
