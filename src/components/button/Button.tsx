"use client"
import React from 'react'

// import TooltipComponent from '../tooltip/TooltipComponent';

type ButtonProps = {
    children: React.ReactNode;
    clicked?: () => void;
    className?: string;
    title?: string;
    disabled?: boolean;
    border?: boolean;
  };
export default function Button({children, clicked, className,title, disabled = false, border}: ButtonProps) {
  return (
   
    <button
 type="button"
 disabled={disabled}
 onClick={clicked}
  title={title}
    className={`inline-flex items-center  ${border && "border"} border-purple-500 text-purple-400 hover:bg-gradient-to-r  hover:from-pink-600/70 hover:via-purple-600 hover:to-violet-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-purple-700 cursor-pointer ${className}`}
  >

   {
    children
   }
  </button>

  )
}
