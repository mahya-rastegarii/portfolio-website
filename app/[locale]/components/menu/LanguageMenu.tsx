"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { useChangeLocale, useCurrentLocale  } from "../../../../locales/client";



const options = [
  { code: "fa", label: "فارسی", icon: "/img/languages/iran.svg"},
  { code: "en", label: "English", icon: "/img/languages/united-kingdom.svg" },
] as const;

type LanguageOption = typeof options[number];

export default function LanguageMenu() {

 const changeLanguage = useChangeLocale()
 const locale = useCurrentLocale()
  // const pathname = usePathname();
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<LanguageOption>(options[1]);
    const menuRef = useRef<HTMLDivElement>(null);

  
  const handleSelect = (option: LanguageOption) => {
    const language = option.code;
    setSelected(option);
    changeLanguage(language)
    localStorage.setItem("language", language);
    setIsOpen(false);
  };


  useEffect(() => {
    const lang = localStorage.getItem("language") || "en"
    const currentLanguage = options.find( option => option.code === lang);
    if (currentLanguage) {
      setSelected(currentLanguage);
      changeLanguage(currentLanguage.code);
    }
  }, [])

   const handleClickOutside = (e: MouseEvent) =>{
          if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setIsOpen(false);
          }
        }
          useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
              document.removeEventListener('mousedown', handleClickOutside);
            }
          }, [])
          
  return (
    <div className="relative z-50" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-fit cursor-pointer flex  items-center justify-between p-2 gap-2  rounded-md border border-purple-500 text-white"
      >
        <span className="flex items-center">
        <Image alt= {selected.label} src={selected.icon} className="" width={20} height={5}/>
        </span>
        <span className="text-purple-500">  <MdKeyboardArrowDown className={` ${isOpen ? "rotate-180" : "rotate-0"} transition-all`} /></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-full bg-white/5 backdrop-blur-md rounded-md border border-purple-500/80 text-white shadow-lg z-50"
          >
            {options.map((option) => (
              <li
                key={option.code}
                onClick={() => handleSelect(option)}
                className={`p-2 hover:bg-white/30 bg-transparent ${option.code === locale ? "bg-white/20" : "bg-transparent" } cursor-pointer flex items-center justify-center gap-2 border-b border-purple-400/10`}
              >
                <Image alt={option.label} src={option.icon} className=" " width={20} height={10}/>
                <span className=" text-sm">
                 {option.code}
                </span>
               
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
