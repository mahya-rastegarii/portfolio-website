import React from 'react'
import { motion } from 'framer-motion';


export default function DefualtLoading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black/90">
      <motion.div
        className="w-16 h-16 border-[5px] border-purple-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />
    </div>
  );
}