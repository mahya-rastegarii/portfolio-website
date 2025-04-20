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
            link: "#",
        },
        {
            icon: <RiLinkedinLine className='text-xl'/>,
            title: "Linkedin",
            link: "#",
        },
        {
            icon: <RiTelegram2Line className=' text-xl'/>,
            title: "Telegram",
            link: "#",
        },
      ]
      
  return (
    <div className=' flex justify-center gap-2 items-center'>
        {
            media.map( btn => (
                <Button key={btn.title} className='rounded-full  p-1' border title={btn.title}   clicked={() => console.log("btn Link", btn.link)}>
                    {
                        btn.icon
                    }
                </Button>
            ))
        }
    </div>
  )
}
