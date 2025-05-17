" use client"
import React from 'react'
import { BiDownload } from 'react-icons/bi'
import Button from './Button'
import { useI18n } from '../../../../locales/client'



 const downloadResume = () => {
  const resumeUrl = "https://br6qgqdbbbsqsadm.public.blob.vercel-storage.com/mahya-rastegari-R3bTeiZYJVmOX6ddhVgEMfi2kAfTnO.pdf";
  const fileName = "mahya-rastegari.pdf";

  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
}

export default function ResumeButton() {
  const t = useI18n();
  return (
    <Button className="rounded-xl gap-2 px-5 py-2" clicked={downloadResume} border title="Download" >
   {
    
     <BiDownload  className='text-xl'/>}
      {t("resumeButton")}
  </Button>
  )
}

