"use client"
import React from 'react'
import Button from '@/components/button/Button'
import {motion} from 'framer-motion'
import { contactMedia } from '@/data/contact/ContactMedia';
import GradientTypographyComponent from '@/components/typography/GradientTypographyComponent';
import emailjs from "@emailjs/browser"
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export default function ContactMe() {

 

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
            alert("پیام با موفقیت ارسال شد")
            reset()
          },
          () => {
            alert("خطا در ارسال پیام")
          }
        )
       
      };
  return (
    <div className="w-full  md:w-[90%] xl:w-[80%] z-40 flex flex-col justify-center items-center md:flex-row gap-6">

          <div className="flex flex-col justify-center  items-start space-y-4 w-full md:w-1/4">

          <div className=' mb-9'>
       <GradientTypographyComponent text="Contact Me"/> 
        
        </div>

{
  contactMedia.map( item => (

   <div className="flex justify-start items-center gap-3" key={item.title}>

<div className='text-center my-auto border border-purple-600/80 text-xl text-purple-600/80  rounded-lg p-2 h-fit'>
   {item.icon}
</div>
<div >
    <h3 className=' font-bold text-purple-600/80 text-lg'>
    {item.title}
     </h3>
     <p className='text-purple-200'>
     {
      item.value
     }
     </p>
</div>
   </div>
  ))
}
</div>
      <motion.div
        className="w-full md:w-2/4 border border-purple-500/10  p-6 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
          <div>
            <label htmlFor="name" className="block text-sm font-medium"> your name</label>
            <input
              type="text"
              id="name"

            {...register("name", {required:"required"})}
            
              className="w-full mt-2 p-3 focus:outline-1 outline-purple-600 bg-black/40 border border-purple-600/80 rounded-lg"
            />
          {errors.name && errors.name.type === "required" &&(<span className='text-red-500'>{errors.name.message}</span>)}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">your Email</label>
            <input
              type="email"
              id="email"

            {...register("email", { required:"required",
              pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "فرمت ایمیل صحیح نیست",
              },
            })}

              className="w-full mt-2 p-3 focus:outline-1 outline-purple-600 bg-black/40 border border-purple-600/80 rounded-lg"
            />
          {errors.email && errors.email.type === "required" &&(<span className='text-red-500'>{errors.email.message}</span>)}
          {errors.email && errors.email.type === "pattern" &&(<span className='text-red-500'>{errors.email?.message}</span>)}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              id="subject"

             {...register("subject", {required:"required"})}
             
              className="w-full mt-2 p-3 focus:outline-1 outline-purple-600 bg-black/40 border border-purple-600/80 rounded-lg"
            />
          {errors.subject && errors.subject.type === "required" &&(<span className='text-red-500'>{ errors.subject.message}</span>)}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"

              {...register("message", {required:"required"})}
              rows={5}
              className="w-full mt-2 p-3 focus:outline-1 outline-purple-600 bg-black/40 border border-purple-600/80 rounded-lg resize-none"
            />
          {errors.message && errors.message.type === "required" &&(<span className='text-red-500'>{ errors.message.message}</span>)}
          </div>
          <div className=" w-full flex justify-center items-center">
          <Button
            typeBtn="submit"
            disabled={isSubmitting}
            border
            title="send Message"
            className=" py-3 w-1/3 px-2 rounded-lg transition  "
          >
             {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
          </Button>

          </div>
        </form>
      </motion.div>

     
    
       </div>
  )
}
