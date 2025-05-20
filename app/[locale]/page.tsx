
import ParticlesComponent from "./components/particles/ParticlesComponent";
import Avatar from "./components/avatar/Avatar";
import IntroSectionBtnComponent from "./components/section/introduction/IntroSectionBtnComponent";
import GradientTypographyComponent from "./components/typography/GradientTypographyComponent";
import ScanTypographyComponent from "./components/typography/ScanTypographyComponent";
import ClientWrapper from "./components/wrapper/ClientWrapper";
import { getI18n } from "../../locales/server";
import MotionWrapper from "./components/wrapper/MotionWrapper";


export interface IPageParams {
  params: Promise<{ locale: string }>
}
 

export  default async  function Home({params} : IPageParams) {
  const t = await getI18n();
 const {locale} = await  params;
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
    
   <section className="relative min-h-screen lg:h-screen  flex items-center justify-center w-full overflow-y-scroll md:overflow-hidden  ">

    <ClientWrapper >
      <ParticlesComponent/>
    </ClientWrapper>
   
   <div className={`flex flex-col-reverse  ${locale === "fa" ? "md:flex-row-reverse" : "md:flex-row"} items-center  justify-center w-full md:w-[80%] mt-16 mb-20 md:mb-0  md:mt-0`}>
   
     <ClientWrapper>
  <MotionWrapper
  num1={locale === "fa" ? 50 :-50}
  num2={locale === "fa" ? -50 : 50}
  className="flex justify-center items-center h-fit">
<div className="w-full max-w-3xl text-center">
    <GradientTypographyComponent text={name}/>
     
     <div className="mt-4">
      
      <div className="relative overflow-hidden">
   
      
     {
        skills.map( skill => (
      <ScanTypographyComponent key={skill.id} {...skill} dir={locale === "fa" ? "text-scan-rtl" : "text-scan-ltr"}/>
        ))
        }
  
     </div>
     </div>
     <div className={`flex justify-center items-center  mt-4  text-white w-full ${locale === "fa" ? "text-right" : "text-left"} outfit-font`}>
     <p className="w-[70%] font-light">
      {t("dashboard.aboutMe")}
     </p>
     </div>
      <IntroSectionBtnComponent/>
   
</div>
</MotionWrapper>
      </ClientWrapper>


<ClientWrapper>
<MotionWrapper
num1={locale === "fa" ? -50 :50}
num2={locale === "fa" ? 50 :-50}
className="flex justify-center items-center p-1 m-2 w-1/2"
>
  <Avatar/>
</MotionWrapper>
</ClientWrapper>
    </div> 
   </section>
    
  );
}
