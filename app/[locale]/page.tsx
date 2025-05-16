
import ParticlesComponent from "./components/particles/ParticlesComponent";
import Avatar from "./components/avatar/Avatar";
import IntroSectionBtnComponent from "./components/section/introduction/IntroSectionBtnComponent";
import GradientTypographyComponent from "./components/typography/GradientTypographyComponent";
import ScanTypographyComponent from "./components/typography/ScanTypographyComponent";
import ClientWrapper from "./components/wrapper/ClientWrapper";
import { getI18n } from "../../locales/server";
import { motion } from "framer-motion";



export  default async  function Home({params} : {params: {locale: string}}) {

  const t = await getI18n();
  const languageLocale = params?.locale || "en";

  const name = t("myName");
  const skills  = [
    {
      id:0,
      skill : t("dashboard.skill.skill1"),
  
    },
    {
      id:1,
      skill : t("dashboard.skill.skill2"),
  
    },
    
  ]
 
  return (
    
   <section className="relative h-full md:h-screen  flex items-center justify-center w-full overflow-y-scroll md:overflow-hidden pt-10 md:pt-0">

    <ClientWrapper >
      <ParticlesComponent/>
    </ClientWrapper>
   
   <div className={`flex flex-col-reverse  ${languageLocale === "fa" ? "md:flex-row-reverse" : "md:flex-row"} items-center  justify-center w-full md:w-[80%] mt-24 mb-20 md:mb-0  md:mt-0`}>

  <motion.div
  initial={{opacity: 0, x: languageLocale === "fa" ? 50 :-50}}
  animate={{opacity:1, x: 0}}
  exit={{opacity: 0, x:  languageLocale === "fa" ? -50 :50}}
  transition={{duration: 0.5}}
  className="flex justify-center items-center h-fit">
<div className="w-full max-w-3xl text-center">
    <GradientTypographyComponent text={name}/>
     
     <div className="mt-4">
      
      <div className="relative overflow-hidden">
   
      
     {
        skills.map( skill => (
      <ScanTypographyComponent key={skill.id} {...skill} dir={languageLocale === "fa" ? "text-scan-rtl" : "text-scan-ltr"}/>
        ))
        }
  
     </div>
     </div>
     <div className={`flex justify-center items-center  mt-4  text-white w-full ${languageLocale === "fa" ? "text-right" : "text-left"} outfit-font`}>
     <p className="w-[70%] font-light">
      {t("dashboard.aboutMe")}
     </p>
     </div>
     <ClientWrapper>
      <IntroSectionBtnComponent/>
      </ClientWrapper>
   
</div>
</motion.div>

<motion.div
initial={{opacity: 0, x: languageLocale === "fa" ? -50 :50}}
animate={{opacity:1, x: 0}}
exit={{opacity: 0, x:  languageLocale === "fa" ? 50 : -50}}
transition={{duration: 0.5}}
 className="flex justify-center items-center p-1 m-2 w-1/2">
  <Avatar/>
</motion.div>
    </div> 
   </section>
    
  );
}
