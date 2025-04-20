"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHome } from "react-icons/bi";
import TooltipComponent from "../tooltip/TooltipComponent";

const routes = [
  { path: "/", label: "Home", icon: <BiHome className="text-xl"/> },
  { path: "/about", label: "About", icon: <BiHome className="text-xl"/> },
  // { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects", icon: <BiHome className="text-xl"/> },
  { path: "/contact", label: "Contact", icon: <BiHome className="text-xl"/> },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-1/2 rounded-2xl right-10 z-50  border text-purple-400 border-purple-500  px-2 py-4 flex flex-col items-center justify-center gap-3
                 bg-white/10 backdrop-blur-md border-r  shadow-lg"
    >
      {routes.map((route, index) => (
        <Link href={route.path} key={index} className="group">
        <TooltipComponent text={route.label} position="left">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={`text-xs sm:text-sm p-2 rounded-full  transition-all 
              ${
                pathname === route.path
                  ? "bg-white/80 text-purple-800 font-semibold"
                  : "group-hover:bg-purple-200/20"
              }`}
          >
            {route.icon}
          </motion.div>
        </TooltipComponent>
        </Link>
      ))}
    </motion.aside>
  );
}
