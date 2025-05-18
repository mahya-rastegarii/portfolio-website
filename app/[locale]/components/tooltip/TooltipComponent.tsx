"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";

type TooltipProps = {
  children: ReactNode;
  text?: string;
  position?: "top" | "bottom" | "left" | "right";
 
};

export default function TooltipComponent({
  children,
  text,
  position = "top",
}: TooltipProps) {
  const [show, setShow] = useState(false);

 const positions = {
    top: {
      container: `bottom-[calc(100%+16px)] left-1/2 -translate-x-1/2`,
      arrow: "top-full left-1/2 -translate-x-1/2 border-t-purple-900",
    },
    bottom: {
      container: `top-[calc(100%+16px)] left-1/2 -translate-x-1/2`,
      arrow: "bottom-full left-1/2 -translate-x-1/2 border-b-purple-900",
    },
    left: {
      container: `right-[calc(100%+18px)] top-1/2 -translate-y-1/2`,
      arrow: "left-full top-1/2 -translate-y-1/2 border-l-purple-900",
    },
    right: {
      container: `left-[calc(100%+18px)] top-1/2 -translate-y-1/2`,
      arrow: "right-full top-1/2 -translate-y-1/2 border-r-purple-900",
    },
  };

  const current = positions[position];

  return (
    <div
      className="relative  inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className={`absolute hidden md:inline-flex z-50 px-3 py-1 text-xs whitespace-nowrap rounded-md bg-purple-900
                         text-white shadow-lg ${current.container}`}
          >
            {text}

            <div
            className={`absolute w-0 h-0 border-5 border-transparent ${current.arrow}`}
          />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
