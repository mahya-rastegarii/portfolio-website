
import ParticlesComponent from "@/components/particles/ParticlesComponent";
import Avatar from "@/components/avatar/Avatar";
import IntroSectionBtnComponent from "@/components/section/introduction/IntroSectionBtnComponent";
import GradientTypographyComponent from "@/components/typography/GradientTypographyComponent";
import ScanTypographyComponent from "@/components/typography/ScanTypographyComponent";
import ClientWrapper from "@/components/wrapper/ClientWrapper";

export default function Home() {


  const skills  = [
    {
      id:0,
      skill : "Frontend Developer",
  
    },
    {
      id:1,
      skill : "React Developer",
  
    },
    
  ]
 
  return (
    
   <section className="relative h-screen  flex  items-center justify-center w-full">
    <ClientWrapper >
      <ParticlesComponent/>
    </ClientWrapper>
   
    <div className="flex  items-center justify-center w-[80%]">

<div className="flex justify-center items-center h-fit">
<div className="max-w-3xl text-center">
       <GradientTypographyComponent/>
     
     <div className="mt-4">
      
      <div className="relative overflow-hidden">
     {/* <ClientWrapper> */}
      
     {
        skills.map( skill => (
      <ScanTypographyComponent key={skill.id} {...skill}/>
        ))
        }
     {/* </ClientWrapper> */}
     </div>
     </div>
     <div className="flex justify-center items-center  mt-4  text-white w-full text-left outfit-font">
     <p className="w-[70%] font-light">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iure iusto optio sequi soluta perferendis molestiae voluptate, ratione laborum blanditiis, porro debitis sit numquam deleniti quam sed nisi aperiam veritatis!
     </p>
     </div>
     <ClientWrapper>
      <IntroSectionBtnComponent/>
      </ClientWrapper>
   
</div>
</div>
<div className="flex justify-center items-center p-1 m-2 w-1/2">
  <Avatar/>
</div>
    </div>
   </section>
    
  );
}
