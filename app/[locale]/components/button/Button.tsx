"use client"
import React from 'react'


type ButtonProps = {
    children: React.ReactNode;
    clicked?: () => void;
    className?: string;
    title?: string;
    disabled?: boolean;
    border?: boolean;
    typeBtn?: "button" | "submit" | "reset";
  };
export default function Button({children, clicked, className,title, disabled = false, border, typeBtn = "button"}: ButtonProps) {
  return (
   
    <button
 type={typeBtn}
 disabled={disabled}
 onClick={clicked}
  title={title}
    className={`inline-flex items-center justify-center  ${border && "border"} border-purple-500 text-purple-400  transition-all duration-300  ${className} ${disabled ? "opacity-35 cursor-default" : " hover:bg-purple-600/80   hover:text-white shadow-sm hover:shadow-purple-700 cursor-pointer"}`}
  >

   {
    children
   }
  </button>

  )
}
