"use client"
import React from 'react'
import Button from '../../button/Button'
import { contactMedia } from '../../../../data/contact/ContactMedia';
import GradientTypographyComponent from '../../typography/GradientTypographyComponent';
import emailjs from "@emailjs/browser"
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useCurrentLocale, useI18n } from '../../../../../locales/client';
import MotionWrapper from '../../wrapper/MotionWrapper';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export default function ContactMe() {

 const locale = useCurrentLocale()
 const t = useI18n();

  const {register, handleSubmit, reset, formState: {errors, isSubmitting},} =useForm<FormData>();
    
    
      const onSubmit = async(data: FormData) => {
      
        const templateParams = {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        };
       
      await  emailjs.send(
          "service_el47h5e",
          "template_z9jm2si",
         templateParams,
          "wHUKkg5xHsuZl1qN9",
        )
        .then (
          () => {
            toast.success(t("contactMe.notification.success"))
            reset()
          },
          () => {
            toast.error(t("contactMe.notification.error"))
          }
        )
       
      };
  return (
    <div dir={locale === "fa" ? "rtl" : "ltr"} className="w-full md:w-[80%] lg:w-[90%] xl:w-[80%] z-40 flex flex-col justify-center items-center lg:flex-row gap-2 mt-16  mb-20 lg:mb-0  lg:mt-24">

          <div className="flex flex-col justify-center  items-start space-y-4 w-full lg:w-2/4">

          <div className=' w-full flex justify-center lg:w-fit lg:justify-start   lg:pt-0  lg:mt-0 lg:mb-9 '>
       <GradientTypographyComponent text={t('contactMe.title')}/> 
        
        </div> 
<div className="flex flex-col justify-start items-center gap-3 mb-6  lg:mb-0">
{
  contactMedia.map( (item, i) => (

   <MotionWrapper key={item.titleEn}
   num1={locale === "fa" ? 20 : -20 }
   num2={locale === "fa" ? -20 : 20 }
    delay={i * 0.05 }
   className="w-full flex justify-start items-center gap-3 ">

<div className='text-center my-auto border border-purple-600/80 text-xl text-purple-600/80  rounded-lg p-2 h-fit'>
   {item.icon}
</div>
<div >
    <h3 className=' font-bold text-purple-600/80 text-lg'>
    {locale === "fa" ? item.titleFa : item.titleEn}
     </h3>
     <p className='text-purple-200'>
     {
      item.value
     }
     </p>
</div>
   
  </MotionWrapper>
  ))
}
</div>
</div>
 
      <MotionWrapper
       num1={locale === "fa" ? -50 :50}
       num2={locale === "fa" ? 50 :-50}
        className="w-full lg:w-2/4 border bg-black/10  border-purple-500/30  px-6 py-3 rounded-lg shadow-xl"
       
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
          <div>
            <label htmlFor="name" className="block text-sm font-medium"> {t("contactMe.label.name")}</label>
            <input
              type="text"
              id="name"

            {...register("name", {required:t("contactMe.message.nameRequired")})}
            
              className="w-full mt-2 p-3 focus:outline-1 outline-purple-600 bg-black/40 border border-purple-600/80 rounded-lg"
            />
          {errors.name && errors.name.type === "required" &&(<span className='text-red-500'>{errors.name.message}</span>)}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">{t("contactMe.label.email")}</label>
            <input
              type="email"
              id="email"

            {...register("email", { required:t("contactMe.message.emailRequired"),
              pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t("contactMe.message.emailPattern"),
              },
            })}

              className="w-full mt-2 p-3 focus:outline-1 outline-purple-600 bg-black/40 border border-purple-600/80 rounded-lg"
            />
          {errors.email && errors.email.type === "required" &&(<span className='text-red-500'>{errors.email.message}</span>)}
          {errors.email && errors.email.type === "pattern" &&(<span className='text-red-500'>{errors.email?.message}</span>)}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">{t("contactMe.label.subject")}</label>
            <input
              type="text"
              id="subject"

             {...register("subject", {required:t("contactMe.message.subjectRequired")})}
             
              className="w-full mt-2 p-3 focus:outline-1 outline-purple-600 bg-black/40 border border-purple-600/80 rounded-lg"
            />
          {errors.subject && errors.subject.type === "required" &&(<span className='text-red-500'>{ errors.subject.message}</span>)}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">{t("contactMe.label.message")}</label>
            <textarea
              id="message"

              {...register("message", {required:t("contactMe.message.messageRequired")})}
              rows={4}
              className="w-full mt-2 p-3 focus:outline-1 outline-purple-600 bg-black/40 border border-purple-600/80 rounded-lg resize-none"
            />
          {errors.message && errors.message.type === "required" &&(<span className='text-red-500'>{ errors.message.message}</span>)}
          </div>
          <div className=" w-full flex justify-center items-center">
          <Button
            typeBtn="submit"
            disabled={isSubmitting}
            border
            title={t("contactMe.submitBtn.title")}
            className=" py-3 w-full md:w-1/3 px-2 rounded-lg transition  "
          >
             {isSubmitting ? t("contactMe.submitBtn.submittingTitle") : t("contactMe.submitBtn.title")}
          </Button>

          </div>
        </form>
      </MotionWrapper>
     
    
       </div>
  )
}
