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
      arrow: "top-full left-1/2 -translate-x-1/2 border-t-violet-900/80",
    },
    bottom: {
      container: `top-[calc(100%+16px)] left-1/2 -translate-x-1/2`,
      arrow: "bottom-full left-1/2 -translate-x-1/2 border-b-violet-900/80",
    },
    left: {
      container: `right-[calc(100%+18px)] top-1/2 -translate-y-1/2`,
      arrow: "left-full top-1/2 -translate-y-1/2 border-l-violet-900/80",
    },
    right: {
      container: `left-[calc(100%+18px)] top-1/2 -translate-y-1/2`,
      arrow: "right-full top-1/2 -translate-y-1/2 border-r-violet-900/80",
    },
  };

  const current = positions[position];

  return (
    <div
      className="relative inline-block"
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
            className={`absolute z-50 px-3 py-1 text-xs whitespace-nowrap rounded-md bg-gradient-to-r
                        from-purple-900/80 to-violet-900/80 text-white shadow-lg ${current.container}`}
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
