"use client";

import { AnimatePresence, motion  } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const numStripes = 8;
 
export const PageTransition = (
 
) => {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true)
    const timeout = setTimeout(() => setShow(false), 1800); 
    return () => clearTimeout(timeout);
  }, [pathname]);

  

  
  return (



  <AnimatePresence>
  {show && (
    <motion.div
      key={pathname}
      className="  fixed inset-0 z-[9999] w-full h-full flex flex-col "
      
    >
    
   
      {[...Array(numStripes)].map((_, i) => (
        <motion.div
    key={`in-${i}`}
          initial={{ height:  "100%"  }}
          animate={{ height: 0}}
          exit={{ y: "-100%" }}
          transition={{
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="w-full absolute left-0  bg-white "
          style={{
            left: `${(i * 100) / numStripes}%`,
            width: `${100 / numStripes}%`,
          }}
        />
      ))}

     
     
    
    </motion.div>
  )}
</AnimatePresence>

  
  );
};
