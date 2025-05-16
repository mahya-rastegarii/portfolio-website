"use client"
import React from 'react'
// import { DiGithub } from 'react-icons/di'
import Button from './Button';
import { RiGithubLine, RiLinkedinLine, RiTelegram2Line } from 'react-icons/ri';

type MediaInfoProps = {
   icon: React.JSX.Element;
    title: string;
    link: string;
}

export default function SocialMedia() {

    const media : MediaInfoProps[] = [
        {
            icon: <RiGithubLine className='text-xl'/>,
            title: "Github",
            link: "https://github.com/mahya-rastegarii",
        },
        {
            icon: <RiLinkedinLine className='text-xl'/>,
            title: "Linkedin",
            link: "https://www.linkedin.com/in/mahya-rastegarii",
        },
        {
            icon: <RiTelegram2Line className=' text-xl'/>,
            title: "Telegram",
            link: "https://t.me/mahya_rastegari",
        },
      ]
      
  return (
    <div className=' flex justify-center gap-2 items-center'>
        {
            media.map( btn => (
                <Button key={btn.title} className='rounded-full  p-1' border title={btn.title}    clicked={() => window.open(btn.link, "_blank")}>
                    {
                        btn.icon
                    }
                </Button>
            ))
        }
    </div>
  )
}
