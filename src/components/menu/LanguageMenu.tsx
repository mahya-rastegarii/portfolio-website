
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// // import { usePathname, useRouter } from "next/navigation";
// import Image from 'next/image';
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { FaLanguage } from "react-icons/fa";

// const languages = [

//     { code: "fa", label: "فارسی", icon: "/img/iran.svg" },
//     { code: "en", label: "English", icon: "/img/united-kingdom.svg" },

//   ];
// export default function LanguageMenu() {

//       const [open, setOpen] = useState(false);
//       const [language, setLanguage] = useState("en")
  

//   const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const lang = e.target.value;
//     setLanguage(lang);
//     setOpen(false);
//   };
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="relative"
//     >
//       <select
//         value={language}
//         onClick={() => setOpen(!open)}
//         onChange={changeLanguage}
//         className="appearance-none bg-white/10 backdrop-blur-md text-white px-4 py-2 pr-8 rounded-md border border-purple-400/30 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//       >
//         {languages.map((lang) => (
//           <option key={lang.code} value={lang.code}>
           
//          {lang.label}
//           </option>
//         ))}
//       </select>

//       {/* آیکون فلش کنار سلکت */}
//       <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-white">
      
//       <MdKeyboardArrowDown className={` ${open ? "rotate-180" : "rotate-0"} transition-all`} />
     
//       </div>
//     </motion.div>
    
  
//   )
// }


"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";



const options = [
  { code: "fa", label: "فارسی", icon: "/img/iran.svg"},
  { code: "en", label: "English", icon: "/img/united-kingdom.svg" },
];

export default function LanguageMenu() {
  // const pathname = usePathname();
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[1]);

  const handleSelect = (option: (typeof options)[0]) => {
    setSelected(option);
    
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
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
            className="absolute mt-2 w-full bg-white/5 backdrop-blur-md rounded-md border border-purple-500/80 text-white shadow-lg"
          >
            {options.map((option) => (
              <li
                key={option.code}
                onClick={() => handleSelect(option)}
                className="p-2 hover:bg-white/30 bg-transparent cursor-pointer flex items-center justify-center gap-2 border-b border-purple-400/10"
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
