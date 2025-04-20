"use client";

import { motion, AnimatePresence  } from "framer-motion";
import { usePathname } from "next/navigation";
const pageVariants = {
  initial: { clipPath: "circle(0% at 50% 50%)" },
  animate: {
    clipPath: "circle(150% at 50% 50%)",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    clipPath: "circle(0% at 50% 50%)",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export const PageTransition = ({ children }: { children: React.ReactNode }) => {

    const pathname = usePathname();
  return (

    <AnimatePresence mode="wait">
    <motion.div
     key={pathname}
      className="w-full h-full"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
    </AnimatePresence>
  );
};
