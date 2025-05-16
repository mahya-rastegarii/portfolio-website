"use client";

import { AnimatePresence, motion  } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// const pageVariants = {
//   initial: { clipPath: "circle(0% at 50% 50%)" },
//   animate: {
//     clipPath: "circle(150% at 50% 50%)",
//     transition: { duration: 0.8, ease: "easeInOut" },
//   },
//   exit: {
//     clipPath: "circle(0% at 50% 50%)",
//     transition: { duration: 0.8, ease: "easeInOut" },
//   },
// };

const numStripes = 8;
  // const strips = Array.from({ length: 8 });
export const PageTransition = (
  // { children }: { children: React.ReactNode }
) => {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true)
    const timeout = setTimeout(() => setShow(false), 1800); // زمان انیمیشن
    return () => clearTimeout(timeout);
  }, [pathname]);

  

  
  return (

    // <AnimatePresence mode="wait">
    // <motion.div
    //  key={pathname}
    //   className="w-full h-full"
    //   variants={pageVariants}
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    // >
    //   {children}
    // </motion.div>
    // </AnimatePresence>

   
  //   show && (<div className="fixed inset-0 w-full  h-full z-[9999] pointer-events-none">
  //   {Array.from({ length: numStripes }).map((_, i) => (
  //     <motion.div
  //       key={pathname}
  //       initial={{ height: 0 }}
  //       animate={{ height: "100%" }}
  //       exit={{ y: "-100%" }}
  //       transition={{
  //         duration: 0.6,
  //         delay: i * 0.1,
  //         ease: [0.4, 0, 0.2, 1],
  //       }}
  //       className="bg-white w-full absolute left-0"
  //       style={{
  //         left: `${(i * 100) / numStripes}%`,
  //         width: `${100 / numStripes}%`,
  //       }}
  //     />
  //   ))}
  // </div>)

  <AnimatePresence>
  {show && (
    <motion.div
      key={pathname}
      className="  fixed inset-0 z-[9999] w-full h-full flex flex-col "
      // initial={{ opacity: 1 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // initial={{ height: 0 }}
      // animate={{ height: "100%" }}
      // exit={{ y: "-100%" }}
    >
      {/* مرحله ورود (کرکره پایین میاد) */}
   
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

      {/* مرحله خروج (کرکره باز می‌شه) */}
    
      {/* {[...Array(numStripes)].map((_, i) => (
        <motion.div
        key={`out-${i}`}
          initial={{ height: "100%" }}
          animate={{ height:  0 }}
          // exit={{ y: "-100%" }}
          transition={{
            delay: 0.8 + i * 0.1,
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="w-full absolute left-0   bg-gradient-to-bl from-purple-900/10 via-indigo-900/20 to-transparent"
          style={{
                    left: `${(i * 100) / numStripes}%`,
                    width: `${100 / numStripes}%`,
                  }}

        />
      ))} */}
    
    </motion.div>
  )}
</AnimatePresence>

  // <AnimatePresence>
  //     {show && (
  //       <div className="fixed top-0 left-0 w-full  h-full z-[9999] pointer-events-none">
  //         {strips.map((_, i) => (
  //           <motion.div
  //             key={i}
  //             initial={{ height: 0 }}
  //             animate={{ height: "100%" }}
  //             exit={{ y: "-100%" }}
  //             transition={{
  //               duration: 0.6,
  //               delay: i * 0.05,
  //               ease: "easeInOut",
  //             }}
  //             className="w-full h-[12.5%] bg-gradient-to-bl from-purple-900/10 via-indigo-900/20 to-transparent"
  //           />
  //         ))}
  //       </div>
  //     )}
  //   </AnimatePresence>
  );
};
