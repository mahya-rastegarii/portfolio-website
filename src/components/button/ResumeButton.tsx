" use client"
import React from 'react'
import { BiDownload } from 'react-icons/bi'
import Button from './Button'

 const downloadResume = () => {

  const link = document.createElement('a');
  link.href = "#";
  link.setAttribute('download', '#اسم');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

 }


export default function ResumeButton() {
  return (
    <Button className="rounded-xl gap-2 px-5 py-2" clicked={downloadResume} border title="Download" >
   {
    
     <BiDownload  className='text-xl'/>}
      Download Resume
  </Button>
  )
}
