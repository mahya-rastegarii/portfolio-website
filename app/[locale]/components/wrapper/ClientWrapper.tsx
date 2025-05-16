"use client"

import React from 'react'

type wrapperProps = {
    children: React.ReactNode;
}
export default function ClientWrapper({children}: wrapperProps) {
  return (
   <>
   {
    children
}
   </>
  );
}
