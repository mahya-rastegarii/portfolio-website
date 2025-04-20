import Image from 'next/image'
import React from 'react'

export default function LanguageMenu() {
  return (
   <div>

    <ul>
        <li>
            <Image alt='persian Img' src="/img/united-kingdom.svg" width={50} height={30} className=' rounded-2xl'/>
        </li>
        <li>
            <Image alt='english Img' src="/img/iran" width={50} height={30} className=' rounded-2xl'/>
        </li>
    </ul>
   </div>
  )
}
