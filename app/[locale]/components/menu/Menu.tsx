"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHome, BiInfoSquare , BiCodeBlock, BiMessageDetail  } from "react-icons/bi";
import TooltipComponent from "../tooltip/TooltipComponent";
import { useCurrentLocale, useI18n } from "../../../../locales/client";


export default function Menu() {
  const locale = useCurrentLocale();
  const t = useI18n()
  const routes = [
    { path: `/${locale}`, label:t("menu.homeLabel"), icon: <BiHome className="text-xl"/> },
    { path: `/${locale}/about`, label:t("menu.aboutLabel"), icon: <BiInfoSquare  className="text-xl"/> },
    { path: `/${locale}/projects`, label:t("menu.projectsLabel"), icon: <BiCodeBlock  className="text-xl"/> },
    { path: `/${locale}/contact`, label:t("menu.contactLabel"), icon: <BiMessageDetail className="text-xl"/> },
  ];
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed w-[70%] md:w-fit md:top-1/2 rounded-2xl left-1/2 md:right-5 xl:right-10 z-50 md:translate-y-[-50%] bottom-0.5 md:left-auto md:bottom-auto translate-x-[-50%] md:translate-x-0 border text-purple-400 border-purple-500  px-2 py-2 md:py-4 flex md:flex-col items-center justify-center gap-3
                 bg-white/10 backdrop-blur-md border-r  shadow-lg"
    >
      {routes.map((route, index) => (
        <Link href={route.path} key={index} className="group">
        <TooltipComponent text={route.label} position="left">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={`text-2xl sm:text-lg p-2 rounded-full  transition-all 
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
