import { education } from '../../../../data/about/Education'
import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation';
export default function Education() {


 const params = useParams();
  const locale = params?.locale || "en"

  return (
    <div dir={locale === "fa" ? 'rtl' : 'ltr'} className=' grid grid-cols-1 lg:grid-cols-2  place-items-center gap-4'>
      {
        education.map( (item, i) => (
          <motion.div
          
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          className={`bg-purple-200/10 w-5/6 p-6 rounded-lg shadow-md ${locale === "fa" ? "text-right" : "text-left"}`} key={item.titleEn}>
                <h3 className=" md:text-lg font-semibold text-white/80 mb-2">{locale === "fa" ? item.titleFa : item.titleEn}</h3>
              <span className="md:text-md  text-white/80 mb-2">{locale === "fa" ? item.degreeFa : item.degreeEn}</span>
             <p className="text-purple-400/80 text-sm font-light">
           <span>{locale === "fa" ? item.locationFa : item.locationEn}</span> | <span>{item.year}</span>
            </p>
          </motion.div>
        ))
      }
  

  </div>
  )
}
